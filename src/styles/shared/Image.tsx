import styled from 'styled-components'
import Box from './Box'
import type { Globals, BoxProps } from '../types/utils-types'

interface ImageContProps extends BoxProps {
  className?: string
  src: string
  alt?: string
  loading?: 'eager' | 'lazy'
  aspectRatio?: Globals | number | string
  width?: string
  height?: string
  objectFit?: Globals | 'cover' | 'fill' | 'contain' | 'none' | 'scale-down'
}

const Image = ({
  className,
  src,
  alt,
  loading,
  aspectRatio,
  objectFit,
  width,
  height,
  ...props
}: ImageContProps) => {
  return (
    <ImgWrapper className={className} aspectRatio={aspectRatio} objectFit={objectFit} {...props}>
      <img src={src} alt={alt} loading={loading} width={width} height={height} />
    </ImgWrapper>
  )
}

export const ImgWrapper = styled(Box)<{
  aspectRatio?: number | string
  objectFit?: Globals | 'cover' | 'fill' | 'contain' | 'none' | 'scale-down'
}>`
  img {
    width: 100%;
    height: auto;
    aspect-ratio: ${(p) => p.aspectRatio};
    object-fit: ${(p) => p.objectFit};
  }
`

export default Image
