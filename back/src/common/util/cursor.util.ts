export const toCursorHash = (value: number): string =>
  Buffer.from(`${value}`).toString('base64');

export const fromCursorHash = (value: string): number =>
  Number(Buffer.from(value, 'base64').toString('ascii'));

export default { toCursorHash, fromCursorHash };
