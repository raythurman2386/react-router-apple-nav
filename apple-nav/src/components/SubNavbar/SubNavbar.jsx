import React from 'react'
import styled from 'styled-components'

const SubNavbar = () => {
  return (
    <SubNav>
      <Temporary href="#">MacBook Air</Temporary>
      <Temporary href="#">MacBook Pro</Temporary>
      <Temporary href="#">iMac</Temporary>
      <Temporary href="#">iMac Pro</Temporary>
      <Temporary href="#">Mac Pro</Temporary>
      <Temporary href="#">Mac mini</Temporary>
      <Temporary href="#">Compare</Temporary>
      <Temporary href="#">Pro Display XDR</Temporary>
      <Temporary href="#">Accessories</Temporary>
      <Temporary href="#">Mojave</Temporary>
    </SubNav>
  )
}

export default SubNavbar

const SubNav = styled.div`
  background: rgba(242,242,242,0.7);
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  width: 100%;
  height: 92px;
`

const Temporary = styled.a`
  text-decoration: none;
  margin-top: 3px;
  padding: 0;
  position: relative;
`