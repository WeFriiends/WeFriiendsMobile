import { useState } from 'react'

const useEyeIcon = () => {
  const [isVisible, setVisible] = useState(false)

  const icon = isVisible ? 'eye' : 'eye-off'

  const onSetVisible = () => {
    setVisible(!isVisible)
  }

  return {
    isVisible,
    onSetVisible,
    icon,
  }
}

export default useEyeIcon
