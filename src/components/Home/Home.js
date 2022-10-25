import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';

import Course from '../Pages/Course';



const Home = () => {
const [courses,setCourses]=useState([])

useEffect(()=>{
    fetch(`https://education-web-server-rahatbinoamr.vercel.app/courses`)
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])
   
    console.log(courses)
    return (
        <div className='mt-4'>
            {/* <h1> CateGory Courses : {courses.length} </h1> */}
           
            <Row className='row-cols-1 row-cols-md-2 g-4'>
           {
                courses.map(courses =><Course
                key={courses.id}
                courses={courses}
                ></Course>)
            }
            </Row> 
            
        </div>
    );
};

export default Home;