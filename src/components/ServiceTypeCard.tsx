import { Button } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceTypeCard = () => {
  return (
    <div
      className="service_type_card"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/64/88/98/360_F_564889870_KzQ3SgHVDpy9o3ynAWuOYEI20dSH7Zoo.jpg')",
      }}
    >
      <div className="overlay">
        <div className="circle">
          <img
            src="https://t3.ftcdn.net/jpg/05/64/88/98/360_F_564889870_KzQ3SgHVDpy9o3ynAWuOYEI20dSH7Zoo.jpg"
            alt="icon"
          />
        </div>
        <div className="content">
          <h2>Jobs in ROMANIA</h2>
          <Button className="mt-3 read_more_btn w-36">
            <span className="mr-2">Read More</span> <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeCard;
