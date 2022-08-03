import React from 'react'
import Main from './components/Main';
import {connect} from 'react-redux';
import {productsActionCreator} from './redux/productsReducer'

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
  console.log(props.products)
  return (
    <div><Main products = {props.products} liClick ={liClick}
      changeSizeFC= {changeSizeFC}choicePizzaFC ={choicePizzaFC}
      categoryTitle={props.categoryTitle} sortPizzaFC={sortPizzaFC}/></div>
  )
}

const mapStateToProps = (state)=>{
  return{
    products: state.Products.categoryes,
    categoryTitle: state.Products.categoryTitle,
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
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(App)
