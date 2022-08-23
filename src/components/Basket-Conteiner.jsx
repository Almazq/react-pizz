import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Basket from './Basket';
import {productsActionCreator} from '../redux/productsReducer';

const BasketConteiner = (props) => {
  console.log(props)
  const deleteBasketFC = (id)=>{
    props.deleteBasket(id);
  }
  return (
    <Basket Basket={props.Basket} totalPriceValue={props.totalPriceValue} deleteBasketFC={deleteBasketFC}/>
  )
}
const mapStateToProps = (state)=>{
  return{
    Basket: state.Products.Basket,
    totalPriceValue: state.Products.totalPrice,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    deleteBasket: (id) => {
      dispatch(productsActionCreator.deleteBasket(id))
    },
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(BasketConteiner)
