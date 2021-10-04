
import { Container } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    btnGroup: {

        '& .MuiToggleButtonGroup-root': {
            height: '30px'
        }

    }
}))


const MeetUps = () => {
    const classes = useStyle();

    


    const [alignment, setAlignment] = useState('left');
    const [bg, setBg] = useState(false)

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        setBg(!bg)

    };

    // const handleChange = (val) => setValue(val);
    return (
        <div className="trainingContainer">

            <Container>
                <h1 className="trainingHeading" >Our Meetups</h1>

                <div className="toggleBtn mt-4" style={{alignItems:'center'}}>
                    <div className={classes.btnGroup}>
                        <ToggleButtonGroup
                            value={alignment}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                        >
                            <ToggleButton value="left" aria-label="left aligned" style={{ color: `${bg ? `black` : 'white'}`, background: `${bg ? `white` : 'black'}` }} >
                                Upcoming
                            </ToggleButton>
                            <ToggleButton value="center" aria-label="centered" style={{ color: `${bg ? `white` : 'black'}`, background: `${bg ? `black` : 'white'}` }}>
                                Past
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <Dropdown className="m-2">
                        <Dropdown.Toggle variant="outline-dark" size="sm" id="dropdown-basic">
                            Filter by City
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Bhubaneswar</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Hydrabad</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <h4 className="text-center mt-3">Awesome meetups will be there soon!</h4>

            </Container>
        </div>
    )
}

export default MeetUps;