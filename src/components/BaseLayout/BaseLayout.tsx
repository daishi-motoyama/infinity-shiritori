import { Box, Container } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
type Props = {
  children: ReactNode
  footer?: ReactElement
  header?: ReactElement
}

export const BaseLayout = ({ children, footer, header }: Props) => {
  return (
    <Container
      sx={{
        '&': {
          height: '100dvh',
        },
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows:
          (header ? 'auto ' : '') + '1fr' + (footer ? ' auto' : ''),
        height: '100vh',
      }}
    >
      {header}
      <Box>{children}</Box>
      {footer}
    </Container>
  )
}

type ContentProps = {
  children: ReactNode
  pb?: 0 | 3
  pl?: 0 | 2.5
  pr?: 0 | 2.5
  pt?: 0 | 3
}

const Content = ({
  children,
  pb = 3,
  pl = 2.5,
  pr = 2.5,
  pt = 3,
}: ContentProps) => {
  return (
    <Box pb={pb} pl={pl} pr={pr} pt={pt}>
      {children}
    </Box>
  )
}

BaseLayout.Content = Content
