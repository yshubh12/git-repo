from django.urls import path
from . import views

urlpatterns=[
    path('',views.index, name='index'),
    path('en',views.en,name='en'),
    path('hn',views.hn,name='hn'),
    path('gj',views.gj,name='gj'),
    path('home2',views.home2,name='home2'),
    path('producer',views.producer,name='producer'),
    path('payment',views.payment,name='payment'),

]