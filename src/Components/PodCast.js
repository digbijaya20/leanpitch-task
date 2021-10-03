
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

class Podcast extends Component {
  state = {
    loading: false,
    data: [
      {
        urlToImage: "agagag",
        title: "agaggagagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'
      },
      {
        urlToImage: "agagag",
        title: "agaggagagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaggagagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "tatata",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaggagaatatatatagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaggagagppppppppag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaggaqwertyujnbvcdrtyujgagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaggjtresxcvbhjiuytrdagagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      },
      {
        urlToImage: "agagag",
        title: "agaguytrsdfghjhfgagagag",
        link:'https://www.youtube.com/embed/tgbNymZ7vqY'

      }
    ],
    headline: []
  };

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h1 className="text-left">
          <h1 className="trainingHeading" >Videos</h1>
          </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive}
            //   customRightArrow
              >
                {this.state.data.map((each, index) => {
                  return (
                    <div key={each.index}>
                    <iframe style={{width:'95%'}} src={each.link}>
        </iframe>
                    
            </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Podcast;
