import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

import search from './../src/assets/img/search.svg'




function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6212081301ccdac074305751.mockapi.io/items').then(res => {
      console.log(res.data)
      setItems(res.data);
    });
    axios.get('https://6212081301ccdac074305751.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj)=>{
    axios.post('https://6212081301ccdac074305751.mockapi.io/cart', obj);
    setCartItems(prev =>[...prev, obj])
  };

  const onRempveItem = (id)=>{
    axios.delete(`https://6212081301ccdac074305751.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }



  return (
    <div className="wrapper">

      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRempve={onRempveItem} />}
      <Header onClickCart={()=>setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search"/>
            {searchValue &&
              <img 
                onClick={() => setSearchValue('')}
                className='clear cu-p'
                src="/img/btn-remove.svg" 
                alt="Clear"
              />
            }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-center">
          {
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              
              <Card 
                key={index}
                title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl}
                
                onFavorite={()=> console.log("Добавили в закладки")} 
                onPlus={(obj)=> onAddToCart(obj)}       
              /> 
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default App;
