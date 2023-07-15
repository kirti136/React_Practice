import React from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <h4
      onClick={() => navigate(`/product/${props.data.id}`)}
      className={style.red}
      style={{ marginTop: "50px" }}
    >
      {JSON.stringify(props.data)}
    </h4>
  );
}

export default Card;
