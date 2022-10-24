import CardItem from '../../components/card/card'
import { Beer } from '../../interfaces/beer.interface'
import { JustifyCenter } from '../../models/boxes'
import { useAppSelector } from '../../redux/hooks'

const Checkout = () => {
  const { cart } = useAppSelector((state) => state.cart)
 
  return (
    <>
      <JustifyCenter
        gap={'10px'}
        flexWrap={'wrap'}
        width={'100%'}
        paddingTop={5}
      >
        {cart?.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </JustifyCenter>
    </>
  )
}

export default Checkout
