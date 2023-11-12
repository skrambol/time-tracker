from django.urls import path

from users.views import UserListView, UserTimeTrackingListView


urlpatterns = [
    path('', UserListView.as_view()),
    path('<int:id>/time_tracking', UserTimeTrackingListView.as_view())
]
