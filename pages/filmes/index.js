import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import apifilmes from '@/services/apiFilmes';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const index = (props) => {

  return (

    <Pagina titulo="Filmes">

      <Row md={4}>

        {props.filmes.map(item => (
          <Col>
            <Card>
              <Card.Img variant="top" src= {"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <p>Lançamento: {item.release_date}</p>
                <p>Nota: {item.vote_average}</p>
                <Link className='btn btn-danger' href={'/filmes/' + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>




    </Pagina>

  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apifilmes.get("/movie/popular?language=pt-BR")
  const filmes = resultado.data.results

  return {
    props: { filmes },
  }
}