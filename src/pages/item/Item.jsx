import React from 'react';
import './item.css'
import creator from '../../assets/seller2.png'
import item from '../../assets/item1.png';
import { useLocation } from 'react-router-dom';

const Item = () => {
  
  const { state } = useLocation();
  // const { state } = location;
  console.log(state);

  return( 
      <div className='item section__padding'>
        <div className="item-image">
          <img src={state.imgsrc} alt="item" />
        </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>{state.title}</h1>
              <p>From <span>{state.amt} {state.crncy}</span> ‧ 20 of 25 available</p>
            </div>
            <div className="item-content-creator">
              <div><p>Creater</p></div>
              <div>
                <img src={state.creatorimg} alt="creator" />
                <p>{state.creatorname}</p>
              </div>
            </div>
            <div className="item-content-detail">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="item-content-buy">
              <button className="primary-btn">Buy For {state.amt} {state.crncy}</button>
              <button className="secondary-btn">Make Offer</button>
            </div>
          </div>
      </div>
  )
};

export default Item;
