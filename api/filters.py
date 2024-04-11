import django_filters

from .models import *

class SeatFilter(django_filters.FilterSet):
    class Meta:
        model = Seat
        fields = '__all__'