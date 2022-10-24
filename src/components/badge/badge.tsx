import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import useLocalStorage from '../../hooks/useInfinitieScroll'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default function CustomizedBadges() {
  const navigate = useNavigate()
  const { cart } = useAppSelector((state) => state.cart)

  return (
    <IconButton aria-label="cart" onClick={() => navigate('/checkout')}>
      <StyledBadge
        badgeContent={
          (localStorage.cart && JSON.parse(localStorage.cart).length) ||
          cart.length
        }
        color="secondary"
      >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  )
}
