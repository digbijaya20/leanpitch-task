
import React, { Component } from "react";
import ReactDOM from "react-dom";
//import './news.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 786 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 786, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class PmSeries extends Component {
  state = {
    
    data: [
      {
       
        link:'https://img.youtube.com/vi/zXJ8bDDeu0g/maxresdefault.jpg',
        video:"https://www.youtube.com/watch/zXJ8bDDeu0g"
      }, {
       
        link:'https://img.youtube.com/vi/sU0f5GLJMHE/maxresdefault.jpg',
        video:"https://www.youtube.com/watch/sU0f5GLJMHE"
      }, {
       
        link:'https://img.youtube.com/vi/Dwc9RlGgLhk/maxresdefault.jpg',
        video:"https://www.youtube.com/watch/Dwc9RlGgLhk"
      },{
       
        link:'https://img.youtube.com/vi/X7EK8tLarFw/maxresdefault.jpg',
        video:"https://www.youtube.com/watch/X7EK8tLarFw"
      },
    ],
  };

  //https://www.youtube.com/watch?v=xPl_DFasIG0

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h1 className="pt-5 pb-4">
          <h1 className="trainingHeading" >PM Speak Series</h1>
          </h1>
         
            <div>
              <Carousel responsive={responsive}
            //   customRightArrow
              >
                {this.state.data.map((each, index) => {
                  return (
                    <div key={each.index}>
                      <a href={each.video} target="_blank">
                    <img style={{width:'95%'}} height="150px" src={each.link} />
                    </a>
                    
            </div>
                  );
                })}
              </Carousel>
            </div>
        
        </div>
      </div>
    );
  }
}

export default PmSeries;
