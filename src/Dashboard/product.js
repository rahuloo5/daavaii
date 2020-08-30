import React, { Component } from 'react'
import Title from './Title';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { ProductConsumer } from '../context';
import Medicine from './Medicine';


export default class product extends Component {

    
    render() {
        return (
            <React.Fragment>
            <div className = "py-5">
            <div className = "Container">
           <Title name="OUR" title ="PRODUCTS" />
            <div className="row ">
            <ProductConsumer >
            {value => {
             return value.Products.map(medicine =>{
                 return  <Medicine key = {medicine.id} medicine = {medicine} /> ;


                 } ) ;
                 }} 
   </ProductConsumer>
             </div>
             </div>
             </div>

 </React.Fragment>
        )
    }
}
