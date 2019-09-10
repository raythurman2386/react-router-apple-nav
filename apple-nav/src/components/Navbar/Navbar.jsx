import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <MainNav>
      <Temporary href="#"><Link to="/"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="apple" /></Link></Temporary>
      <Link to="/mac"><Temporary href="#">Mac</Temporary></Link>
      <Temporary href="#">iPad</Temporary>
      <Temporary href="#">iPhone</Temporary>
      <Temporary href="#">Watch</Temporary>
      <Temporary href="#">TV</Temporary>
      <Temporary href="#">Music</Temporary>
      <Temporary href="#">Support</Temporary>
      <Temporary href="#"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="search" /></Temporary>
      <Temporary href="#"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt="cart" /></Temporary>
    </MainNav>
  )
}

export default Navbar

const MainNav = styled.div`
  margin: 0 auto;
  height: 43px;
  color: white;
  font-family: Helvetica;
  font-size: 14px;
  max-width: 1000px;
  width: 100%;
  background-color: #313131;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Temporary = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #848484;
  }
`