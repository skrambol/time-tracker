from rest_framework import serializers
from projects.models import TimeTracking

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "first_name", "last_name",)

class UserTimeTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeTracking
        exclude = ("user", "date_created", "date_modified",)


    def to_representation(self, instance):
        print(instance)
        return super().to_representation(instance)
