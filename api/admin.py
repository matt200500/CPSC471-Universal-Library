from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(User)
admin.site.register(Administrator)
admin.site.register(Book)
admin.site.register(BookAuthors)
admin.site.register(BookRent)
admin.site.register(Event)
admin.site.register(EventHall)
admin.site.register(EventApply)
admin.site.register(EventHeld)
admin.site.register(Facilities)
admin.site.register(Floor)
admin.site.register(Lend)
admin.site.register(Phone)
admin.site.register(Seat)
admin.site.register(SeatBook)
admin.site.register(Shelf)
admin.site.register(StudyRoom)
admin.site.register(StudyroomBook)


