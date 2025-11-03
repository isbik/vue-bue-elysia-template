import { twMerge, type ClassNameValue } from 'tailwind-merge'

type ClassValue = ClassNameValue | Record<string, boolean> | ClassValue[] | unknown

export function cn(...classes: ClassValue[]): string {
  const flatten = (c: ClassValue[]): string[] =>
    c.flatMap((v) =>
      !v
        ? []
        : typeof v === 'string'
          ? [v]
          : Array.isArray(v)
            ? flatten(v)
            : Object.entries(v)
                .filter(([, val]) => val)
                .map(([key]) => key),
    )

  return twMerge(flatten(classes).join(' '))
}
