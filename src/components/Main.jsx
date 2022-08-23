import React,{useState} from 'react';
import './Main.css';
import { NavLink } from "react-router-dom";
import Header from "./Header"
const Main = (props)=>{
  const [categoryActive, setCategoryActive] = useState(0);
  const [trueTraditionally, setTrueTraditionally] = useState(false);
  const [sortCondition, setSortCondition] = useState(false);
  const [activeSortName, setActiveSortName] = useState("Populars");
  const onClickLi = (id)=>{
    props.liClick(id);
    setCategoryActive(id);
  }
  const sortPizza = (sort)=>{
    props.sortPizzaFC(sort);
    setSortCondition(false);
    setActiveSortName(sort)
  }
  const clikcBasketAdd = (id,price)=>{
    props.clickBasket(id);
    props.totalPriceFC(price)
  }

  return(
    <div className="wrapper">
      <Header totalPrice={props.totalPriceValue} basket={props.basket}/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul>
                {props.categoryTitle.map(item =>
                  <li className ={categoryActive == item.id ? "active" : null} onClick={()=>onClickLi(item.id)} key={item.id}>
                    {item.title}
                  </li>)}

              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={()=>setSortCondition(!sortCondition)}>{activeSortName}</span>
              </div>
              <div className="sort__popup" style={{display:sortCondition ? "block" : "none" , cursor: "pointer"}}>
                <ul>
                  <li className={activeSortName == "Populars" ? "active" : null} onClick={()=>sortPizza("Populars")}>популярности</li>
                  <li className={activeSortName == "Price" ? "active" : null} onClick={()=>sortPizza("Price")}>цене</li>
                  <li className={activeSortName == "Alphabet" ? "active" : null} onClick={()=>sortPizza("Alphabet")}>алфавиту</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {props.products.map(product => <div className="pizza-block" key={product.id}>
            <img
              className="pizza-block__image"
              src={product.src}
              alt="Pizza"
            />
          <h4 className="pizza-block__title">{product.name}</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className={product.isTraditional ? null : "active"} onClick={()=>props.choicePizzaFC(product.id)}>тонкое</li>
                <li className={product.isTraditional ? "active" : null} onClick={()=>props.choicePizzaFC(product.id)}>традиционное</li>
              </ul>
              <ul>
                <li className={product.size == 26 ? "active" : null} onClick={()=>props.changeSizeFC(product.id,26)}>26 см.</li>
                <li className={product.size == 30 ? "active" : null} onClick={()=>props.changeSizeFC(product.id,30)}>30 см.</li>
                <li className={product.size == 40 ? "active" : null} onClick={()=>props.changeSizeFC(product.id,40)}>40 см.</li>
              </ul>
            </div>
            <div className="pizza-block__bottom">
              <div className="pizza-block__price">{product.price}&#36;</div>
              <div className="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span onClick={()=>clikcBasketAdd(product.id , product.price)}>Добавить</span>
              </div>
              </div>
              </div>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main;
