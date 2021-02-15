import React from "react";

export default function CardMain(props) {
  return (
    <div className="notice-container">
      <div className="card text-white">
        <img
          className="card-img"
          src="https://www.gamereactor.pt/media/81/fifa20_2978103b.jpg"
          alt=""
        />
        <div className="card-img-overlay">
          <div className="title-container">
            <h5 className="card-title font-weight-bold">Computação</h5>
          </div>
          {/*   <GreenBar/> */}
          <h4 className="desc font-weight-bold max-lines-2">FiFA 20</h4>
        </div>
      </div>
    </div>
  );
}
