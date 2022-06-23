from django.urls import path
from . import views

urlpatterns = [
    path('', views.RoomView.as_view(), name='room-view'),
    path('create-room/', views.CreateRoomView.as_view(), name='creat-room-view')
]