from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from main.models import Mushroom, Publication, Family
from main.serializers import MushroomSerializer, PublicationSerializer, FamilySerializer


class IndexView(APIView):
    def get(self, request):
        return Response({'status': 'OK'})


class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all().order_by('name')
    lookup_field = 'slug'
    serializer_class = FamilySerializer


class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('-created_at')
    lookup_field = 'slug'
    serializer_class = PublicationSerializer


class MushroomViewSet(viewsets.ModelViewSet):
    queryset = Mushroom.objects.all().order_by('-updated_at')
    lookup_field = 'slug'
    serializer_class = MushroomSerializer
