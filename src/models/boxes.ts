import styled from '@emotion/styled'
import { Box } from '@mui/system'

export const Flex = styled(Box)({
  display: 'flex',
})

export const FlexAlignCenter = styled(Flex)({
  alignItems: 'center',
})

export const JustifyCenter = styled(Flex)({
  justifyContent: 'center',
})

export const SpaceBetween = styled(FlexAlignCenter)({
  width: '100%',
  justifyContent: 'space-between',
})

export const FlexColumnCenter = styled(FlexAlignCenter)({
  flexDirection:'column',
})

export const Backdrop = styled(FlexAlignCenter)({
  position:'fixed',
  top:0,
  left:0,
  background:'rgba(0,0,0,0.5)',
  justifyContent:'center',
  width:'100%',
  height:'100vh'
})