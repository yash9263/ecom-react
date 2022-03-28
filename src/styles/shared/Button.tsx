import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, ...delegated }: ButtonProps) {
  return (
    <ButtonWrapper className={className} {...delegated}>
      {children}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button``
