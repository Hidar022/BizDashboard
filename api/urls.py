from django.urls import path
from .views import TransactionListCreateView
urlpatterns = [
    path('api/transactions/', TransactionListCreateView.as_view(), name='transaction_list'),
]