import { useAppSelector } from '@/app/store'
import { VacancySummary } from '@/entities'
import { Loader } from '@/shared'

export const VacanciesList = () => {
  const vacancies = useAppSelector((state) => state.vacancies.data)
  const isLoading = useAppSelector((state) => state.vacancies.status === 'loading')

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        vacancies.map(
          ({ payment_from, profession, town, type_of_work, currency, id }) => (
            <VacancySummary
              key={id}
              vacancyTitle={profession}
              townTitle={town.title}
              typeOfWork={type_of_work.title}
              currency={currency}
              paymentFrom={payment_from}
            />
          )
        )
      )}
    </>
  )
}
