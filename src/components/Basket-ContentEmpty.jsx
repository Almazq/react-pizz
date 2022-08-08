import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const ContentEmpty = (props) => {
  return (
    <div class="content">
      <div class="container container--cart">
        <div class="cart cart--empty">
          <h2>Корзина пустая <icon>😕</icon></h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src="/img/empty-cart.png" alt="Empty cart" />
          <NavLink to="/" class="button button--black" style={{background: "orange", padding: "10px", borderRadius: "20px"}}>
            <span>Вернуться назад</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ContentEmpty;
