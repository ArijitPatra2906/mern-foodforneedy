import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/Layout'
import products from "../Data/Data"
import "../Styles/Home.css"
function Home() {
    return (
        <Layout>
            <Box sx={{ width: '100%' }}>
                <Stack >
                    <Box pb={5}>
                        {/* <Typography pt={5} textAlign="center" variant='h3' color="#fb5c42">Our Products</Typography> */}
                        <Box mt={5} sx={{ display: "flex", flexWrap: "wrap", textAlign: "left", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                            {products.products?.map((post) => (
                                <Box className='product-cart' sx={{ cursor: "pointer", display: "flex", flexDirection: "column", textAlign: "center", position: "relative" }}>
                                    <img className='product-img' src={post.img} alt="" />
                                    <Link to={`/post/${post.id}`} className="link">
                                        <Typography pt={2} textAlign="left" fontWeight="700" color="black">Post by : {post.post}</Typography>
                                    </Link>
                                    <Typography textAlign="left" fontWeight="600">{post.date}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Address : {post.address}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Food : {post.food}</Typography>
                                    <Typography textAlign="left" fontWeight="600">Phone : {post.phone}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Stack>
            </Box >
        </Layout>
    )
}

export default Home