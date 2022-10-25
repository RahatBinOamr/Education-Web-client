import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursesSummary from '../../Pages/CoursesSummary';
// import './category.css'

const Category = () => {

    const coursesCategory = useLoaderData();


    return (
        <div className='mt-4' >
            <h1> CateGory Courses : {coursesCategory.length} </h1>
           
           <Row className='row-cols-1 row-cols-md-2 g-4'>
           {
                coursesCategory.map(courses =><CoursesSummary
                key={coursesCategory.id}
                courses={courses}
                ></CoursesSummary>)
            }
            </Row>
           
        </div>
    );
};

export default Category;