import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import apifilmes from '@/services/apiFilmes';

const index = (props) => {

  return (
    
    <Pagina titulo="Filmes">
      {props.filmes.map(item=>(
        <p>{item.title}</p>
        
      
      
      
    ))}
       
      
      
        
  

    </Pagina>
    
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apifilmes.get("/movie/popular")
  const filmes = resultado.data.results

  return {
    props: {filmes},
  }
}