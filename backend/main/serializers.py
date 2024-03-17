from rest_framework import serializers

from main.models import (
    Color, Image,
    MushroomImage, Family,
    Mushroom, Publication,
)
from user.serializers import UserSerializer


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


class ImageSerializer(serializers.Serializer):
    class Meta:
        model = Image


class MushroomImageSerializer(ImageSerializer):
    class Meta:
        model = MushroomImage


class MushroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mushroom
        fields = [
            'name', 'latin_name', 'synonymous_names', 'slug',
            'family', 'red_booked', 'description', 'eatable', 'have_foot',
            'foot_size_from', 'foot_size_to', 'foot_type', 'foot_color',
            'head_type', 'hymenophore', 'head_color', 'created_at',
            'updated_at', 'head_color', 'mushroom_images'
        ]

    synonymous_names = SynonymousNameSerializer(many=True)
    family = FamilySerializer(many=True)
    head_color = ColorSerializer()
    foot_color = ColorSerializer()
    mushroom_images = MushroomImageSerializer(many=True)


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['slug', 'title', 'content', 'image', 'author', 'created_at']

    author = UserSerializer(read_only=True)
    image = ImageSerializer(read_only=True)
