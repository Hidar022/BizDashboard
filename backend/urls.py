"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from api.views import RegisterView 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Simple inline function to handle the base root URL
def api_root_status(request):
    return JsonResponse({
        "status": "online",
        "service": "Business Dashboard API",
        "version": "1.0.0"
    })

urlpatterns = [
    # Base URL health check
    path('', api_root_status, name='api_root_status'),
    
    # Auth Endpoints
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view(), name='auth_register'),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # App Features Appended
    path('api/', include('api.urls')), 
]