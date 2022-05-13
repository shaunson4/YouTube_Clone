from django.urls import path
from . import views

urlpatterns = [
    path('', views.comment_list),
    path('comment/<int:pk>/', views.comment_detail),
        
]