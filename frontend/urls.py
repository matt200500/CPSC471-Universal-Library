from django.urls import path
from .views import index

urlpatterns = [
        path('', index),
        path('browse', index),
        path('book', index)
        ]
