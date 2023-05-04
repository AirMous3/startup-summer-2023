import { useNavigate } from 'react-router-dom'

import favoriteBackgroundImage from '@/shared/assets/images/favorite-background-image.png'

import * as S from './components'

export const Favorite = () => {
  const navigate = useNavigate()

  const handleNavigateToSearchPage = () => {
    return navigate('/search')
  }
  return (
    <S.Container>
      <div>
        <S.BackgroundImage src={favoriteBackgroundImage} alt={'background-image'} />
      </div>
      <S.Title>Упс, здесь еще ничего нет!</S.Title>
      <S.SearchButton onClick={handleNavigateToSearchPage}>Поиск Вакансий</S.SearchButton>
    </S.Container>
  )
}
