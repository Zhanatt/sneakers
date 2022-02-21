import React from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [];


function App() {
  const [items, setItems] = React.useState([
    {
     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
     "price": 12999,
     "imageUrl": "img/sneakers/1.jpg"
    },
    {
     "title": "Мужские Кроссовки Nike Air Max 270",
     "price": 15600,
     "imageUrl": "img/sneakers/2.jpg"
    },
    {
     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
     "price": 89455,
     "imageUrl": "img/sneakers/3.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 13455,
     "imageUrl": "img/sneakers/4.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 13455,
     "imageUrl": "img/sneakers/5.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 89455,
     "imageUrl": "img/sneakers/6.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 65645,
     "imageUrl": "img/sneakers/7.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 15154,
     "imageUrl": "img/sneakers/7.jpg"
    }
   ]);
  const [cartOpened, setCartOpened] = React.useState(false);

  // fetch('https://6212081301ccdac074305751.mockapi.io/items').then(res => {
  //   return res.json();
  // }).then(json => {
  //   console.log(json)
  // })

  return (
    <div className="wrapper">

      {cartOpened ? <Drawer onClose={()=> setCartOpened(false)} /> : null}
      <Header onClickCart={()=>setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все крассовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-center">
          {
            items.map((obj) => (
              <Card 
                title={obj.title} 
                price={obj.price} 
                imageUrl={obj.imageUrl}
                onFavorite={()=> console.log("Добавили в закладки")} 
                onPlus={()=> console.log("Нажали плюс")} 
              /> 
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default App;
