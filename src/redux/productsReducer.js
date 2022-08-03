const initalState = {
  Pizza: [
    {id:1, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Маргарита", price: 95,category: 4, isTraditional: false, size: 26},
    {id:2, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Четыре сезона", price: 35,category: 5, isTraditional: false, size: 26},
    {id:3, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Пепперони", price: 39,category: 1, isTraditional: false, size: 26},
    {id:4, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Овощи и грибы", price: 385,category: 1, isTraditional: false, size: 26},
    {id:5, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Сырная", price: 222,category: 3, isTraditional: false, size: 26},
    {id:6, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Пепперони Фреш с перцем", price: 555,category: 1, isTraditional: false, size: 26},
    {id:7, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Цыпленок барбекю", price: 35595,category: 1, isTraditional: false, size: 26},
    {id:8, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Кисло-сладкий цыпленок", price: 44,category: 2, isTraditional: false, size: 26},
    {id:9, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Крэйзи пепперони", price: 666,category: 2, isTraditional: false, size: 26},
  ],
  categoryes: [
    {id:1, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Маргарита", price: 95,category: 4, isTraditional: false, size: 26},
    {id:2, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Четыре сезона", price: 35,category: 5, isTraditional: false, size: 26},
    {id:3, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Пепперони", price: 39,category: 1, isTraditional: false, size: 26},
    {id:4, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Овощи и грибы", price: 385,category: 1, isTraditional: false, size: 26},
    {id:5, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Сырная", price: 222,category: 3, isTraditional: false, size: 26},
    {id:6, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Пепперони Фреш с перцем", price: 555,category: 1, isTraditional: false, size: 26},
    {id:7, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Цыпленок барбекю", price: 35595,category: 1, isTraditional: false, size: 26},
    {id:8, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Кисло-сладкий цыпленок", price: 44,category: 2, isTraditional: false, size: 26},
    {id:9, src: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", name: "Крэйзи пепперони", price: 666,category: 2, isTraditional: false, size: 26},
  ],
  categoryTitle: [
    {id: 0, title: "Все"},
    {id: 1, title: "Мясные"},
    {id: 2, title: "Вегетарианская"},
    {id: 3, title: "Гриль"},
    {id: 4, title: "Острые"},
    {id: 5, title: "Закрытые"},
  ],
};

const ProductsReducer = (state = initalState , action) => {
  switch (action.type) {
    case "ADD-BASKET":
      return [...state.Pizza, {id: 2, name:"basket"}]
      break;
    case "DIVIDE_CATEGORIES":
      return {...state,
        categoryes: action.category == 0
        ? state.Pizza
        : state.Pizza.filter(item => item.category == action.category)
      }
      break;
    case "CHOICE_PIZZA":
    return {...state, categoryes : state.categoryes.map(pizza => {
      if (pizza.id === action.id) {
        return { ...pizza, isTraditional: !pizza.isTraditional }
      }
      return pizza
    })}

      break;
    case "CHANGE_SIZE":
      return {...state, categoryes : state.categoryes.map(pizza => {
        if (pizza.id === action.id) {
          return { ...pizza, size: action.size}
        }
        return pizza
      })}
      break;
      case "SORT_PIZZA":
        switch(action.sort){
            case "Populars":
              return {...state, categoryes:state.categoryes.sort((a, b) => a.price + Math.random() * 100 > b.price + Math.random() * 100 ? 1 : -1)}
            break;
            case "Price":
              return {...state, categoryes: state.categoryes.sort((a, b) => a.price > b.price ? 1 : -1)}
            break;
            case "Alphabet":
              return {...state, categoryes: state.categoryes.sort((a,b)=> a.name > b.name ? 1 : -1)}
            break;
            default: return {...state, categoryes: state.categoryes};
          }
      break;

    default: return state

  }
}
export const productsActionCreator = {
  categories(category){
    return {
      type: "DIVIDE_CATEGORIES",
      category:category
    }
  },
  choicePizza(id){
    return {
      type: "CHOICE_PIZZA",
      id:id
    }
  },
  changeSize(id,size){
    return {
      type: "CHANGE_SIZE",
      id:id,
      size:size,
    }
  },
  sortPizza(sort){
    return {
      type: "SORT_PIZZA",
      sort:sort,
    }
  },
}

export default ProductsReducer
