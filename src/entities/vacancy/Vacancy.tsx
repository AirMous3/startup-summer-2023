import * as S from './components'

export const Vacancy = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Менеджер-Дизайнер</S.Title>
        <S.Star />
      </S.TitleWrapper>

      <S.InfoWrapper>
        <S.Salary>з/п от 80000 rub</S.Salary>
        <S.Schedule>Полный рабочий день</S.Schedule>
      </S.InfoWrapper>

      <S.Location>Самара</S.Location>
    </S.Container>
  )
}
