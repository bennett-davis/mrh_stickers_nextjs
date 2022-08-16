import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/sticker_design.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function PostPage({props}){
   
    return (
      <div key={props.id}>
      <Container styles={styles.container}>
      <Row className='w-100 text-center h-50'>
        <Col md="6">
          <div className={styles.imageShadow}>
          <Image className={styles.imageRadius}
            src={props.image}
            alt={props.description}
            layout = "responsive"
            width={700}
            height={700}
          />
          </div>
          
        </Col>
        <Col md="6" >
          <div className='text-dark h-100'>
            <div className= {styles.descriptionContainer}>
              <Col>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}</div>
                <div className={styles.buyButton}>
                  
                    <Link href={props.link}role="button">BUY NOW</Link>
                  
                    
                </div>
              </Col>
            </div>
          </div>
        </Col>
        
      </Row>
      </Container>
      </div>

    )
    
}

