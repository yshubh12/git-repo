from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages

# Create your views here.

def index(request):
    return render(request,'index.html')

def en(request):
    return render(request,'en.html')

def home2(request):
    return render(request,'home2.html')