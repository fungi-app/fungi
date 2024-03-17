from django.contrib.auth import logout
from rest_framework.response import Response

from rest_framework.views import APIView
from user.serializers import UserSerializer


class UserView(APIView):
    def get(self, request, *args, **kwargs):
        if request.user.is_anonymous:
            return Response()

        user = request.user

        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def get(self, request, *args, **kwargs):
        logout(request)

        return Response('Logout complited')
