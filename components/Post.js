import Link from 'next/link'
import Image from 'next/image'

import { Container, Row, Col } from 'reactstrap';

export default function Post({post}){
    return (
         
        <Col xs="12" lg="3">
        <div className='col py-3'>
            <div class='card p-0 '>
                
                <Image className='image'
                    src={post.frontmatter.image}
                    alt="oesnt matter"
                    layout="responsive"
                    width={500}
                    height={500}
                />
            {/*} <img src={post.frontmatter.image} alt='' /> */}
                <div>
                    {post.frontmatter.price}
                </div>
                {post.frontmatter.description}

                <Link href={`/posts/${post.slug}`}>
                    <a className='btn'>Read More</a>
                </Link>
                
                
            </div>
        </div>
       
        </Col>
         
        
    )
}