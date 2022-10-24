import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Beer } from '../../interfaces/beer.interface'
import { useAppDispatch } from '../../redux/hooks'
import { FlexAlignCenter } from '../../models/boxes'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { add, remove } from '../../redux/shoppingCartSlice'
import { Image } from '../../models/image'

export default function CardItem({ item }: { item: Beer }) {
  const [count, setCount] = useState(item.count || 1)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const removeOrDecr = (beer: Beer, allCount?: number) => {
    setCount((prev) => (prev <= 1 ? 1 : prev - 1))
    dispatch(remove({ beer, type: pathname, count: allCount || 1 }))
  }
  const addOrIncr = (beer: Beer) => {
    if (pathname === '/checkout') {
      setCount((prev) => prev + 1)
      dispatch(add({ ...beer, count: 1 }))
    } else {
      setCount((prev) => prev + 1)
    }
  }

  return (
    <>
      <Card sx={{ width: 330, height: 450, position: 'relative' }}>
        <Image
          src={item.image_url}
          height="200"
          width="100%"
          objectFit='contain'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            overflow={'hidden'}
            width={'100%'}
            height={'30px'}
            whiteSpace={'pre-wrap'}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            overflow={'hidden'}
            width={'100%'}
            height={'60px'}
            whiteSpace={'pre-wrap'}
          >
            {item.description}
          </Typography>
        </CardContent>
        <FlexAlignCenter>
          <Button onClick={() => removeOrDecr(item)}>-</Button>
          <Typography>{count}</Typography>
          <Button onClick={() => addOrIncr(item)}>+</Button>
        </FlexAlignCenter>
        <CardActions sx={{ position: 'absolute', bottom: 0 }}>
          {pathname !== '/checkout' ? (
            <Button
              size="small"
              onClick={() => dispatch(add({ ...item, count: count }))}
            >
              add
            </Button>
          ) : (
            <Button size="small" onClick={() => removeOrDecr(item, item.count)}>
              remove
            </Button>
          )}
          <Button size="small" onClick={() => navigate(`/beer/${item.id}`)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
