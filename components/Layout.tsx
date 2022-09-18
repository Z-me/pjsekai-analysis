// import * as React from 'react';
import type { FC, ReactNode } from 'react'
import AppHeader from '../components/AppHeader'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

//
export const Layout = ({ children, ...props }: Props) => {
  return (
    <StyledBody>
      <AppHeader />
      <Container maxWidth='md'>
        <StyledMainContainer>
          <Box sx={{ height: '100%', padding: '16px' }}>
            <div {...props}>{children}</div>
          </Box>
        </StyledMainContainer>
      </Container>
    </StyledBody>
  )
}

const StyledBody = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  background-image: url('images/background.png');
`

const StyledMainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  background-color: rgba(200, 255, 255, 0.5);
`

export default Layout
