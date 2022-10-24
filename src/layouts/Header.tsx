import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Outlet, useNavigate } from 'react-router-dom'
import CustomizedBadges from '../components/badge/badge'
import { Flex, SpaceBetween } from '../models/boxes'

function Header() {
  const navigate = useNavigate()
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box width={'100%'}>
              <Tooltip title="">
                <SpaceBetween>
                  <Flex>
                    <Button
                      onClick={() => navigate('/')}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Home
                    </Button>
                  </Flex>
                  <CustomizedBadges />
                </SpaceBetween>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}
export default Header
