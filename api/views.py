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
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


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

class BrowseBooksView(APIView):
    def get(self, request):
        # set variables accorind to filter when it is implemented
        queryset = Book.objects.all()

        data = list(queryset.values())
        return JsonResponse(data, safe=False)

class ClaimBookView(APIView):
    def get(self, request):
        is_disabled = request.GET.get('is_disabled');
        book_id = request.GET.get('book_id');
        user_id = request.GET.get('user_id');

        try:

        except:

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


class LoginView(APIView):
    def get(self, request):
        user_id = request.GET.get('user_id')
        User_password = request.GET.get('User_password')
        queryset = User.objects.all()
        user = queryset.filter(user_id=user_id).first() 
        if user and user.User_password == User_password:
            return JsonResponse({'user_id': user.user_id}, safe=False)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

class BookSeatView(APIView):
    def get(self, request):
        print("we got here")
        seat_number = request.GET.get('seat_number')
        user_id = request.GET.get('user_id')
        time = request.GET.get('time')
        print("seat number is", seat_number)
        print("user id is:", user_id)
        print("time is", time)
        try:
            print("GOT OVER HERE1111323132333333333333333", time)
            seat = Seat.objects.get(seat_num=seat_number)
            print("GOT OVER HERE1111", time)
            if seat.status == "Occupied":
                print("poop")
                return Response({'message': 'Seat is already occupied'}, status=status.HTTP_400_BAD_REQUEST)
            
            print("GOT OVER HERE", time)


            # Update seat status to occupied
            seat.status = 'Occupied'
            seat.save()

            user_id = int(user_id)  
            user = User.objects.get(user_id=user_id)
            
            # Create a new SeatBook entry
            SeatBook.objects.create(user_id=user, time=time, seat_number=seat)
            return JsonResponse({'seat_number': seat.seat_num}, safe=False)
        except Seat.DoesNotExist:
            # Handle the case where the seat does not exist
            return Response({'message': 'Seat does not exist'}, status=status.HTTP_404_NOT_FOUND)

class ShelfView(generics.CreateAPIView):
    queryset = Shelf.objects.all()
    serializer_class = ShelfSerializer 

class StudyRoomView(generics.CreateAPIView):
    queryset = StudyRoom.objects.all()
    serializer_class = StudyRoomSerializer 

class RoomDataView(APIView):
    def get(self, request):
        floorno = request.GET.get('floorno')
        room_id = request.GET.get('room_id')
        max_occupancy = request.GET.get('max_occupancy')
        status = request.GET.get('status')
        hastv = request.GET.get('hastv')
        queryset = StudyRoom.objects.all()

        if floorno:
            queryset = queryset.filter(floorno=floorno)
        if room_id:
            queryset = queryset.filter(room_id=room_id)
        if max_occupancy:
            queryset = queryset.filter(max_occupancy=max_occupancy)
        if status:
            queryset = queryset.filter(status=status)
        if hastv:
            queryset = queryset.filter(hastv=hastv)

        data = list(queryset.values())
        return JsonResponse(data, safe=False)

class StudyRoomBookView(generics.CreateAPIView):
    queryset = StudyroomBook.objects.all()
    serializer_class = StudyroomBookSerializer

class LoginView(APIView):
    def get(self, request):
        user_id = request.GET.get('user_id')
        User_password = request.GET.get('User_password')
        queryset = User.objects.all()
        user = queryset.filter(user_id=user_id).first() 
        if user and user.User_password == User_password:
            return JsonResponse({'user_id': user.user_id}, safe=False)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
        
class AdminLoginView(APIView):
    def get(self, request):
        administrator_id = request.GET.get('administrator_id')
        Administrator_password = request.GET.get('Administrator_password')
        queryset = Administrator.objects.all()
        administrator = queryset.filter(administrator_id=administrator_id).first() 
        if administrator and administrator.Administrator_password == Administrator_password:
            return JsonResponse({'administrator': administrator.administrator_id}, safe=False)
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

class AccountView(APIView):
    def get(self, request):
        user_id = request.headers.get('userId')
        if not user_id:
            return Response({"error": "User ID not provided"}, status=400)

        user = User.objects.filter(user_id=user_id).first()
        if not user:
            return Response({"error": "User not found"}, status=404)
        
        user_data = UserSerializer(user).data
        user_data['books'] = BookRentSerializer(BookRent.objects.filter(user=user_id), many=True).data
        user_data['seats'] = SeatBookSerializer(SeatBook.objects.filter(user=user_id), many=True).data
        user_data['rooms'] = StudyroomBookSerializer(StudyroomBook.objects.filter(user=user_id), many=True).data
        user_data['events'] = EventApplySerializer(EventApply.objects.filter(user=user_id), many=True).data
        return Response(user_data)
