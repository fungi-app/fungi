from rest_framework import serializers

from main.models import (
    Color, PublicationImage,
    MushroomImage, Family,
    Mushroom, Publication,
    Media
)
from user.serializers import UserSerializer


class MediaSerializer(serializers.ModelSerializer):
    image = serializers.FileField(write_only=True)

    class Meta:
        model = Media
        fields = ('id', 'name', 'image', 'image_url')


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['name', 'hex_code']


class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ['name', 'latin_name', 'slug']


class SynonymousNameSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)


class MushroomImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MushroomImage
        fields = ['name', 'image', 'image_url']

    name = serializers.CharField(source='media.name')
    image = serializers.FileField(source='media.image')
    image_url = serializers.CharField(source='media.image.url')


class MushroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mushroom
        fields = [
            'name', 'latin_name', 'synonymous_names', 'slug',
            'family', 'red_booked', 'description', 'eatable', 'have_foot',
            'foot_size_from', 'foot_size_to', 'foot_type', 'foot_color',
            'head_type', 'hymenophore', 'head_color', 'created_at',
            'updated_at', 'head_color', 'images'
        ]

    synonymous_names = SynonymousNameSerializer(many=True)
    family = FamilySerializer(many=True)
    head_color = ColorSerializer()
    foot_color = ColorSerializer()
    images = MushroomImageSerializer(many=True)


class PublicationImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicationImage
        fields = ['name', 'image', 'image_url']

    name = serializers.CharField(source='media.name')
    image = serializers.FileField(source='media.image')
    image_url = serializers.CharField(source='media.image.url')


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['slug', 'title', 'content', 'preview', 'author', 'created_at']

    author = UserSerializer(read_only=True)
    preview = PublicationImageSerializer()
    content = serializers.SerializerMethodField()

    def get_content(self, publication):
        return publication.content.format(
            *list(
                (
                    f'![]({image.media.image_url})' for image in publication.images.all()
                )
            )
        )
