import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Style from './NavBar.module.css';
import images from '../../assets';
import { Model, TokenList } from '../index';


const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Token",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    },
  ];
  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenbox, setOpenTokenbox] = useState(false);  

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
        {/* LOGO IMAGE*/}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          {/* MENU ITEMS */}

          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.name}`, query: `${el.link}` }} 
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* MIDDLE SIDE */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div  className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* INPUT FIELD */}
            <input type ="text" placeholder='Search Token' 
            className={Style.NavBar_box_middle_input} />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div classname={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" width={30} height={30} />
            </div>
            <p>Network Name</p>
            <button onClick={() => {}}>Address</button>
          </div>

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenbox && (
        <TokenList tokenDate='hey' setOpenTokenbox={setOpenTokenbox} />
      )}
    </div>
  );
};

export default NavBar;
