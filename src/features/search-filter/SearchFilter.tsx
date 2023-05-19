import { ChangeEvent } from 'react'

import { useAppDispatch } from '@/app/store'
import { changeFilters } from '@/features'

import * as S from './components'

interface SearchFilterInterface {
  catalogue: { title_rus: string }[]
  category: string
  price: { from: string; to: string }
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void
  onChangePriceFrom: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePriceTo: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchFilter = ({
  onChangeCategory,
  onChangePriceFrom,
  onChangePriceTo,
  category,
  catalogue,
  price,
}: SearchFilterInterface) => {
  const dispatch = useAppDispatch()
  const handleChangeFilters = () => {
    dispatch(changeFilters({ price: { from: +price.from, to: +price.to }, category }))
  }
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Фильтры</S.Title>

        <S.ResetButton>Сбросить всё</S.ResetButton>
      </S.TitleWrapper>

      <S.SubtitleWrapper>
        <S.Subtitle>Отрасль</S.Subtitle>

        <S.BranchSelect
          placeholder="Выберите отрасль"
          value={category}
          onChange={(event) => onChangeCategory(event)}
        >
          <option value="" disabled>
            Выберите отрасль
          </option>
          {catalogue.map(({ title_rus }) => (
            <option key={title_rus} value={title_rus}>
              {title_rus}
            </option>
          ))}
        </S.BranchSelect>
      </S.SubtitleWrapper>

      <S.SubtitleWrapper>
        <S.Subtitle>Оклад</S.Subtitle>

        <S.PriceInput
          placeholder="От"
          type="number"
          value={price.from}
          onChange={(event) => onChangePriceFrom(event)}
        />

        <S.PriceInput
          placeholder="До"
          type="number"
          value={price.to}
          onChange={(event) => onChangePriceTo(event)}
        />
      </S.SubtitleWrapper>

      <S.AcceptButton onClick={handleChangeFilters}>Применить</S.AcceptButton>
    </S.Container>
  )
}
