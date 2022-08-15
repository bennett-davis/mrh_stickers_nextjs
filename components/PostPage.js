import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/sticker_design.module.css'
import Image from 'next/image'


export default function PostPage({props}){
    console.log(props.title);
    return (
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
            <div class= {styles.descriptionContainer}>
              <Col>
                <div class={styles.title}>{props.title}</div>
                <div class={styles.description}>{props.description}</div>
                <div class={styles.price}>{props.price}</div>
                <div class={styles.buyButton}>
                    <a class="btn btn-primary" href={props.link} role="button">BUY NOW</a>
                </div>
              </Col>
            </div>
          </div>
        </Col>
        
      </Row>
      </Container>
    )
    
}

