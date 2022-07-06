import React from 'react'

export default function Button({theme, disabled, onClick, children}) {

  return (
    <button style={{
        backgroundColor: theme.background,
        color: theme.color,
        borderColor: theme.border,
    }} className={`btn btn-${theme.name}`} disabled={disabled} onClick={onClick}>{children}</button>
  )
}
