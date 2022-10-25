import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummary from '../../Pages/CoursesSummary';

const Category = () => {

    const coursesCategory = useLoaderData();


    return (
        <div>
            <h1> CateGory COurses : {coursesCategory.length} </h1>
            {
                coursesCategory.map(courses =><CoursesSummary
                key={coursesCategory.id}
                courses={courses}
                ></CoursesSummary>)
            }
        </div>
    );
};

export default Category;