export function hex2rgb(
  hex: `#${string}`,
  alpha?: number,
): `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha && (alpha < 0 || alpha > 1)) {
    alpha = 1
  }

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}
