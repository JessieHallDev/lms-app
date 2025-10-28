from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Course

class Course(models.Model):
    title = models.CharField(max_length=200)
    # image = models.ImageField(upload_to='course-card/course-image/', blank=True, null=True)
    description = models.TextField()
    instructor = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
# Student
    
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    enrollment_date = models.DateField(auto_now_add=True)
    courses = models.ManyToManyField(Course, related_name='students', blank=True)
    bio = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    # profile_picture = models.ImageField(upload_to='students/profile_pics/', blank=True, null=True)

    def __str__(self):
        return self.user.get_full_name() or self.user.username
    
# Teacher
    
class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher_profile')
    employee_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True)
    # profile_picture = models.ImageField(upload_to='teacher_profiles/', blank=True, null=True)
    date_joined = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.employee_id})"
    
# Admin
    
class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')
    employee_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    # profile_picture = models.ImageField(upload_to='teacher_profiles/', blank=True, null=True)
    date_joined = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.employee_id})"
    

    