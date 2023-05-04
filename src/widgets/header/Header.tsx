import { NavLink, useLocation } from 'react-router-dom'

import { navConfig } from '@/widgets/header/config'

import * as S from './components'

export const Header = () => {
  const { pathname } = useLocation()
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Logo />

        <S.Title>Jobored</S.Title>
      </S.TitleWrapper>

      <S.Navbar>
        <S.NavItemsWrapper>
          {navConfig.map(({ label, path }) => (
            <S.NavItem key={label} active={pathname.includes(path)}>
              <NavLink to={path}>{label}</NavLink>
            </S.NavItem>
          ))}
        </S.NavItemsWrapper>
      </S.Navbar>
    </S.Container>
  )
}
