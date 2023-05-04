import styled from 'styled-components/macro'

export const Button = styled.button`
  padding: 0;
  border: none;
  background: ${({ theme }) => theme.colors.background.blue};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.white};
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  box-sizing: border-box;

  &:active {
    transform: scale(0.95);
  }
`
