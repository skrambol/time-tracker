from django.contrib import admin

from projects.models import Project, TimeTracking


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ("name", "description", "date_start", "date_end")

@admin.register(TimeTracking)
class TimeTrackingAdmin(admin.ModelAdmin):
    model = TimeTracking
    list_display = ("user", "project", "date", "hours", "description")
