from django.urls import path
from .views import *

urlpatterns = [
    path('home', RoomView.as_view()),
    path('user', UserView.as_view()),
    path('admin', AdminView.as_view()),
    path('book', BookView.as_view()),
    path('bookAuthor', BookAuthorView.as_view()),
    path('BookRent', BookRentView.as_view()),
    path('Event', EventView.as_view()),
    path('EventHall', EventHallView.as_view()),
    path('EventApply', EventApplyView.as_view()),
    path('EventHeld', EventHeldView.as_view()),
    path('Facilities', FacilitiesView.as_view()),
    path('Floor', FloorView.as_view()),
    path('Lend', LendView.as_view()),
    path('Phone', PhoneView.as_view()),
    path('Seat', SeatView.as_view()),
    path('BookSeat', SeatBookView.as_view()),
    path('Shelf', ShelfView.as_view()),
    path('StudyRoom', StudyRoomView.as_view()),
    path('BookStudyRoom', StudyRoomBookView.as_view()),
    path('login', LoginView.as_view()),
    path('signup', SignupView.as_view()),
    path('seat-data/', SeatDataView.as_view(), name='seat_data'),
    path('book-seat/', BookSeatView.as_view(), name='book_seat'),
]
