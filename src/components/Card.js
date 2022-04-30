import React from "react";
import ReactDOM from "react-dom";
import Star from "../images/Star.png";
import "../style.css";

// export default function Card(props) {
//   // const loadImagew = async (props) => {
//   //   const res = await import(`../images/${props.img}`);
//   //   return res;
//   // };
//   return (
//     <div className="card">
//       <img src={require(`../images/${props.img}`)} className="card--image" />
//       <div className="card--stats">
//         <img src={require("../images/Star.png")} className="card--star" />
//         <span>{props.rating}</span>
//         <span className="gray">({props.reviewCount}) • </span>
//         <span className="gray">{props.country}</span>
//       </div>
//       <p>{props.title}</p>
//       <p>
//         <span className="bold">From ${props.price}</span> / person
//       </p>
//     </div>
//   );
// }

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.coverImg}`)}
        className="card--image"
      />
      <div className="card--stats">
        <img src={require("../images/Star.png")} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
