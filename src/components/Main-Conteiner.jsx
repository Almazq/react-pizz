import React from 'react'
import Main from './Main';
import {connect} from 'react-redux';
import {productsActionCreator} from '../redux/productsReducer'

const App = (props) => {
  const liClick = (category)=>{
    props.choiceCategory(category)
  }
  const choicePizzaFC = (id)=>{
    props.choicePizza(id)
  }
  const changeSizeFC = (id,size)=>{
    props.changeSize(id,size)
  }
  const sortPizzaFC = (sort)=>{
    props.sortPizza(sort)
  }
  const clickBasket = (id)=>{
    props.addBasket(id)
  }
  const totalPriceFC = (price)=>{
    props.totalPrice(price)
  }
  return (
    <div><Main products = {props.products} liClick ={liClick}
      changeSizeFC= {changeSizeFC}choicePizzaFC ={choicePizzaFC}
      categoryTitle={props.categoryTitle} sortPizzaFC={sortPizzaFC}
      clickBasket={clickBasket} totalPriceFC={totalPriceFC} basket = {props.basket} totalPriceValue={props.totalPriceValue}/></div>
  )
}

const mapStateToProps = (state)=>{
  return{
    products: state.Products.categoryes,
    categoryTitle: state.Products.categoryTitle,
    basket: state.Products.Basket,
    totalPriceValue: state.Products.totalPrice,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    choiceCategory: (category)=>{
      dispatch(productsActionCreator.categories(category))
    },
    choicePizza: (id)=>{
      dispatch(productsActionCreator.choicePizza(id))
    },
    changeSize: (id, size)=>{
      dispatch(productsActionCreator.changeSize(id, size))
    },
    sortPizza: (sort)=>{
      dispatch(productsActionCreator.sortPizza(sort))
    },
    addBasket: (id)=>{
      dispatch(productsActionCreator.addBasket(id))
    },
    totalPrice: (price)=>{
      dispatch(productsActionCreator.totalPrice(price))
    },
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(App)
