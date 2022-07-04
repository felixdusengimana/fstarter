import React from 'react'

export default function Button({theme}) {

  return (
    <button style={{
        backgroundColor: theme.background,
        color: theme.color,
        borderColor: theme.border,
    }} className={`btn btn-${theme.name}`}>Button</button>
  )
}
