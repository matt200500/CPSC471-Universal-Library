from django.urls import path
from .views import RoomView, CreateRoomView

urlpatterns = [
    path('book', RoomView.as_view()),
    path('browse', CreateRoomView.as_view()),
    path('events', CreateRoomView.as_view()),
    path('login', CreateRoomView.as_view()),
    path('contact', CreateRoomView.as_view())

]