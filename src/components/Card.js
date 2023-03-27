import React,{ useState } from "react";
function Card({ id, name, info, image, price , removeTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore?`${info}`:`${info.substring(0, 200)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} alt="" className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
          <div className="tour-price">₹{price}</div>
          <div className="tour-name">{name}</div>
        </div>
        <div className="description">
          {description}
          <span onClick={readmoreHandler} className="read-more">
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <button onClick={()=>removeTour(id)} className="not-interested-btn">Not Interested</button>
    </div>
  );
}
export default Card;
