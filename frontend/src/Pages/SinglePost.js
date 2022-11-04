import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Layout from '../component/Layout'
import productsDetails from "../Data/Data";
function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const product = productsDetails.productsDetails.find(x => x.id === path)
    console.log(product);
    return (
        <Layout>
            <Box pt={8} sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <div className='py-2 px-4'>
                        <Link to="/">
                            <a href="#/">Back to all post</a>
                        </Link>
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box className="single-product-main" >
                            <Box>
                                <Box pl={3}>
                                    <img className='singleProductImg' src={product.img} alt="" />
                                </Box>
                                <Box>
                                    <Typography textAlign="left" fontWeight="600">{product.date}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Address : {product.address}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Food : {product.food}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Phone : {product.phone}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}

export default SinglePost