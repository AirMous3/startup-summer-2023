import { Navigate, Route, Routes } from 'react-router-dom'

import { Favorite, Search } from '@/pages'
import { Container, Header } from '@/widgets'

export const App = () => {
  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path={'/search'} element={<Search />} />
          <Route path={'/favorite'} element={<Favorite />} />
          <Route path="*" element={<Navigate to="/search" replace />} />
        </Routes>
      </Container>
    </>
  )
}
