from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    queryset = User.objects.filter(is_staff=False).all()

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name",)
