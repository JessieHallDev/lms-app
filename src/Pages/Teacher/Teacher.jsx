import React from "react";
import { Outlet } from "react-router-dom";
const Teacher = () => {
    return (
        <div>
            <h1>Teacher</h1>
            <div>
              {<Outlet/>}
            </div>
        </div>
    )
}

export default Teacher;