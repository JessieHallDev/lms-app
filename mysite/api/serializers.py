from rest_framework import serializers
from .models import Course, Student, Teacher, Admin


class CourseSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["id", "title", "description", "instructor", "created_at"]


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["user", "courses"]


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ["user", "employee_id", "department"]

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ["user", "employee_id", "department"]

