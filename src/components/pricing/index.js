import React, { Component } from "react";
import MyButton from "../utils/button";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [7000, 10000, 18000],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Here you'll be alloted a seat in the top part of top part of the stadium on lottery basis",
      "In here you'll be given a seat in the bottom part through lottery",
      "This is the VIP box where in you can enjoy the concert closely and enjoy several other luxuries",
    ],
    linkTo: ["http://concert/b", "http://concert/m", "http://concert/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>Rs{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
