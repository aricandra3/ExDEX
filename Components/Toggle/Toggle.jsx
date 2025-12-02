import React from 'react'

import Style from './Toggle.module.css';

const Toggle = ({ label }) => {
  return (
    <div className={Style.toggle}>
      <div className={Style.toggle_switch_box}>
        <input type="checkbox" 
        className={Style.Toggle_checkbox}
        name={label}
        id={label}
        />
        <label className={Style.Toggle_label} htmlFor={label}>
          <span className={Style.Toggle_inner} />
          <span className={Style.toggle_switch} />
        </label>
      </div>
    </div>
  )
}

export default Toggle
