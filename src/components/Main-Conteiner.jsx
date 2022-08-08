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
  const clickBasket = (id, )=>{
    props.addBasket(id)
  }
  console.log(props.products)
  console.log(props.basket);
  return (
    <div><Main products = {props.products} liClick ={liClick}
      changeSizeFC= {changeSizeFC}choicePizzaFC ={choicePizzaFC}
      categoryTitle={props.categoryTitle} sortPizzaFC={sortPizzaFC}
      clickBasket={clickBasket} basketLength = {props.basket}/></div>
  )
}

const mapStateToProps = (state)=>{
  return{
    products: state.Products.categoryes,
    categoryTitle: state.Products.categoryTitle,
    basket: state.Products.Basket,
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
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(App)
