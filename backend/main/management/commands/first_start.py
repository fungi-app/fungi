from django.core.management.base import BaseCommand
from django.core.files.images import ImageFile
from django.db.transaction import atomic
from os import walk

from main.models import Family, Publication, PublicationImage, Media
from user.models import User

import io
import json
import requests


class Command(BaseCommand):
    PUBLICATIONS_PATH = 'main/management/commands/md'
    FAMILIES_PATH = 'main/management/commands/families.json'

    def handle(self, *args, **kwargs):
        with atomic():
            self.create_admin()
            self.create_publications()
            self.create_families()

    def create_admin(self):
        self.admin = User.objects.create_superuser('admin', 'admin')
        return self.admin

    def create_families(self):
        for family in self._get_family_objects():
            Family.objects.create(name=family['name'], latin_name=family['latin_name'])

    def create_publications(self):
        publications = self._get_publications_files(self.PUBLICATIONS_PATH)
        for publicationPath in publications:
            with open(f'{self.PUBLICATIONS_PATH}/{publicationPath}') as file:
                publicationText = file.read()

                publication = Publication.objects.create(
                    title=publicationPath[:-3],
                    content=self._get_publication_text(publicationText),
                    author=self.admin,
                )

                self._generate_publication_images(publicationText, publication)

    def _get_publication_text(self, publication):
        splitedText = publication.split('![](')
        publicationText = publication.split('![](')[0]

        for textPart in splitedText[1:]:
            publicationText += '{}'
            publicationText += textPart.split(')')[1]

        return publicationText

    def _generate_publication_images(self, publicationText, publication):
        imagesLinks = (prelink.split(')')[0] for prelink in publicationText.split('![](')[1:])
        for url in imagesLinks:
            image = ImageFile(io.BytesIO(self._download_image(url)), name=f'{publication.title.replace(" ", "-")}.jpg')
            media = Media.objects.create(image=image)
            PublicationImage.objects.create(media=media, publication=publication)

    def _download_image(self, url: str):
        try:
            r = requests.get(url, stream=True)
            r.raw.decode_content = True
            return r.content

        except Exception:
            raise Exception(f'Invalid image url {url}')

    def _get_family_objects(self):
        families = self._parse_json(self.FAMILIES_PATH)['families']
        return (
            {
                'name': family.split(' (')[0],
                'latin_name': family.split(' (')[1].split(')')[0]
            } for family in families
        )

    def _get_publications_files(self, path):
        return next(walk(path), (None, None, []))[2]

    def _parse_json(self, path):
        with open(path) as file:
            return json.load(file)
