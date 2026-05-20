import { useState } from 'react'

const PHOTO_SOURCES = [
  encodeURI('/Coperate pics .png'),
  encodeURI('/Coperate pics.png'),
  '/Coperate_pics.png',
]

export default function ProfileImage({ alt, className }) {
  const [index, setIndex] = useState(0)

  const handleError = () => {
    setIndex((i) => (i < PHOTO_SOURCES.length - 1 ? i + 1 : i))
  }

  return (
    <img
      src={PHOTO_SOURCES[index]}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}
