import { Box, CircularProgress, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import CardItem from '../../components/card/card'
import useInfiniteScroll from '../../hooks/useInfinitieScroll'
import { Backdrop, FlexColumnCenter, JustifyCenter } from '../../models/boxes'
import { fetchBeer } from '../../redux/actions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Home = () => {
  const [count, setCount] = useState<number>(18)
  const dispatch = useAppDispatch()
  const { beer, status } = useAppSelector((state) => state.beer)
  const { setIsFetching } = useInfiniteScroll(moreData)
  const [search, setSearch] = useState<string>('')
  useEffect(() => {
    dispatch(fetchBeer(count))
  }, [count])

  function moreData() {
    setCount((prev) => (prev + 9 > 80 ? 80 : prev + 9))
    setIsFetching(false)
  }

  return (
    <FlexColumnCenter position={'relative'}>
      <Box paddingTop={'50px'}>
        <TextField
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <JustifyCenter
        gap={'10px'}
        flexWrap={'wrap'}
        width={'100%'}
        padding={'50px 0'}
      >
        {beer
          ?.filter((item) =>
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          ?.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
      </JustifyCenter>
      {status === 'loading' && (
        <Backdrop>
          <CircularProgress />
        </Backdrop>
      )}
    </FlexColumnCenter>
  )
}

export default Home
