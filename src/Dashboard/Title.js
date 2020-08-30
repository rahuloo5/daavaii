import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './title.module.css'

export default function Title({name , title}) {
    return (
        <div className="heading mx-auto text-center">
        <div className="col-10 mx-auto my-40 text-center">
        <h1 className="text-capitalize font-weight-bold "><u>
                    {name} <strong>{title}</strong></u>

            
        </h1>



        </div>
            
        </div>
    )
}
