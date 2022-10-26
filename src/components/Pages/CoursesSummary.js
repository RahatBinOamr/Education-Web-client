import jsPDF from "jspdf";
import React from "react";
import { Button, Card, Col, Image,  } from "react-bootstrap";
import { FaDownload, FaEye, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CoursesSummary = ({ courses }) => {
  const {  title, id,price, details, image_url, rating, total_view } = courses;
  const handelToast = ()=>{
    toast.success('Check Layout page!', { autoClose: 500 })
  }
  const genereatePdf = ()=>{
    const doc = new jsPDF ('landscape','px','a4','false')
    // doc.addImage (image_url, 'PNG', 65 ,20,500,400);
    doc.addPage()
    doc.addFont('Helvertica','bold');
    doc.text(60,60,title)
    doc.text(60,80,price)
    doc.text(60,100,details)
    doc.save('a.pdf')
  }
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
               
               <Link to={`/courses/${id}`}><Button style={{width:'100%'}} onClick={handelToast}> Get Premium</Button></Link>
            
            <Button onClick={genereatePdf} style={{width:'100%'}} className='mt-2' > <FaDownload/> Download pdf </Button>
            </Card.Body>
            
        </Card>
        </Col>
      
    </div>
  );
};

export default CoursesSummary;
