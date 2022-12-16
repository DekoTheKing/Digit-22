import React from "react";
import "./Card.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Card({ title, imageUrl, calories, fat, carbs, protein, price }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <div>{calories}  Calories</div>
          <div>{fat}  Fat</div>
          <div>{carbs}  Carbs</div>
          <div>{protein}  Protein</div>
        </div>
      </div>

      <div className="btn">
        <div className="price">
          <p>{price}</p>
        </div>     
        
  <Popup trigger={<button> Order</button>} position="right center">
    <div>Added to cart !!</div>
  </Popup>
  
      </div>
    </div>
  );
}
export default Card;
