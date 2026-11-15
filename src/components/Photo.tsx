import { useState } from 'react'

interface PhotoProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  /** CSS object-position, e.g. '85% 40%', to keep the subject's face in frame. */
  focus?: string
}

/** Image with a forest-gradient fallback if the photo fails to load. */
export default function Photo({ src, alt, className = '', loading = 'lazy', focus }: PhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-forest-600 via-forest-800 to-charcoal-900 ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      style={focus ? { objectPosition: focus } : undefined}
      className={className}
    />
  )
}
