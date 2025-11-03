export const getRandomGradient = (seed: number = 0, lightness: number = 50) => {
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000
    return (x - Math.floor(x)) * (max - min) + min
  }

  const h1 = random(0, 360)
  const h2 = (h1 + 30 + random(-10, 10)) % 360
  const h3 = (h2 + 30 + random(-10, 10)) % 360

  return `linear-gradient(135deg, hsl(${h1}, 70%, ${lightness}%), hsl(${h2}, 70%, ${lightness}%), hsl(${h3}, 70%, ${lightness}%))`
}
