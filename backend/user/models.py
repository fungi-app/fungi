from decimal import Decimal as D

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.core.mail import EmailMultiAlternatives
from django.core.validators import MinValueValidator
from django.template.loader import render_to_string
from django.utils import timezone

from main import settings

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserRole(models.TextChoices):
    USER = 'user', 'Пользователь'
    EDITOR = 'editor', 'Редактор'
    MODERATOR = 'moderator', 'Утолщенная вверху'
    ADMIN = 'admin', 'Администратор'


class UserManager(BaseUserManager):
    def create_user(self, email, password, role=UserRole.USER):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            password=password,
            role=role
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password=password,
            role=UserRole.ADMIN
        )
        user.save(using=self._db)
        return user


class User(AbstractBaseUser): 
    email = models.EmailField(
        verbose_name="Email adress",
        max_length=255,
        unique=True,
    )

    name = models.CharField('Name', max_length=255, unique=True, db_index=True)
    role = models.CharField(
        max_length=9,
        choices=UserRole.choices,
        default=UserRole.USER,
    )
    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    @property
    def is_admin(self):
        return True if self.role == UserRole.ADMIN else False
