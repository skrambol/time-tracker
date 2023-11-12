from django.contrib import admin

from users.models import User

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ("username", "email", "first_name", "last_name", "is_staff")
