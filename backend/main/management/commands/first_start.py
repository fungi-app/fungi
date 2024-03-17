from django.core.management.base import BaseCommand
from django.db.transaction import atomic

from main.models import Family

import json


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        with atomic():
            self.create_families()

    def create_families(self):
        for family in self._get_family_objects():
            Family.objects.create(name=family['name'], latin_name=family['latin_name'])

    def _get_family_objects(self):
        families = self._parse_json('main/management/commands/families.json')['families']
        return (
            {
                'name': family.split(' (')[0],
                'latin_name': family.split(' (')[1].split(')')[0]
            } for family in families
        )

    def _parse_json(self, path):
        with open(path) as file:
            return json.load(file)
