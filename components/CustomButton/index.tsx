import styles from './Button.module.css'

interface CustomButtonProps {
  title: string
  onClick: any
  className?: string
  props?: any
}

const CustomButton = ({
  title,
  onClick,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      className={[styles.btn, className].join(' ')}
      onClick={() => onClick}
      {...props}
    >
      {title}
    </button>
  )
}

export default CustomButton
