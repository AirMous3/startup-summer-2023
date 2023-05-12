import { ChangeEvent, useEffect, useState } from 'react'

import { Vacancy } from '@/entities'
import { SearchFilter } from '@/features'
import { api } from '@/shared/api'

import * as S from './components'


export const Search = () => {
  const [catalogue, setCatalogue] = useState([])
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState({ from: 0, to: 0 })

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }
  const handleChangePriceFrom = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, from: +event.currentTarget.value })
  }
  const handleChangePriceTo = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, to: +event.currentTarget.value })
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
