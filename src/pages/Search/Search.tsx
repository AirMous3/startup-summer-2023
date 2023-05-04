import { SearchFilter } from '@/features'

import * as S from './components'

export const Search = () => {
  return (
    <S.Container>
      <SearchFilter />

      <S.InputWrapper>
        <S.SearchInput placeholder="Введите название вакансии" />
        <S.SearchButton>Поиск</S.SearchButton>
      </S.InputWrapper>
    </S.Container>
  )
}
