from django.contrib.auth import logout
from rest_framework.response import Response
from django.urls import reverse

from rest_framework.views import APIView
from user.serializers import UserSerializer

# Create your views here.

class UserView(APIView):
    def get(self, request, *args, **kwargs):
        if request.user.is_anonymous:
            return Response()

        user = request.user

        print("Here is user view")
        print(reverse('mushrooms'))
        reverse("news-archive")

        serializer = UserSerializer(user)
        return Response({'mushrooms': reverse("news-archive")})

class LogoutView(APIView):
    def get(self, request, *args, **kwargs):
        logout(request)

        return Response()
