export function isFutureUTC(dateString: string): boolean {
  const date = new Date(dateString)
  return date.getTime() > Date.now()
}

export function formatTimeRemaining(milliseconds: number): string {
  if (milliseconds <= 0) return ''

  const date = new Date(milliseconds)

  // For locales that use HH:mm:ss format (like most of Europe)
  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date)
}

export function formatDate(d: unknown) {
  if (typeof d !== 'string') return '—'
  return new Date(d).toLocaleString()
}

export function formatShortDate(d: unknown) {
  if (typeof d !== 'string') return '—'
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  }).format(new Date(d))
}

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
