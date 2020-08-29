import React from "react";
const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29361.678021269716!2d72.57553154739445!3d23.089416262991513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c17dc37ee3%3A0xab976f6a3a1f932d!2sSadar%20patel%20gujarat%20stadium!5e0!3m2!1sen!2sin!4v1598682024327!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
