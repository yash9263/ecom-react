import styled from 'styled-components'
import Box from './Box'
import type { Globals, BoxProps } from '../types/utils-types'

interface ImageContProps extends BoxProps {
  className?: string
  src: string
  alt?: string
  loading?: 'eager' | 'lazy'
  aspectRatio?: Globals | number | string
  width?: string | number
  height?: string | number
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
  ...delegated
}: ImageContProps) => {
  return (
    <ImgWrapper className={className} aspectRatio={aspectRatio} objectFit={objectFit} {...delegated}>
      <img className="si-img" src={src} alt={alt} loading={loading} width={width} height={height} />
    </ImgWrapper>
  )
}

export const ImgWrapper = styled(Box)<{
  aspectRatio?: number | string
  objectFit?: Globals | 'cover' | 'fill' | 'contain' | 'none' | 'scale-down'
  height?: string | number
}>`
  img {
    width: 100%;
    height: ${(p) => p.height || 'auto'};
    aspect-ratio: ${(p) => p.aspectRatio};
    object-fit: ${(p) => p.objectFit};
  }
`

export default Image
