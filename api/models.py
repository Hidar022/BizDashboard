from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
    # This links the transaction to a specific user
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions")
    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    category = models.CharField(max_length=100) # e.g., 'Food', 'Salary', 'Rent'
    type = models.CharField(max_length=10, choices=[('income', 'Income'), ('expense', 'Expense')])
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.amount}"