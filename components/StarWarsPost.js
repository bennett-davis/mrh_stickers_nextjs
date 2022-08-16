import Link from 'next/link'
import Image from 'next/image'

import { Container, Row, Col } from 'reactstrap';

export default function StarWarsPost({post}){
  
    return (
         
        <Col xs="12" lg="3" key={post.id}>
            <div className='col py-3'>
                <Link href={`/posts/star_wars/${post.slug}`}>
                    <div>
                        <div className='imageShadow'>
                            <Image className='image'
                                src={post.frontmatter.image}
                                alt={post.frontmatter.description}
                                layout="responsive"
                                width={500}
                                height={500}
                            />
                        </div >
                        <div className='post-details'>
                            <div className='post-title'>{post.frontmatter.title}</div>
                            <div className='post-description'>{post.frontmatter.description}</div>
                            <div className='post-price'>{post.frontmatter.price}</div>
                        </div>      
                    </div> 
                </Link>
            </div>
        </Col>   
    )
}