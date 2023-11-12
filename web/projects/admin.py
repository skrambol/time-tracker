from django.contrib import admin

from projects.models import Project



@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ("name", "description", "date_start", "date_end")
