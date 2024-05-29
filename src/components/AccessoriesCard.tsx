import { Button } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AccessoriesCard = () => {
  return (
    <div
      className="Accessories_card"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/64/88/98/360_F_564889870_KzQ3SgHVDpy9o3ynAWuOYEI20dSH7Zoo.jpg')",
      }}
    >
      <div className="overlay">
        <div className="card_wrapper">
          <div className="circle">
            <img
              src="https://t3.ftcdn.net/jpg/05/64/88/98/360_F_564889870_KzQ3SgHVDpy9o3ynAWuOYEI20dSH7Zoo.jpg"
              alt="icon"
            />
          </div>
          <div className="inner_card">
            <div className="shape"></div>
            <h2 className="title line-clamp-2">Travel Health Insurance</h2>
            <Button className="mt-3 read_more_btn w-36">
              <span className="mr-2">Read More</span> <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCard;
