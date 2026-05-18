# api/urls.py
from django.urls import path
from .views import TransactionListCreateView, UserProfileView

urlpatterns = [
    # This becomes /api/transactions/
    path('transactions/', TransactionListCreateView.as_view(), name='transaction_list'),
    
    # FIXED: This now maps correctly to /api/user/profile/
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
]