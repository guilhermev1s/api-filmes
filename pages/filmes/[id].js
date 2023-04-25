import Pagina from '@/components/Pagina'
import apifilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = (props) => {

  return (

            <Col md={9}>
              <p><strong>Orçamento: </strong>{filme.budget}</p>
              <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
              <p><strong>Duração: </strong>{filme.runtime} min</p>
              <p><strong>Nota: </strong>{filme.vote_average}</p>
          <div>
           <strong>Gêneros: </strong>
          <ul>
           {filme.genres.map(item=> (
           <li>{item.name}</li>
          ))}

          </ul>
          </div>
          <p>{filme.overview}</p>
            </Col>
          </Row>
      
       <h2>Atores</h2>
      <Row>
        {atores.map(item=> (
        <Col className='mb-3' md={2}>
          <Card.Img variant="top" src= {"https://image.tmdb.org/t/p/w500" + item.profile_path} />
        </Col>
          ))}
      </Row>



        </Pagina>  
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apifilmes.get('/movie/' + id)
    const filme = resultado.data

    const resAtores = await apifilmes.get('/movie/' + id + '/credits')
    const atores = resAtores.data.cast

    return {
      props: { filme, atores },
    }
  }