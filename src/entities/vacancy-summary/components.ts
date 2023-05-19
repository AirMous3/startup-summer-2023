import styled from 'styled-components/macro'

import activeStar from '@/shared/assets/icons/active-start.svg'
import locationIcon from '@/shared/assets/icons/location-icon.svg'
import starIcon from '@/shared/assets/icons/star-icon.svg'

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.grey};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background.white};
  padding: 24px;
  box-sizing: border-box;
  margin-top: 16px;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.blue};
  cursor: pointer;
  max-width: 630px;
`
export const Star = styled.div<{ isActive: boolean }>`
  background-image: url(${({ isActive }) => (isActive ? activeStar : starIcon)});
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  background-size: contain;
  cursor: pointer;
`
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12.5px;
  margin-bottom: 15px;
`
export const Salary = styled.span`
  font-weight: 600;
  font-size: 16px;

  &:after {
    content: '•';
    margin-left: 12px;
    margin-right: 12px;
    color: #7b7c88;
  }
`
export const Schedule = styled.span`
  font-size: 16px;
`
export const Location = styled.div`
  font-size: 16px;
  display: flex;

  &:before {
    content: '';
    display: inline-block;
    background-image: url(${locationIcon});
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    background-size: contain;
    margin-right: 8px;
  }
`
