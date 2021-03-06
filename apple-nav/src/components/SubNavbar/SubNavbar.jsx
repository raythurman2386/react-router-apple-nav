import React from 'react'
import styled from 'styled-components'

const SubNavbar = () => {
  return (
    <SubNav>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/macbookair__ej39du0gz4uq_large.svg" /><TempSpan>MacBook Air</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg" /><TempSpan>MacBook Pro</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/imac__dkswmjfqeziq_large.svg" /><TempSpan>iMac</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/imac_pro__eer4bfwlutme_large.svg" /><TempSpan>iMac Pro</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_pro__bn92faz71k6a_large.svg" /><TempSpan>Mac Pro</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/macmini__c6u0it831y0y_large.svg" /><TempSpan>Mac mini</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg" /><TempSpan>Compare</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg" /><TempSpan>Pro Display XDR</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg" /><TempSpan>Accessories</TempSpan></Temporary>
      <Temporary href="#"><TempImg src="https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_osx__dntc9ef2limq_large.svg" /><TempSpan>Mojave</TempSpan></Temporary>
    </SubNav>
  )
}

export default SubNavbar

const SubNav = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(242,242,242,0.7);
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  width: 100%;
  height: 92px;
  overflow: hidden;
`

const Temporary = styled.a`
  text-decoration: none;
  display: flex;
  color: #111;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
  padding: 0;
  position: relative;
  font-size: 11px;
  overflow: hidden;
`

const TempImg = styled.img`
  width: 48px;
  height: 54px;
`

const TempSpan = styled.span`
  &:hover {
    color: #0092DA;
  }
`