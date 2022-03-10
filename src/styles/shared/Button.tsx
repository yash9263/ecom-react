import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: ReactNode
  className?: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <ButtonWrapper className={className} {...props}>
      {children}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button``
