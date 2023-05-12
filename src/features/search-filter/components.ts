import styled from 'styled-components/macro'

import { Button } from '@/shared'
import crossIcon from '@/shared/assets/icons/cross-icon.svg'

export const Container = styled.div`
  border: 1px solid #eaebed;
  border-radius: 12px;
  max-width: 315px;
  min-width: 315px;
  background: ${({ theme }) => theme.colors.background.white};
  padding: 20px;
  box-sizing: border-box;
  margin-right: 28px;
  max-height: 360px;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`
export const ResetButton = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.grey};
  display: flex;
  align-items: end;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    background-image: url(${crossIcon});
    width: 16px;
    height: 16px;
    background-size: 16px;
    background-repeat: no-repeat;
    margin-left: 5px;
  }
`
export const SubtitleWrapper = styled.div`
  margin-bottom: 20px;
`
export const Subtitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`
export const BranchSelect = styled.select`
  margin-top: 8px;
  width: 100%;
  min-height: 42px;
  max-height: 42px;
  box-sizing: border-box;
  border: 1px solid #d5d6dc;
  border-radius: 8px;
  padding: 11px 18px 11px 12px;
  cursor: pointer;
  outline: none;
`
export const PriceInput = styled.input`
  margin-top: 8px;
  width: 100%;
  min-height: 42px;
  max-height: 42px;
  box-sizing: border-box;
  border: 1px solid #d5d6dc;
  border-radius: 8px;
  padding: 11px 18px 11px 12px;
  cursor: pointer;
`
export const AcceptButton = styled(Button)`
  min-height: 40px;
  max-height: 40px;
  width: 100%;
  margin-bottom: 20px;
`
