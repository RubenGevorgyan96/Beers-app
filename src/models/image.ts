import styled from '@emotion/styled'

interface IImageProps {
  width: string
  height: string
  objectFit: "contain" | "cover"
}

export const Image = styled('img')(
  ({ height, objectFit, width }: IImageProps) => ({
    height,
    objectFit,
    width
  })
)
