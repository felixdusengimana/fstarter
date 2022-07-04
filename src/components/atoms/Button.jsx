import React from 'react'

export default function Button({theme}) {
  const btnTheme = theme==='primary'?'btn-primary'
                    :theme==='success'?'btn-success border-success'
                    :theme==='warning'?'btn-warning'
                    :theme==='danger'?'btn-danger':'btn-default';
  return (
    <button className={`btn ${btnTheme}`}>Button</button>
  )
}
