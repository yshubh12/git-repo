from django.urls import path
from . import views

urlpatterns=[
    path('',views.index, name='index'),
    path('en',views.en,name='en'),
    path('home2',views.home2,name='home2'),

]