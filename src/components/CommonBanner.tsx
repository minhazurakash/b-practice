import { Button } from "antd";
import React from "react";
import { CiStopwatch } from "react-icons/ci";

interface IProps {
  className?: string;
  data: any;
}
const CommonBanner: React.FC<IProps> = ({ className, data }) => {
  return (
    <section className={`job_banner ${className}`}>
      <div className="container">
        <div className="job_banner_wrapper">
          <div className="content_wrapper">
            <div className="main_content_area has_extra">
              <div className="title_area">
                <div className="tag_line">
                  <p className="job_type">Constructions</p>
                  <span className="badge">Full time</span>
                </div>
                <h3 className="title">Brick Layer</h3>
                <p className="sub_title">United Arab emirates,Dubai </p>
              </div>
              <div className="extra_wrapper">
                <div className="item">
                  <Button className="apply_btn">Apply Now</Button>
                </div>
                <div className="item">
                  <CiStopwatch className="icon" />
                  <p>
                    <span>Deadline</span> 28 Apr 2024
                  </p>
                </div>
                <div className="item">
                  <CiStopwatch className="icon" />
                  <p>
                    <span>Salary Per Month </span>Tk. 60,000 - 1,20,000 
                  </p>
                </div>
              </div>
            </div>
            <div className="description_area">
              <div className="description">
                <p className="heading">Employment Requirements:</p>
                <div className="content">
                  <ul>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <p className="heading">Employment Requirements:</p>
                <p className="content">
                  <ul>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="video_thumb">
            <img
              className="play_btn"
              src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="video play icon"
            />
            <img
              className="thumb_image"
              src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="video thumb image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
