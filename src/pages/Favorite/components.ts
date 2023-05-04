import styled from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`
export const BackgroundImage = styled.img`
  width: 100%;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
`
export const SearchButton = styled.button`
  padding: 10px 24px;
  border: none;
  background: ${({ theme }) => theme.colors.background.lightBlue};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.darkBlue};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  &:active {
    transform: scale(0.95);
  }
`
