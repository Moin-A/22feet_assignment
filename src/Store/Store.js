import React from "react";
import "../styles.css";
import "../Store/store.scss";
import data_config from "../data.json";

export default function Store() {
  console.log(Object.values(data_config)[0].URL);
  return (
    <div className="container-fluid pt-2 bg-img">
      <div className="items-info row">
        <div className="items-content col-4">
          <h1> The Crafts Forum</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="items-list col">
          {/* <img
            src="1-unsplash.jpg"
            className="img-fluid"
            alt="Responsive image"
          ></img> */}
          {/* alt="Responsive image" */}
          {Object.values(data_config).map((item, index) => (
            <div key={index}>
              <img src={item.URL} className="img-fluid" alt={item.name}></img>
              <p className="text">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
