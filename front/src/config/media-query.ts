export const SIZE = {
  SM: '540px',
  MD: '720px',
  LG: '960px',
  XL: '1140px',
  XXL: '1320px',
};

export const DEVICE = {
  SM: `(min-width: ${SIZE.SM})`,
  MD: `(min-width: ${SIZE.MD})`,
  LG: `(min-width: ${SIZE.LG})`,
  XL: `(min-width: ${SIZE.XL})`,
  XXL: `(min-width: ${SIZE.XXL})`,
};

export const QUERY = {
  SM: `@media ${DEVICE.SM}`,
  MD: `@media ${DEVICE.MD}`,
  LG: `@media ${DEVICE.LG}`,
  XL: `@media ${DEVICE.XL}`,
  XXL: `@media ${DEVICE.XXL}`,
};
