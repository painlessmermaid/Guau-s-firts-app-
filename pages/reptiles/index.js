import Head from 'next/head'
import styles from '../../styles/Reptiles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardImg } from 'reactstrap';
export default function Reptiles() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pages Reptiles </title>
      </Head>
      <div className={styles.primer} ><h1>¡Bienvenido a Reptinfo!</h1>
      </div>
      <div className={styles.sub} ><h3>¡¡En esta aplicacion encontraras todo lo que necesitas para criar a tu primer reptil!</h3>
      </div>
      <div className={styles.que}>
        <h2>¿Que deseas buscar?</h2>
      </div>

      <div className={styles.tarjeta}>
        <CardGroup className={styles.bodys}>
          <div className={styles.tres}>
            <Card>
              <CardImg className={styles.imagen}
                alt="Basilisco"
                src=" https://www.caracteristicas.co/wp-content/uploads/2017/03/reptiles-c-e1488573079620.jpg"
                top
                width="100%"
              />
              <CardBody className={styles.bodys}>
                <CardTitle tag="h5">
                  Cuidados basicos
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Alimentacion y parametros
                </CardSubtitle>
                <CardText>
                Recuerda que los reptiles son de sangre fria, algunos necesitan placas termicas, focos de calor y focos de rayos uv... 
                </CardText>
                <Button>
                  Next!
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className={styles.tres}>
            <Card>
              <CardImg className={styles.imagen}
                alt="Card image cap"
                src="https://www.hogarmania.com/archivos/201708/dragon-cuidados-848x477x80xX.jpg"
                top
                width="100%"
              />
              <CardBody className={styles.bodys}>
                <CardTitle tag="h5">
                  ¡Encuentralo aqui! 
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Descubre a tu reptil ideal
                </CardSubtitle>
                <CardText>
                  Recuerda que un compañero es una responsabilidad y no un juego... 
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className={styles.tres}>

            <Card>
              <CardImg className={styles.imagen}
                alt="Card image cap"
                src="https://i.pinimg.com/originals/f5/74/eb/f574eb3bdff0eb3eef08cabde9d62837.jpg" 
                top
                width="100%"
              />
              <CardBody className={styles.bodys}>
                <CardTitle tag="h5">
                  Terrarios e ideas 
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Encuentra o construye el abitad de tu reptil
                </CardSubtitle>
                <CardText>
                  Recuerda que ningun reptil es igual al otro, osea que debes adquirir un terrario diferente para cada reptil... 
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
        </CardGroup>
      </div>

    </div>


  )

}
