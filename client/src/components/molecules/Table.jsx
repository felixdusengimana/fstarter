import React from 'react'
import "./table.css"

export default function Table({headers, datas, withIndex=false}) {
  return (
    <div className='table-responsive-lg'>
        <table className='table table-striped'>
        <thead>
            <tr>
                {withIndex&&<th scope='col'>#</th>}
                {headers.map((header)=>(
                    <th scope="col" key={header.id} className="">
                        <div className='d-flex justify-content-start align-items-center gap-1'>
                            <span>{header.name}</span>
                            <img src={`/icons/${header.icon}.svg`} alt={`${header.icon}`}
                            onClick={()=>header.action(header.name)} className="" role="button"/>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
        {datas.map((data, index)=>(    
            <tr key={index}>
                {withIndex&&<th scope='col'>{index+1}</th>}
                {Object.entries(data).map(([key, value], index)=>(
                    <td key={index}>{value}</td>
                ))}
            </tr>            
            ))}
        </tbody>
    </table>
    </div>
  )
}
