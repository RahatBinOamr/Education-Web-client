import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://education-web-server-rahatbinoamr.vercel.app/CoursesCategory')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-4'>
            {/* <h4>All Category: {categories.length}</h4> */}
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none'
                         to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;