import { ComponentProps, ReactNode } from 'react'
import Header from '@/components/shared/Header'
import UpdateAlert from '../UpdateAlert'
import Footer from '../Footer'

interface LayoutDefaultProps extends ComponentProps<'div'> {
  children: ReactNode
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header />
      <UpdateAlert />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutDefault
