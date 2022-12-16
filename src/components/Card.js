import { or } from "ajv/dist/compile/codegen";
import React from "react";
import { BasketContext } from "../App";

import "./Card.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModalWindow from './ModalWindow';

function Card({ title, imageUrl, calories, fat, carbs, protein, price }) {
  const {orders,setOrders} = React.useContext(BasketContext)
  const addtoCart = () => {
    setOrders([...orders, { title, price}])
  } 
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
        <button onClick={addtoCart}>
          Order
        </button>
      </div>
    </div>
  );
}
export default Card;
