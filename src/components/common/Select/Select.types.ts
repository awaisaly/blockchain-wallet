interface SelectOptionType {
  value: string
  label: string
}

interface SelectProps {
  title?: string
  options: SelectOptionType[]
  containerClass?: string
}

export type SelectType = SelectProps & React.InputHTMLAttributes<HTMLSelectElement>
