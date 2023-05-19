import { ChangeEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { VacanciesList, getVacancies } from '@/entities'
import { SearchFilter } from '@/features'
import { api } from '@/shared'

import * as S from './components'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [catalogue, setCatalogue] = useState([])
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState({ from: '', to: '' })
  const [vacancyTitle, setVacancyTitle] = useState('')

  const filteredPrice = useAppSelector((state) => state.filter.price)

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }
  const handleChangePriceFrom = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, from: event.currentTarget.value })
  }
  const handleChangePriceTo = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, to: event.currentTarget.value })
  }
  const handleChangeVacancyTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setVacancyTitle(event.currentTarget.value)
  }

  const handleSearchVacancies = () => {
    dispatch(
      getVacancies({
        keyword: vacancyTitle,
        paymentTo: filteredPrice.to,
        paymentFrom: filteredPrice.from,
      })
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getCatalogues()
      setCatalogue(res)
    }
    fetchData()
  }, [])

  return (
    <S.Container>
      <SearchFilter
        catalogue={catalogue}
        price={price}
        category={category}
        onChangeCategory={handleChangeCategory}
        onChangePriceFrom={handleChangePriceFrom}
        onChangePriceTo={handleChangePriceTo}
      />

      <S.Wrapper>
        <S.InputWrapper>
          <S.SearchInput
            placeholder="Введите название вакансии"
            value={vacancyTitle}
            onChange={handleChangeVacancyTitle}
          />

          <S.SearchButton onClick={handleSearchVacancies}>Поиск</S.SearchButton>
        </S.InputWrapper>

        <VacanciesList />
      </S.Wrapper>
    </S.Container>
  )
}
