
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import arrow from '../Assets/red_arrow.png';


import logo from '../Assets/logo.png';
const WhyMatter = () => {
    return (
        <div className="whyMatterContainer">

            <Container>
                <h1 className="whyMatterHeading" >Why We Matter?</h1>
                <img src={arrow} className="arrowImage" alt="arrow" />
                <Row className="whyMatterContent">
                    <Col sm={6}>
                        <h2>Creative Thinking For Creating an Impact!</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Eos illum internos et nemo saepe qui similique dolorem et voluptatibus quos et cupiditate excepturi a consequatur aliquam. Ut dolor porro qui quis dolorem qui itaque culpa.
                            Aut voluptate explicabo sed enim iste ut omnis amet et placeat fugit. Ut praesentium adipisci id ipsum fugit in fugit itaque cum consequatur doloribus non sequi facilis aut cupiditate modi sit accusamus impedit?
                            Non illo aliquid ad suscipit fugit nam quas omnis. Eum reprehenderit nihil sit culpa repudiandae eos autem laudantium ut culpa debitis est dignissimos soluta.
                        </p>
                    </Col>
                    <Col sm={6}>
                        {/* <video width="320" height="240" >
                            <source src="https://www.youtube.com/watch?v=tgbNymZ7vqY" type="video/mp4" ></source>
                            aggag
                        </video> */}
                        <iframe width="420" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                       
                    </Col>
                </Row>
                <Button variant="outline-light" size="lg" id="whyMatterBtn">
                    <span>Join Our Community</span>
                <span style={{marginLeft:"10px",marginTop:"10px"}}><i class="fas fa-long-arrow-alt-right"></i></span>
                </Button>
            </Container>
        </div>
    )
}

export default WhyMatter;