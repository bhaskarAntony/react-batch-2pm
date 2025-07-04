
import React from 'react'

function Example3() {
    const colors = ["green", "blue", "red", "gold", "orange", "darkslategreen", "lightgreen"];



    const bclass = ["primary", "secondary", "dark", "white", "light", "warning", "success", "info", "outline-primary", "outline-danger", "outline-success", "outline-warning", "outline-info", "outline-danger"]



    const users = [
        {
            username:"Arun",
            age:25,
            email:"arun@gmail.com"
        },
        {
            username:"varun",
            age:37,
            email:"varun@gmail.com"
        },
         {
            username:"kiran",
            age:17,
            email:"kiran@gmail.com"
        }
    ]
  return (
    <div className='container p-3'>
            <h1 className="text-center bg-success p-3 text-white">Non-Primitive datatype (Object = Array)</h1>
            <hr />
            <div className="border p-3 shadow-sm">
                <h1 className="fs-3">Array</h1>
                <hr />
                
                <div className="d-flex gap-2">
                    {
                        colors.map(function(item, index){
                            return (
                                <button style={{backgroundColor:item, color:'white' }} key={index}>{item}</button>
                            )
                        })

                    }
                </div>


                    <h1 className="fs-4">Example2</h1>
                    <hr />
                    <div className="d-flex gap-3 flex-wrap">
                        {
                            bclass.map((colorvalue, colorIndex)=>(
                                <button className={`btn btn-${colorvalue}`}>{colorvalue}</button>
                            ))
                        }
                    </div>

                    <div className="d-flex gap-3">
                        {
                        users.map((item, index)=>(
                            <div className="card w-25 text-center p-3 mt-3 shadow bg-dark text-white">
                                <h3 className="fs-4">{item.username}</h3>
                                <hr />
                                <p className="fs-5 text-secondary">{item.email}</p>
                                <hr />
                                <small className="text-success"><b>Age: </b>{item.age}</small>

                                <button className="btn btn-light btn-sm mt-3">View Details</button>
                            </div>
                        ))
                    }
                    </div>
            </div>
    </div>
  )
}

export default Example3