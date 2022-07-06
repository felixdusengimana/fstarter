import React from 'react'

export default function Input({theme, disabled, onChange, placeholder}) {
  return (
    <input style={{
        backgroundColor: theme.background,
        color: theme.color,
        borderColor: theme.border,
    }} className={`btn btn-${theme.name}`} disabled={disabled} onChange={onChange} placeholder={placeholder}/>
  )
}
