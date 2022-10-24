import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex, FlexAlignCenter } from '../../models/boxes'
import { Image } from '../../models/image'
import { fetchSingleBeer } from '../../redux/actions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { add } from '../../redux/shoppingCartSlice'

const SingleBeer = () => {
  const { currentBeer } = useAppSelector((state) => state.beer)
  const [count, setCount] = useState(1)
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchSingleBeer(id))
  }, [id])

  return (
    <Flex mt={5}>
      <Image
        src={currentBeer?.image_url}
        width="500px"
        height="500px"
        objectFit={'contain'}
      />
      <Box maxWidth={600} ml={2}>
        <Typography variant="h3">{currentBeer?.name}</Typography>
        <Typography>{currentBeer?.description}</Typography>
        <Flex mt={6} gap={3}>
          <Button
            variant={'contained'}
            onClick={() => dispatch(add({ ...currentBeer, count }))}
          >
            Add to card
          </Button>
        </Flex>
        <FlexAlignCenter mt={5}>
          <Button
            onClick={() => setCount((prev) => (prev <= 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          <Typography>{count}</Typography>
          <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
        </FlexAlignCenter>
      </Box>
    </Flex>
  )
}

export default SingleBeer
