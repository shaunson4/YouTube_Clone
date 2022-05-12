from django.urls import path
from . import views
urlpatterns=[
    path('ReplyApp/', views.replyApp_list),
    path('ReplyApp/ <int:pk>/', views.replyApp_detail),
]