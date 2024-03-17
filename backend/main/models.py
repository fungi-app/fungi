from django.contrib.postgres.fields import ArrayField
from django.core.validators import MinValueValidator
from django.db import models

from main.helpers import get_random_slug
from user.models import User


class Color(models.Model):
    name = models.CharField('Name', max_length=255, unique=True, db_index=True)
    hex_code = models.CharField('Hex code', max_length=7, unique=True)


class Family(models.Model):
    name = models.CharField('Name', max_length=255, unique=True, db_index=True)
    latin_name = models.CharField('Latin name', max_length=255)
    slug = models.SlugField(max_length=32, db_index=True, unique=True, default=get_random_slug)


class Mushroom(models.Model):
    class Hymenophore(models.TextChoices):
        SMOOTH = 'smooth', 'Гладкая'
        SPIKY = 'spiky', 'Шипастая'
        TUBULAR = 'tubular', 'Трубчатая'
        LABYRINTHINE = 'labyrinthine', 'Лабиринтовидная'
        LAMELLAR = 'lamellar', 'Пластинчатая'

    class Eatable(models.TextChoices):
        NOT_EATABLE = 'ne', 'Несъедобен'
        PARTIALLY_EATABLE = 'pe', 'Полусъедобен'
        EATABLE = 'e', 'Съедобнен'

    class FootType(models.TextChoices):
        SMOOTH = 'smooth', 'Гладкая'
        WITH_SKIRT = 'ws', 'С юбкой'
        THICK_AT_TOP = 'tt', 'Утолщенная вверху'
        THICK_AT_MIDDLE = 'tm', 'Утолщенная посередине'
        THICK_AT_BOTTOM = 'tb', 'Утолщенная внизу'

    class HeadType(models.TextChoices):
        CONVEX = 'convex', 'Выпуклая'
        CONCAVE = 'concave', 'Вогнутая'
        SMOOTH = 'smooth', 'Ровная'

    name = models.CharField('Name', max_length=255, db_index=True)
    latin_name = models.CharField('Latin name', max_length=255)

    synonymous_names = ArrayField(
        models.CharField(max_length=255)
    )

    slug = models.SlugField(max_length=32, db_index=True, unique=True, default=get_random_slug)

    family = models.ForeignKey(Family, on_delete=models.CASCADE)
    red_booked = models.BooleanField('Red booked')
    description = models.TextField('Description')
    eatable = models.CharField(
        max_length=6,
        choices=Eatable.choices,
        default=Eatable.NOT_EATABLE,
    )

    have_foot = models.BooleanField('Have foot')
    foot_size_from = models.IntegerField(
        'Foot size from',
        validators=[MinValueValidator(1)],
        null=True
    )
    foot_size_to = models.IntegerField(
        'Foot size to',
        validators=[MinValueValidator(1)],
        null=True
    )
    foot_type = models.CharField(
        max_length=6,
        choices=FootType.choices,
        default=FootType.SMOOTH,
    )
    foot_color = models.ForeignKey(
        Color,
        related_name='foot_color',
        on_delete=models.PROTECT
    )

    head_type = models.CharField(
        max_length=7,
        choices=HeadType.choices,
        default=HeadType.CONVEX,
    )
    hymenophore = models.CharField(
        max_length=12,
        choices=Hymenophore.choices,
        default=Hymenophore.SMOOTH,
    )
    head_color = models.ForeignKey(
        Color,
        related_name='head_color',
        on_delete=models.PROTECT
    )

    created_at = models.DateTimeField('Created at', auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField('Updated at', auto_now=True, db_index=True)

    doubles = models.ManyToManyField('Mushroom', blank=True, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        from datetime import datetime

        self.updated_at = datetime.now()

        super(Mushroom, self).save(*args, **kwargs)


class Image(models.Model):
    image = models.ImageField('Image', upload_to='uploads/images/', null=False)
    created_at = models.DateTimeField('Created at', auto_now_add=True, db_index=True)


class MushroomImage(Image):
    mushroom = models.ForeignKey(
        Mushroom,
        on_delete=models.CASCADE,
        null=False,
    )


class Publication(models.Model):
    slug = models.SlugField(max_length=32, db_index=True, unique=True, default=get_random_slug)

    title = models.CharField('Title', max_length=255, db_index=True)
    content = models.TextField('Content')

    image = models.ForeignKey(
        Image,
        on_delete=models.CASCADE,
        null=False,
    )

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=False,
    )

    created_at = models.DateTimeField('Created at', auto_now_add=True)
