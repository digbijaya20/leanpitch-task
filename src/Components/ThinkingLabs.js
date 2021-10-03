
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


import labs from '../Assets/labs.png';


import logo from '../Assets/logo.png';
const ThinkingLabs = () => {
    return (
        <div className="whyMatterContainer">
            <hr id="hrDivider" />
            <Container>
                <Row className="whyMatterContent">
                    <Col sm={6}>
                        <h2 className="thinkingLabsHeading">Leanpitch Thinking <br /> Labs</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Eos illum internos et nemo saepe qui similique dolorem et voluptatibus quos et cupiditate excepturi a consequatur aliquam. Ut dolor porro qui quis dolorem qui itaque culpa.
                            Aut voluptate explicabo sed enim iste ut omnis amet et placeat fugit. Ut praesentium adipisci id ipsum fugit in fugit itaque cum consequatur doloribus non sequi facilis aut cupiditate modi sit accusamus impedit?
                            Non illo aliquid ad suscipit fugit nam quas omnis. Eum reprehenderit nihil sit culpa repudiandae eos autem laudantium ut culpa debitis est dignissimos soluta.
                        </p>
                        <div className="thinkingLabBtnContainer">
                        <Button variant="danger" id="thinkingLabBtn">
                            <span>View Details</span>
                            <span style={{ marginLeft: "10px", marginTop: "10px" }}><i class="fas fa-long-arrow-alt-right"></i></span>
                        </Button>
                        <Button variant="danger" id="thinkingLabBtn">
                            <span>Register Now</span>
                            <span style={{ marginLeft: "10px", marginTop: "10px" }}><i class="fas fa-long-arrow-alt-right"></i></span>
                        </Button>
                        </div>
                    </Col>
                    <Col sm={6} >
                        <div >
                            <img src={labs} width="500px" />
                        </div>


                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ThinkingLabs;