import styles from './Button.module.css'

interface BorderBtnProps {
  title: string
  onClick: any
  className?: string
  props?: any
}

const BorderBtn = ({ title, onClick, className, ...props }: BorderBtnProps) => {
  return (
    <button
      className={[styles.borderBtn, className].join(' ')}
      onClick={() => onClick}
      {...props}
    >
      {title}
    </button>
  )
}

export default BorderBtn
