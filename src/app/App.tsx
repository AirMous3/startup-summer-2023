import { Route, Routes } from 'react-router-dom'

import { Main } from '@/pages'
import { Container, Header } from '@/widgets'

export const App = () => {
  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/search'} element={<Main />} />
          <Route path={'/favorite'} element={<Main />} />
        </Routes>
      </Container>
    </>
  )
}
