import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../index.css';
import Button from "./Button";




const Navbar = ({role}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sign-up');
      };
    
    const logoHome = () => {
        navigate('/');
    };

    return (
        <div className='navbar'>
            <h1 onClick={logoHome}>Learning Academy</h1>
            <ul className='nav-links'>
                 {role === "student" ? (
                 <>
                 <li><Link to="/student">Dashboard</Link></li>
                 <Link to='/course-list'>Courses</Link>
                 <Link to='/my-enrollments'>My Enrollments</Link>
                 </>
                 ) : role === "teacher" ? (
                 <>
                 <li><Link to="/teacher">Dashboard</Link></li>
                 <li><Link to="/teacher/courses">My Courses</Link></li>
            
                </>
                 ) : role === "admin" ? (
                <>
                 <li><Link to="/admin">Dashboard</Link></li>
                 <li><Link to="/admin/users">Manage Users</Link></li>
                </>
                 ) : (
                <>
                <Button label='Sign Up' onClick={handleClick}/>
                </>
              )}
             </ul>
            
        </div>
    )
}

export default Navbar;