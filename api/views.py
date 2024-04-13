from django.shortcuts import render
from django.contrib.auth.hashers import check_password
from rest_framework import generics, status
from django.contrib.auth.hashers import make_password
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import request
from .filters import *
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse

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

class SeatDataView(APIView):
    def get(self, request):
        seat_num = request.GET.get('seat_num')
        floorno = request.GET.get('floorno')
        type = request.GET.get('type')
        status = request.GET.get('status')
        queryset = Seat.objects.all()

        if seat_num:
            queryset = queryset.filter(seat_num=seat_num)
        if floorno:
            queryset = queryset.filter(floorno=floorno)
        if type:
            queryset = queryset.filter(type=type)
        if status:
            queryset = queryset.filter(status=status)

        data = list(queryset.values())
        return JsonResponse(data, safe=False)

        
class SeatBookView(generics.CreateAPIView):
    queryset = SeatBook.objects.all()
    serializer_class = SeatBookSerializer 

class BookSeatView(APIView):
    def post(self, request):
        serializer = SeatBookSerializer(data=request.data)
        if serializer.is_valid():
            seat_number = serializer.validated_data.get('seat_num')
            user = serializer.validated_data.get('user')
            time = serializer.validated_data.get('time')
            try:
                seat = Seat.objects.get(seat_num=seat_number)
                if seat.status == "Occupied":
                    return Response({'message': 'Seat is already occupied'}, status=status.HTTP_400_BAD_REQUEST)
                
                # Update seat status to occupied
                seat.status = 'Occupied'
                seat.save()
                
                # Create a new SeatBook entry
                SeatBook.objects.create(user=user, time=time, seat_num=seat)
                
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Seat.DoesNotExist:
                # Handle the case where the seat does not exist
                return Response({'message': 'Seat does not exist'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ShelfView(generics.CreateAPIView):
    queryset = Shelf.objects.all()
    serializer_class = ShelfSerializer 

class StudyRoomView(generics.CreateAPIView):
    queryset = StudyRoom.objects.all()
    serializer_class = StudyRoomSerializer 

class StudyRoomBookView(generics.CreateAPIView):
    queryset = StudyroomBook.objects.all()
    serializer_class = StudyroomBookSerializer

class LoginView(APIView):
    def get(self, request):
        user_id = request.GET.get('user_id')
        User_password = request.GET.get('User_password')
        queryset = User.objects.all()
        user = User.objects.filter(user_id=user_id).first()
        if user and check_password(user.User_password, User_password):
            return JsonResponse({'user_id': user.user_id}, safe=False)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)


class SignupView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        data['user_password'] = make_password(data['user_password'])
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully."}, status=201)
        else:
            return Response(serializer.errors, status=400)
