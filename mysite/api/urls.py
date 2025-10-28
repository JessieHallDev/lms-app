from django.contrib import admin
from django.urls import path, include
from . import views
from .models import Course, Student, Teacher, Admin
from . import urls

urlpatterns = [
    
    # Students
    ## get all courses
    path("courses/", views.CourseList.as_view(), name="course-list"),

    ## get specific student's courses
    #path("students/courses", views.Student.courses.all().as_view(), name="student-courses"),

    ## enroll a student on a course
    

    # Teachers
    ## create a course

    ## update a course

    
    # Admin
    ## create a course

    ## update a course

    ## update users
    # path("courses/", views.CourseListCreate.as_view(), name="course-view-create"),

    #CREATE A USER
    path("register/", views.RegisterUser.as_view(), name="register-user")
]