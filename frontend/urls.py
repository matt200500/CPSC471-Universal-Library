from django.urls import path
from .views import index
from django.contrib import admin  
from django.urls.conf import include  
from django.conf import settings  
from django.conf.urls.static import static  
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
        path('', index),
        path('home', index),
        path('browse', index),
        path('bookrooms', index),
        path('bookseats', index),
        path('events', index),
        path('login', index),
        path('contact', index),
        path('account', index),
        path('signup', index),
        ]
