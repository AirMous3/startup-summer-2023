import { Vacancy } from '@/entities'
import { SearchFilter } from '@/features'

import * as S from './components'


export const Search = () => {
  return (
    <S.Container>
      <SearchFilter />

      <S.Wrapper>
        <S.InputWrapper>
          <S.SearchInput placeholder="Введите название вакансии" />
          <S.SearchButton>Поиск</S.SearchButton>
        </S.InputWrapper>

        <Vacancy />
        <Vacancy />
        <Vacancy />
        <Vacancy />
      </S.Wrapper>
    </S.Container>
  )
}
