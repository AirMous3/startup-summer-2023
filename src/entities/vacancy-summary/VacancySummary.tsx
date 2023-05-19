import { useState } from 'react'

import * as S from './components'

interface VacancyPropsInterface {
  vacancyTitle: string
  typeOfWork: string
  currency: string
  townTitle: string
  paymentFrom: number
}

export const VacancySummary = ({
  vacancyTitle,
  townTitle,
  currency,
  typeOfWork,
  paymentFrom,
}: VacancyPropsInterface) => {
  const [active, setActive] = useState(false)

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{vacancyTitle}</S.Title>
        <S.Star onClick={() => setActive(!active)} isActive={active} />
      </S.TitleWrapper>

      <S.InfoWrapper>
        <S.Salary>
          з/п от {paymentFrom} {currency}
        </S.Salary>
        <S.Schedule>{typeOfWork}</S.Schedule>
      </S.InfoWrapper>

      <S.Location>{townTitle}</S.Location>
    </S.Container>
  )
}
