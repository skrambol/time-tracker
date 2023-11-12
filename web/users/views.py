from rest_framework import generics
from users.models import User

from users.serializers import UserSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.filter(is_staff=False).all()
    serializer_class = UserSerializer
