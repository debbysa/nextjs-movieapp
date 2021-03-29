import { Row, Col, Card } from 'antd'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

const { Meta } = Card

export default function Home({ movies }) {
  console.log(movies.results)
  return (
    <div>
      <Nav />
      <Layout home>
        <div>
          <h1>List of Upcoming Movies</h1>
          <Row gutter={[8, 32]}>
            {movies.results.map((movie, i) => (
              <Col span={4} key={i}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  key={movie.id}
                  cover={
                    <img
                      alt="example"
                      src={
                        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + movie.poster_path
                      }
                      width="1px"
                      height="250px"
                    />
                  }
                >
                  <Meta title={movie.title} description={movie.release_date} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=01c424d50ed4dfe7cdcb8c44f56186a1&language=en-US&page=1`
  )

  const movies = await res.json()

  return {
    props: {
      movies,
    },
  }
}
