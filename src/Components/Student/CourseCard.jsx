import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/my-enrollments');
      };
    return (
        <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}title</h3>
            <p>{course.description}description</p>
            <Button label="Enroll" onClick={handleClick}/>
        </div>
    )
}

export default CourseCard;