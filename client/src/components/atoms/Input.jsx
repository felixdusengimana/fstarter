import React from 'react'
import "./input.css"

export default function Input({theme,name, disabled, onChange, placeholder, icon, label}) {
  return (
   <div className='form-group' style={{
    backgroundColor: theme.background,
    color: theme.color,
    borderColor: theme.borderColor,
}}>
      {label&&<label>{label}</label>}
      <div className='input-group'>
        {icon&& 
        <div class="input-group-prepend">
          <span class="input-group-text"  style={{backgroundColor: theme.background,}} id="">d</span>
        </div>
        }
      <input style={{backgroundColor: theme.background,}} name={name} className={`form-control border-none`} disabled={disabled} onChange={onChange} placeholder={placeholder}/>
   </div>
   </div>
  )
}
