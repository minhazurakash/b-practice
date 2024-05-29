import { Button, Col, Row } from "antd";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const SubscriptionSection = () => {
  return (
    <section className="subscription_section">
      <div className="container mx-auto">
        <div className="subscription_wrapper">
          <Row gutter={[30, 30]}>
            <Col xs={24} md={10} lg={8}>
              <div className="free_area">
                <div>
                  <div className="heading">
                    <h3 className="title">Free </h3>
                    <p className="sub_title">Try it as long as you like</p>
                  </div>
                  <div className="feature_area">
                    <ul>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex mt-10 mt-auto ml-5">
                  <Button className="free_btn">
                    Build profile for free <BsArrowRight className="icon" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={14} lg={16}>
              <div className="paid_area">
                <div>
                  <div className="heading">
                    <div>
                      <h3 className="title">Standard </h3>
                      <p className="sub_title">Limtless possibilites</p>
                    </div>
                    <div className="recommended">RECOMMENDED</div>
                  </div>
                  <div className="feature_area">
                    <ul>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                      <li>
                        <IoCheckmarkOutline className="icon" />
                        Feature label goes here
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex mt-auto ml-5">
                  <Button className="paid_btn">
                    Build profile for free <BsArrowRight className="icon" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
