import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Courses = () => {
    const course = useLoaderData()
    console.log(course)
    const { id, title, price,instructor, details, image_url, rating, total_view }  = course;
    const handelToast = ()=>{
        toast.success('Back to courses!', { autoClose: 500 })
      }
    return (
        <Card className="mb-5 mt-4">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-2'
                    src={instructor?.img}
                    style={{ height: '60px' }}
                ></Image>
                <div>
                    <p className='mb-0'>{instructor?.name}</p>
                    <p>{instructor?.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
                {details}
            </Card.Text>
            <div> <h3> Price: $<span> {price} </span> </h3> </div> 
            <Link to='/home'><Button onClick={handelToast} style={{width:'100%'}}> Go All Courses </Button></Link>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>

        </Card.Footer>

    </Card>
    );
};

export default Courses;