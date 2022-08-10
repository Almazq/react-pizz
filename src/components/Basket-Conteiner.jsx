import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Basket from './Basket'

const BasketConteiner = (props) => {
  return (
    <Basket Basket={props.Basket}/>
  )
}
const mapStateToProps = (state)=>{
  return{
    Basket: state.Products.Basket
  }
}

export default connect (mapStateToProps)(BasketConteiner)
