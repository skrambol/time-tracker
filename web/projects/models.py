from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=255)
    date_start = models.DateTimeField()
    date_end = models.DateTimeField(blank=True, null=True)
