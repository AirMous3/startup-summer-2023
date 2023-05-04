import styled from 'styled-components/macro'

import { Button } from '@/shared'
import searchIcon from '@/shared/assets/icons/search-icon.svg'

export const Container = styled.section`
  display: flex;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eaebed;
  border-radius: 8px;
  max-height: 48px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.white};
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 12px;

  &:before {
    content: '';
    display: inline-block;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-size: contain;
  }
`
export const SearchInput = styled.input`
  margin-left: 10px;
  width: 100%;
  margin-right: 40px;
`
export const SearchButton = styled(Button)`
  max-width: 83px;
  min-width: 83px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 20px;
`
