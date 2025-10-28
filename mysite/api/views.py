from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Course, Student, Teacher
from .serializers import CourseSerialzer, StudentSerializer, TeacherSerializer, AdminSerializer
from rest_framework.views import APIView

# Create your views here.
class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerialzer

    def delete(self, request, *args, **kwargs):
        Course.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class CourseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerialzer
    lookup_field = "pk"

class CourseList(APIView):
    def get(self, request, format=None):
        course = Course.objects.all()
        serializer = CourseSerialzer(course, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class StudentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def delete(self, request, *args, **kwargs):
        Student.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class StudentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentList(APIView):
    def get(self, request, format=None):
        student = Student.objects.all()
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class TeacherListCreateAPIView(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

    def delete(self, request, *args, **kwargs):
        Teacher.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TeacherRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherList(APIView):
    def get(self, request, format=None):
        teacher = Teacher.objects.all()
        serializer = TeacherSerializer(teacher, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class RegisterUser(APIView):
    def post(self, request):
        print('Hello!')
        role = request.data.get('role')
        print(role)
        
        if role == "Teacher":
            serializer = TeacherSerializer(data=request.data)
        elif role == "Student":
            serializer = StudentSerializer(data=request.data)
        elif role == "Admin":
            serializer = AdminSerializer(data=request.data)
        else:
            return Response(
                {"error": "Invalid role"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": f"{role} registered successfully!", "data": serializer.data},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        