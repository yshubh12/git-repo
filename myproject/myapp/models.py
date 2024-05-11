# models.py
from django.db import models

class Produce(models.Model):
    name = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=15)
    address = models.TextField()
    items = models.CharField(max_length=100)
    amount = models.FloatField()

    def __str__(self):
        return self.name
