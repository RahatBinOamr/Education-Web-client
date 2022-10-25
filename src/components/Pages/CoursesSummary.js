import React from "react";
import { Button, Card, Col, Image,  } from "react-bootstrap";
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CoursesSummary = ({ courses }) => {
  const {  title, id,price, details, image_url, rating, total_view } = courses;
  return (
    <div >
      
        <Col>
        <Card className="mb-5">
            
            <Card.Body>
                
                <Image variant="top" style={{width:'100%',height:'300px'}} src={image_url} />
                <div className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </div>
                <Card.Title className="mt-3">{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 100 ?
                           <> {details.slice(0, 100) + '...'} </>
                            :
                            details
                    }
                </Card.Text>
               <div> <h3> Price: $<span> {price} </span> </h3> </div> 
               
            <Link to={`/courses/${id}`}><Button style={{width:'100%'}}> Get Preimum </Button></Link>
            </Card.Body>
            
        </Card>
        </Col>
      
    </div>
  );
};

export default CoursesSummary;
