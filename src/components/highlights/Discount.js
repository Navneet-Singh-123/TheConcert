import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      this.percentage();
    }, 30);
    // 30 the amount of time it will take to go from one number to another
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th November, 2022</h3>
              <p>
                So what are you waiting for? Register for the eve now and enjoy
                the melody of the songs under the midst of shinnig moon
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
