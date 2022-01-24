export const spaceToCssVar = (space: number) => {
  const spaceInt = Math.floor(space);

  const isFloat = space === spaceInt;

  return isFloat
    ? `var(--crafter-space-${spaceInt}\.5)` /* eslint-disable-line */
    : `var(--crafter-space-${space})`;
};
