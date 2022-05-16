from django.urls import path
from . import views

urlpatterns = [
    path('', views.comment_list),            # GET all comments (No Auth)
    # GET single Comment (Auth Required) (PUT, DELETE)
    path('<int:pk>/', views.comment_detail),
    # Post a new record (Auth required)
    path('add/', views.add_record),
]
