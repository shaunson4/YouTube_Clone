from django.urls import path
from . import views
urlpatterns=[
    path('', views.replyApp_list),
    path('ReplyApp/ <int:pk>/', views.replyApp_detail),
]