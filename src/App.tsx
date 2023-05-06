import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components/macro'

import { useAppDispatch } from '@/app/store'
import { login, loginSelector } from '@/features'
import { Favorite, Search } from '@/pages'
import { Container } from '@/shared'
import { Header } from '@/widgets'


const PagesWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.main};
  min-height: calc(100vh - 124px);
  padding-top: 40px;
`

export const App = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector(loginSelector)

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(login())
    }
  }, [dispatch, isLoggedIn])

  return (
    <>
      <Container>
        <Header />
      </Container>

      <PagesWrapper>
        <Container>
          <Routes>
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes>
        </Container>
      </PagesWrapper>
    </>
  )
}
