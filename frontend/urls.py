from django.urls import path
from .views import index

urlpatterns = [
        path('', index),
        path('home', index),
        path('browse', index),
        path('bookrooms', index),
        path('bookseats', index),
        path('events', index),
        path('login', index),
        path('contact', index),
        path('account', index)
        ]
