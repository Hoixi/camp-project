import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductById(id).then(result => setProduct(result.data))
    }, [])
    return (

        <div>
            <Card fluid
                image={product.image}
                header={product.title}
                meta={product.category}
                description={product.description}
            >
                
            </Card>
        </div>
    )
}
