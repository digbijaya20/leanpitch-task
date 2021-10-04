
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

class Videos extends Component {
  state = {
   
    data: [
      {
       
        link:'https://img.youtube.com/vi/OYr-KPboPDw/0.jpg',
        video:"https://www.youtube.com/watch/OYr-KPboPDw"
      },
      {
       
        link:'https://img.youtube.com/vi/OYr-KPboPDw/0.jpg',
        video:"https://www.youtube.com/watch/OYr-KPboPDw"

      },
      {
     
        link:'https://img.youtube.com/vi/OYr-KPboPDw/0.jpg',
        video:"https://www.youtube.com/watch/OYr-KPboPDw"

      },
      
     
    ],
    
  };

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h1 className="pt-5 pb-4" >
          <h1 className="trainingHeading" >Videos</h1>
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

export default Videos;
