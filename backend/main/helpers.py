from django.utils.crypto import get_random_string


def get_random_slug():
    ALPHABET = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'

    slug = get_random_string(12, ALPHABET)

    return slug
