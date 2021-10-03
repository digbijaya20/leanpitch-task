
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import arrow from '../Assets/red_arrow.png';


import logo from '../Assets/logo.png';
const Trainings = () => {
    const cardDetails =[
        {
        id:1,
        img:"holder.js/100px180",
        title:"Design Thinking",
        date:"8th Oct,2021",
        backgroundColor:"red",
    },
    {
        id:2,
        img:"holder.js/100px180",
        title:"Design Thinking",
        date:"8th Oct,2021",
        backgroundColor:"green",
        
    },
    {
        id:3,
        img:"holder.js/100px180",
        title:"Design Thinking",
        date:"8th Oct,2021",
        backgroundColor:"blue",
    },
    {
        id:4,
        img:"holder.js/100px180",
        title:"Design Thinking",
        date:"8th Oct,2021",
        backgroundColor:"black",
    },
    {
        id:5,
        img:"holder.js/100px180",
        title:"Design Thinking",
        date:"8th Oct,2021",
        backgroundColor:"red",
    },
]
    return (
        <div className="trainingContainer">

            <Container>
                <h1 className="trainingHeading" >Our Trainings</h1>
                <Row className="whyMatterContent">
                   {cardDetails.map((each)=>{
                       return(
                        <Col sm={6} lg={{span:2}}>
                        <Card style={{backgroundColor:`${each.backgroundColor}`, color:"#fff", width:"11rem", margin:"0px", padding:"0px"}} >
                            
                            <Card.Body className="px-0">
                                <div style={{padding:"10px"}}>
                            <Card.Img variant="top" src={each.img} />
                                <Card.Title>{each.title}</Card.Title>
                                </div>
                                <Card.Text style={{backgroundColor:"gray", padding:"0px 10px 0px 10px"}}>
                                    <p>Upcoming Training <br/><span>{each.date}</span></p>
                                    
                                </Card.Text>
                                <Button variant="light" size="md" style={{borderRadius:"15px",padding:"0px 20px 0px 20px", display:"block", margin:"auto"}}>Register</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                       )
                   })}
                </Row>
            </Container>
        </div>
    )
}

export default Trainings;