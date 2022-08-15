import React from "react";
import "./Journals.css";

function Journals(props) {
  return (
    <section className="journal">
      <img src={props.img} alt="journal" className="image" />
      <div className="details">
        <div className="location">
          <h3>
            <span>
              <img src={props.icon} alt="location-icon" />
            </span>
            {props.country}
          </h3>
          <p>{props.map}</p>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="about">{props.about}</p>
      </div>
    </section>
  );
}

export default Journals;
