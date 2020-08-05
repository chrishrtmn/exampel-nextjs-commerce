export const widths = {
  small: '640px',
  medium: '980px',
  large: '1200px',
  xlarge: '1440px',
}

export const breakpoints = {
  small: `(min-width: ${widths.small})`,
  medium: `(min-width: ${widths.medium})`,
  large: `(min-width: ${widths.large})`,
  xlarge: `(min-width: ${widths.xlarge})`,
}

export const products = [
  {
    id: 1,
    color: 'Amber',
    filename: 'sofa-amber',
    price: '1250.00',
    discount: 25,
  },
  {
    id: 2,
    color: 'Charcoal',
    filename: 'sofa-charcoal',
    price: '1125.00',
    discount: 0,
  },
  {
    id: 3,
    color: 'Red',
    filename: 'sofa-red',
    price: '1575.00',
    discount: 50,
  },
]
