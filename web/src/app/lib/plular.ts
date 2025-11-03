export const pluralize = (
  num: number,
  singular: string,
  pluralGen: string,
  pluralMany: string,
): string => {
  const lastDigit = num % 10
  const lastTwoDigits = num % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return pluralMany

  switch (lastDigit) {
    case 1:
      return singular
    case 2:
    case 3:
    case 4:
      return pluralGen
    default:
      return pluralMany
  }
}
