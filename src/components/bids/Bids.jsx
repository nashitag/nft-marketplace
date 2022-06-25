import React from 'react'
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import bids1 from '../../assets/bids1.png';
import bids2 from '../../assets/bids2.png';
import bids3 from '../../assets/bids3.png';
import bids4 from '../../assets/bids4.png';
import bids5 from '../../assets/bids5.png';
import bids6 from '../../assets/bids6.png';
import bids7 from '../../assets/bids7.png';
import bids8 from '../../assets/bids8.png';
import bids9 from '../../assets/bids9.png';
import bids10 from '../../assets/bids10.png';
import bids11 from '../../assets/bids11.png';
import { Link } from 'react-router-dom';
import seller1 from '../../assets/seller1.jpg';
import seller2 from '../../assets/seller2.png';
import seller3 from '../../assets/seller3.png';
import seller4 from '../../assets/seller4.png';
import seller5 from '../../assets/seller5.png';
import seller6 from '../../assets/seller6.jpg';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <Card id="1" title="Abstact Smoke Red" imgsrc={bids1} amt="1.25" crncy="ETH" likes="92" creatorimg={seller1} creatorname="James Bond"/>
          
          <Card id="2" title="Mountain Landscape" imgsrc={bids2} amt="0.20" crncy="ETH" likes="25" creatorimg={seller2} creatorname="Rian Leon"/>
          
          <Card id="3" title="Paint Color on Wall" imgsrc={bids3} amt="0.55" crncy="ETH" likes="55" creatorimg={seller3} creatorname="Lady Young"/>
          
          <Card id="4" title="Abstract Patern" imgsrc={bids4} amt="0.87" crncy="ETH" likes="82" creatorimg={seller4} creatorname="Black Glass"/>
          
          <Card id="5" title="White Line Grafiti" imgsrc={bids5} amt="0.09" crncy="ETH" likes="22" creatorimg={seller5} creatorname="Budhiman"/>
          
          <Card id="6" title="Abstract Triangle" imgsrc={bids6} amt="0.90" crncy="ETH" likes="71" creatorimg={seller6} creatorname="Alex"/>
          
          <Card id="7" title="Lake Landscape" imgsrc={bids7} amt="0.52" crncy="ETH" likes="63" creatorimg={seller6} creatorname="Alex"/>
          
          <Card id="8" title="Blue Red Art" imgsrc={bids8} amt="0.85" crncy="ETH" likes="66" creatorimg={seller3} creatorname="Lady Young"/>
          
          <Card id="9" title="Blue Red Art" imgsrc={bids9} amt="0.85" crncy="ETH" likes="66" creatorimg={seller2} creatorname="Rian Leon"/>

          <Card id="10" title="Blue Red Art" imgsrc={bids10} amt="0.11" crncy="ETH" likes="20" creatorimg={seller1} creatorname="James Bond"/>

          <Card id="11" title="Blue Red Art" imgsrc={bids11} amt="0.43" crncy="ETH" likes="48" creatorimg={seller4} creatorname="Black Glass"/>

        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  )
}

const Card = ({id, title, imgsrc, amt, crncy, likes, creatorimg, creatorname}) => {
  return (
      <div className="card-column" >
        <div className="bids-card">
          <div className="bids-card-top">
            <img src={imgsrc} alt="" />
          <Link to={`/post/${id}`} state={{id:id, title:title, imgsrc:imgsrc, amt:amt, crncy:crncy, likes:likes, creatorimg:creatorimg, creatorname:creatorname}}>
            <p className="bids-title">{title}</p>
          </Link>
          </div>
          <div className="bids-card-bottom">
            <p>{amt} <span>{crncy}</span></p>
            <p> <AiFillHeart /> {likes}</p>
          </div>
        </div>
      </div>
  )
}



export default Bids
