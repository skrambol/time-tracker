from rest_framework import serializers

from projects.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    queryset = Project.objects.all()

    class Meta:
        model = Project
        fields = "__all__"
