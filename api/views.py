from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework.permissions import AllowAny

from rest_framework.permissions import IsAuthenticated
from .models import Transaction
from .serializers import TransactionSerializer

from rest_framework.views import APIView



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,) # Anyone can create an account
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "user": RegisterSerializer(user).data,
                "message": "User Created Successfully. Now perform Login to get your token.",
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TransactionListCreateView(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # This ensures you ONLY see your own transactions!
        return Transaction.objects.filter(user=self.request.user).order_by('-date')

    def perform_create(self, serializer):
        # Automatically attach the logged-in user to the new transaction
        serializer.save(user=self.request.user)


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Returns current logged-in user data
        return Response({
            "username": request.user.username,
            "email": request.user.email,
            "first_name": request.user.first_name
        })

    def patch(self, request):
        # Updates user information in the DB
        user = request.user
        user.first_name = request.data.get('first_name', user.first_name)
        user.email = request.data.get('email', user.email)
        user.save()
        return Response({"status": "profile updated"})