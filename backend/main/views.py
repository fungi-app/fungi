from django.conf import settings
from django.core.files.images import ImageFile
from django.db.models import Q
from django.http import HttpResponse
from PIL import Image
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from main.models import Mushroom, Publication 
from main.serializers import MushroomSerializer, PublicationSerializer
from main.helpers import get_random_slug
from user.models import User


class IndexView(APIView):
    def get(self, request):
        return Response({'status': 'OK'})


class MushroomViewSet(viewsets.ModelViewSet):
    queryset = Mushroom.objects.all().order_by('-updated_at')
    lookup_field = 'slug'
    serializer_class = MushroomSerializer

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('-created_at')
    lookup_field = 'slug'
    serializer_class = PublicationSerializer
