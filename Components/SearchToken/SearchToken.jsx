import React, { useState } from 'react'
import Image from 'next/image'

import Style from './SearchToken.module.css';
import images from '../../assets';

const SearchToken = ({ setOpenToken, setToken, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);

  const coin=[
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "ETH",
    },
    // {id:1, name:"Ether", symbol:"ETH",  image:images.etherlogo},
    // {id:2, name:"Bitcoin", symbol:"BTC",  image:images.bitcoinlogo},
    // {id:3, name:"Tether", symbol:"USDT",  image:images.tetherlogo},
    // {id:4, name:"Litecoin", symbol:"LTC",  image:images.litelogo},
    // {id:5, name:"Binance Coin", symbol:"BNB",  image:images.binancelogo},
  ];
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a Token</h4>
          <Image src ={images.close} alt="close" width={50} height={50} onClick={()=> setOpenToken(false)} />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="search" width={20} height={20} />
          </div>
          <input type="text" placeholder='Search name or paste address' />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span key={i +1} className={active == i + 1 ? `${Style.active}` : ""}
            onClick={()=> (setActive(i + 1 ), setToken({name: el.name, image: el.img}))}>
              <Image src={el.image || images.etherlogo} alt="token" width={30} height={30} />
              {el.name} <small>{el.symbol}</small>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchToken
