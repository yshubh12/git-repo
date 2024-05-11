# forms.py
from django import forms
from .models import Produce

class ProduceForm(forms.ModelForm):
    class Meta:
        model = Produce
        fields = '__all__'
