import React  from 'react'
import ListUser from './ListUser';
import ListProduits from './ListProduits';
import DetailUser from "./DetailUser"
import { Routes, Route } from 'react-router-dom'



 function Acceuil() {

    



  return (
    <div className='Acceuil'>
        <div className='header'>
        
    </div>
    <Routes>
        <Route exact path="/" element={<ListUser />} />
        <Route path='/ListProduits/' element={<ListProduits/>} />
        <Route path='/DetailUser/' element={<DetailUser />} />
        
    </Routes>
    </div>
  )
}


export default Acceuil;