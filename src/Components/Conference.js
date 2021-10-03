
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';

import { useState } from 'react';



const Conference = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Upcoming', value: '1' },
        { name: 'Past', value: '2' },
    ];

    return (
        <div className="whyMatterContainer">

            <Container>
                <h1 className="light text-center" >Why We Matter?</h1>
                <Row className="text-center">
                    
                <div className="toggleBtn mt-4 mb-4 ">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-light' : 'outline-light'}
                                className="pt-0 pb-0"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                   
                </div>
                        <p >
                            Lorem ipsum dolor sit amet. Eos illum internos et nemo saepe qui similique dolorem et voluptatibus quos et cupiditate excepturi a consequatur aliquam. Ut dolor porro qui quis dolorem qui itaque culpa.
                            Non illo aliquid ad suscipit fugit nam quas omnis. Eum reprehenderit nihil sit culpa repudiandae eos autem laudantium ut culpa debitis est dignissimos soluta.
                        </p>
                        <p>
                        Aut voluptate explicabo sed enim iste ut omnis amet et placeat fugit. Ut praesentium adipisci id ipsum fugit in fugit itaque cum consequatur doloribus non sequi facilis aut cupiditate modi sit accusamus impedit?
                        </p>
                       
                   
                </Row>
                <Button variant="danger" size="sm" id="whyMatterBtn">
                    <span>Notify Me</span>
                <span style={{marginLeft:"10px",marginTop:"10px",padding:"0px 15px 0px 15px"}}><i class="fas fa-long-arrow-alt-right"></i></span>
                </Button>
            </Container>
        </div>
    )
}

export default Conference;