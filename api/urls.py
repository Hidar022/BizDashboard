from django.urls import path
from .views import TransactionListCreateView, UserProfileView, TransactionDestroyView

urlpatterns = [
    path('transactions/', TransactionListCreateView.as_view(), name='transaction_list'),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
    path('transactions/<int:pk>/', TransactionDestroyView.as_view(), name='transaction_delete'),
]