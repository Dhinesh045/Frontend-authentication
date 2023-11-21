import React from 'react'
import { Container,Button } from 'react-bootstrap'
import "../Styles/Home.css"

function Home() {
  return (
    <Container>
<h1>Welcome to our webpage</h1>
<p>we are here to serve you</p>
<button variant="primary" type="submit">Get Started</button>
    </Container>
  )
}

export default Home