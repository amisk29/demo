import React from 'react'

const Filter = () => {
    const prod=["all items","rice items","pizza","drink"];
    const [filter,setFilter]=React.useState("all items")
  return (
    <div>
        <center className='mt-3'>
            <span className='h4 m-2'>Filter :</span>
            <select name="filter" className='p-1' onChange={(a)=>setFilter(a.target.value)}>
                {prod.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            <button className='btn btn-sm btn-primary m-2' onClick={()=>console.log(filter)}>submit</button>
        </center>

    </div>
  )
}

export default Filter