import React from 'react'
import { Connect } from 'react-redux';
const Table = () => {
    const numbers =[1,2,3,4,5,6,7,8,9];
    const inActiveBtn='btn btn-outline-primary m-2';
    const activeBtn='btn btn-outline-primary m-2 active';
    const [number,setNumber]=React.useState(null);
  return (
    <div>
        <center className='mt-2'>
            <h4>please select your table</h4>
            {numbers.map((num,index)=>(
                <div style={{display:'inline'}} key={index}>
                    <button className={number===num?activeBtn:inActiveBtn} onClick={()=>setNumber(num)}>
                        {num}
                    </button>
                </div>

            
            ))}

        </center>

    </div>
  )
}
const mapStateToProps=this.state =>({
    table_number:state.tablereducer.table_number
})

export default connect(mapStateToProps,{settablenumber})(Table);