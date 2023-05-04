interface navConfigInterface {
  path: string
  label: string
}

export const navConfig: navConfigInterface[] = [
  { path: '/search', label: 'Поиск Вакансий' },
  { path: '/favorite', label: 'Избранное' },
]
