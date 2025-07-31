export function formatSecondsToMinutes(timeInSeconds: number) {
  const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
  const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, '0');
  
  return `${minutes}:${seconds}`
}
