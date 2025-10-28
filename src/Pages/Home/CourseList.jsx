import React, { useEffect, useState } from 'react';
import '../../index.css';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/courses/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch courses');
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="course-list">
      {courses.map(course => (
        <div className="course-card" key={course.id}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}title</h3>
          <p>{course.description}description</p>
          <button>Enroll</button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;