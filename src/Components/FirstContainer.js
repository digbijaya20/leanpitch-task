
import React ,{useState} from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import {render} from 'react-dom';



import logo from '../Assets/logo.png';
import Trainings from './Trainings';


const FirstContainer = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip"  {...props} >
            <div style={{width:'1000px'}}><Trainings/></div>
        </Tooltip>
    );
    return (
        <div className="mainContainer">
            <div className="heading">
                <h3>Trainings</h3>



                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button>Hover me to see</Button>
                </OverlayTrigger>
                <h3>Meetups</h3>
                <h3>Wbinars</h3>
                <h3>Conference</h3>
                <h3>Videos</h3>
                <h3>PM Speaks Series</h3>
                <h3>Blogs</h3>
                <h3>Podcasts</h3>
                <h3>Be A Speaker</h3>
                <h3>Be A Volunter</h3>
                <h3>About Us</h3>
            </div>

        </div>
    )
}

export default FirstContainer;

// const HoverableDiv = ({handleMouseOver,handleMouseOut}) =>{
//     return(
//         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//             Hover me
//         </div>
//     );
// };


// const HoverExample =()=>{
//     const [isHovering,setIshovering]=useState(false);
//     const handleMouseOver = ()=>{
//         setIshovering(true);
//     }
//     const handleMouseOut = ()=>{
//         setIshovering(false);
//     }

//     return (
//         <div>

//             Hover Me
//             <HoverableDiv
//                 handleMouseOver={handleMouseOver}
//                 handleMouseOut={handleMouseOut}
//             />
//            {  isHovering && <FirstContainer/>}

//         </div>
//     )
// }

// export default HoverExample;