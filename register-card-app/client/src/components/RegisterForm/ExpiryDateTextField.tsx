import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'

const limit = (val: string, max: string): string => {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01'

      //this can happen when user paste number
    } else if (val > max) {
      val = max
    }
  }

  return val
}

const cardExpiry = (val: string): string => {
  let month = limit(val.substring(0, 2), '12')
  let year = val.substring(2, 4)

  return month + (year.length ? '/' + year : '')
}
interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}
const ExpiryDateNumberFormatCustom: React.FC<NumberFormatCustomProps> = ({
  inputRef,
  onChange,
  name,
  ...otherProps
}: NumberFormatCustomProps): JSX.Element => (
  <NumberFormat
    {...otherProps}
    getInputRef={inputRef}
    onValueChange={(values): void => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      })
    }}
    format={cardExpiry} 
  />
)

interface ExpiryDateTextFieldProps {
  expiryDate: string
  onExpiryDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ExpiryDateTextField: React.FC<ExpiryDateTextFieldProps> = ({
  expiryDate,
  onExpiryDateChange,
}: ExpiryDateTextFieldProps) => {
  return (
    <TextField
      required
      fullWidth
      id="expiryDate"
      label="Expiry Date"
      value={expiryDate}
      onChange={onExpiryDateChange}
      name="expiryDate"
      InputProps={{
        inputComponent: ExpiryDateNumberFormatCustom as any,
      }}
      variant="outlined"
      placeholder="Enter Credit Card Number"
    />
  )
}

export default ExpiryDateTextField
