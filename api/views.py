from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AdminView(generics.CreateAPIView):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer

class BookView(generics.CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookAuthorView(generics.CreateAPIView):
    queryset = BookAuthors.objects.all()
    serializer_class = BookAuthorSerializer

class BookRentView(generics.CreateAPIView):
    queryset = BookRent.objects.all()
    serializer_class = BookRentSerializer

class EventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventHallView(generics.CreateAPIView):
    queryset = EventHall.objects.all()
    serializer_class = EventHallSerializer

class EventApplyView(generics.CreateAPIView):
    queryset = EventApply.objects.all()
    serializer_class = EventApplySerializer   

class EventHeldView(generics.CreateAPIView):
    queryset = EventHeld.objects.all()
    serializer_class = EventHeldSerializer   

class FacilitiesView(generics.CreateAPIView):
    queryset = Facilities.objects.all()
    serializer_class = FacilitiesSerializer   

class FloorView(generics.CreateAPIView):
    queryset = Floor.objects.all()
    serializer_class = FloorSerializer 

class LendView(generics.CreateAPIView):
    queryset = Lend.objects.all()
    serializer_class = LendSerializer 

class PhoneView(generics.CreateAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer 

class SeatView(generics.CreateAPIView):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer 

class SeatBookView(generics.CreateAPIView):
    queryset = SeatBook.objects.all()
    serializer_class = SeatBookSerializer 

class ShelfView(generics.CreateAPIView):
    queryset = Shelf.objects.all()
    serializer_class = ShelfSerializer 

class StudyRoomView(generics.CreateAPIView):
    queryset = StudyRoom.objects.all()
    serializer_class = StudyRoomSerializer 

class StudyRoomBookView(generics.CreateAPIView):
    queryset = StudyroomBook.objects.all()
    serializer_class = StudyroomBookSerializer 