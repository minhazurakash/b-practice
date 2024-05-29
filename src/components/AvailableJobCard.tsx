import React from "react";

const AvailableJobCard = () => {
  return (
    <div
      className="available_job_card"
      style={{ backgroundImage: "url('/worker.png')" }}
    >
      <a className="absolute top-0 left-0 w-full h-full" href="/" />
      <div className="overlay">
        <div className="card_wrapper">
          <div className="badge">Constructions</div>
          <div className="card_title">
            <h2>Brick Layer </h2>
          </div>
          <div className="w-full mt-4">
            <div className="content">
              <p className="head_line">Salary Per month</p>
              <p className="description">Tk. 60,000 - 1,20,000 </p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-2">
              <div className="content">
                <p className="head_line">Deadline:</p>
                <p className="description">28 Apr 2024 </p>
              </div>
              <div className="content">
                <p className="head_line">Vacancy</p>
                <p className="description">80 Male </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableJobCard;
