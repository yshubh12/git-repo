from django.shortcuts import render, redirect
from .forms import ProduceForm
from .models import Produce

def index(request):
    return render(request, 'index.html')

def en(request):
    return render(request, 'en.html')

def hn(request):
    return render(request, 'hn.html')

def gj(request):
    return render(request, 'gj.html')

def home2(request):
    return render(request, 'home2.html')

def payment(request):
    return render(request, 'payment.html')

def producer(request):
    if request.method == 'POST':
        form = ProduceForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('producer')  # Redirect to the same page after submission
    else:
        form = ProduceForm()

    # Retrieve all previously saved items
    produces = Produce.objects.all()

    return render(request, 'producer.html', {'form': form, 'produces': produces})
