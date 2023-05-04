import styled from 'styled-components/macro'

import titleImage from '@/shared/assets/icons/title-icon.svg'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  max-height: 84px;
`
export const TitleWrapper = styled.div`
  margin-right: auto;
  display: flex;
`
export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.text.main};
`
export const Logo = styled.div`
  background-image: url(${titleImage});
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
`
export const Navbar = styled.nav`
  margin-right: auto;
`
export const NavItemsWrapper = styled.ul`
  display: flex;
`
export const NavItem = styled.li<{ active: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme, active }) => (active ? theme.colors.text.blue : 'inherit')};

  &:last-child {
    margin-left: 60px;
  }
`
