
import { Container } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
    btnGroup: {
        textAlign:'center',

        '& .MuiToggleButtonGroup-root': {
            height: '30px'
        }

    }
}))


const Webinars = () => {
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
                <h1 className="trainingHeading" >Our Webinars</h1>
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
                <h4 className="text-center mt-3">Awesome meetups will be there soon!</h4>

            </Container>
        </div>
    )
}

export default Webinars;