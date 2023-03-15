import styles from './Divider.module.css'

interface DividerProps {
  className?: string
  children?: any
}

const Divider = ({ className, children }: DividerProps) => (
  <div className={[styles.divider, className].join(' ')}>{children}</div>
)

export default Divider
