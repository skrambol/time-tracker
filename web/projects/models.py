from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=255)
    date_start = models.DateTimeField()
    date_end = models.DateTimeField(blank=True, null=True)


class TimeTracking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    date = models.DateField()
    hours = models.IntegerField(validators=[MinValueValidator(1)])
    description = models.CharField(max_length=255)
