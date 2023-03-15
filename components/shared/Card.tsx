import { ReactNode } from 'react'

interface CardProps {
  className?: string
  children?: ReactNode
}

const Card = ({ className, children }: CardProps) => (
  <div className={['rounded-3xl bg-[#002948]', className].join(' ')}>
    {children}
  </div>
)

export default Card
