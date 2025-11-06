import React, { useState,useEffect }from 'react'
import Image from 'next/image'

import Style from './Model.module.css'
import images from '../../assets'

const Model = ({ setOpenModel, connectWallet }) => {

  //USESTATE
  const walletMenu = ["Metamask", "WalletConnect", "Coinbase Wallet", "WalletConnect"];
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect Wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image src={images.close} alt="logo" width={20} height={20} onClick={() => setOpenModel(false)} 
            />
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1 } onClick={()=> connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to ExDex's<br/> Terms of Service and acknowledge that you have read and understand the ExDex Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Model
