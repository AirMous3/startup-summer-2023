import * as S from './components'

export const SearchFilter = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Фильтры</S.Title>

        <S.ResetButton>Сбросить всё</S.ResetButton>
      </S.TitleWrapper>

      <S.SubtitleWrapper>
        <S.Subtitle>Отрасль</S.Subtitle>

        <S.BranchInput placeholder="Выберите отрасль" type="text" />
      </S.SubtitleWrapper>

      <S.SubtitleWrapper>
        <S.Subtitle>Оклад</S.Subtitle>

        <S.PriceInput placeholder="От" type="number" />
        <S.PriceInput placeholder="До" type="number" />
      </S.SubtitleWrapper>

      <S.AcceptButton>Применить</S.AcceptButton>
    </S.Container>
  )
}
