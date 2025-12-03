import React, { useState } from 'react';
import Image from 'next/image';

import Style from './HeroSection.module.css';
import images from '../../assets';
import { Token, SearchToken } from '../index';

const HeroSection = ({ accounts, tokenData }) => {
  // STATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openTokenOne, setOpenTokenOne] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({ name: '', image: '' });
  const [tokenTwo, setTokenTwo] = useState({ name: '', image: '' });

  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.close}
              alt="close"
              width={20}
              height={20}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>

        {/* INPUT 1 */}
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenTokenOne(true)}>
            <Image
              src={tokenOne.image || images.etherlogo}
              width={20}
              height={20}
              alt="token-1"
            />
            {tokenOne.name || 'ETH'}
            <small>9474</small>
          </button>
        </div>

        {/* INPUT 2 */}
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenTokenTwo(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              height={20}
              alt="token-2"
            />
            {tokenTwo.name || 'ETH'}
            <small>9474</small>
          </button>
        </div>

        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Swap</button>
        ) : (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {/* Search modal for Token 1 */}
      {!openTokenOne && (
        <SearchToken
          setOpenToken={setOpenTokenOne} 
          setToken={setTokenOne}          
          tokenData={tokenData}
        />
      )}

      {/* Search modal for Token 2 */}
      {openTokenTwo && (
        <SearchToken
          setOpenToken={setOpenTokenTwo}
          setToken={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
