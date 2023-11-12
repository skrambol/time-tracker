from rest_framework import generics
from projects.models import TimeTracking
from users.models import User

from users.serializers import UserSerializer, UserTimeTrackingSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.filter(is_staff=False).all()
    serializer_class = UserSerializer

class UserTimeTrackingListView(generics.ListCreateAPIView):
    queryset = User.objects.filter(is_staff=False)
    serializer_class = UserTimeTrackingSerializer

    def get_queryset(self):
        qs = super().get_queryset().get(id=self.kwargs.get("id")).timetracking_set.all()

        return qs

    def perform_create(self, serializer):
        user_id = self.kwargs.get("id")
        serializer.save(user=User.objects.get(id=user_id))

        return super().perform_create(serializer)
