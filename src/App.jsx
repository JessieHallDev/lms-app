import React, { useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseList from "./Pages/Home/CourseList";
import CourseDetails from "./Pages/Home/CourseDetails";
import MyEnrollments from "./Pages/Student/MyEnrollments";
import Loading from "./Components/Student/Loading";
import Teacher from "./Pages/Teacher/Teacher";
import Navbar from "./Components/Navbar";
import './index.css';
import SignUp from "./Pages/SignUp/SignUp";
import Student from "./Pages/Student/Student";
import Admin from "./Pages/Admin/Admin";

function App() {

  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
    }, []);


  return (
    <div className='App'>
    <Navbar role={role}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<Home />}/>
      <Route path='/course-list' element={<CourseList />}/>
      <Route path='/course-list/:input' element={<CourseList />}/>
      <Route path='/course/:id' element={<CourseDetails />}/>
      <Route path='/sign-up' element={<SignUp setRole={setRole}/>}/>
      <Route path='/teacher' element={<Teacher />}/>
      <Route path='/student' element={<Student />}>
         {/* <Route path='/my-enrollments' element={<MyEnrollments />}/> */}
      </Route>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/loading/:path' element={<Loading />}/>
    </Routes>
    </div>
  );
}

export default App;
