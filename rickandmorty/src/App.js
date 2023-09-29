import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const email = 'ejemplo@gmail.com';
const password = 'unaPassword1';
const example = {
   id: 6,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

const [characters, setcharacters] = useState([])



function onClose(id){
  setcharacters(characters.filter((character) => character.id !== Number(id)))
}

const navigate = useNavigate();
const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

const location = useLocation()
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({ data }) => {
      console.log(data)
      if (data.name) {
         setcharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   return (
      <div className='App'>
         
         {location.pathname ==="/" ? null : <Nav onSearch={onSearch}/>}
         <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}
         />
         <Route path="/about" element={<About/>}
         />
           <Route path="/detail/:id" element={<Detail/>}
         />
          <Route path="/" element={<Form login={login} />}
         />
         </Routes>
      </div>
   );
}

export default App;
