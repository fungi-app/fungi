from django.urls import include, path
from django.conf.urls.static import static
from rest_framework import routers
from django.contrib import admin
from main import settings

from main.views import FamilyViewSet, MushroomViewSet, PublicationViewSet, IndexView
from user.views import UserView, LogoutView


router = routers.SimpleRouter()
router.register(r'families', FamilyViewSet, basename='families')
router.register(r'mushrooms', MushroomViewSet, basename='mushrooms')
router.register(r'publications', PublicationViewSet, basename='publications')

api_namespace = router.urls
api_namespace += [
    path(r'', IndexView.as_view()),
    path(r'auth/user/', UserView.as_view()),
    path(r'auth/logout/', LogoutView.as_view(), name='logout'),
    path(r'users/', UserView.as_view(), name='users'),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((api_namespace, 'api'), namespace='api')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
