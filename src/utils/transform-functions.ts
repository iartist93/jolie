export const spaceToCssVar = (space: number) => {
  const spaceInt = Math.floor(space);

  const isFloat = space === spaceInt;

  return isFloat
    ? `var(--jolie-space-${spaceInt}\.5)` /* eslint-disable-line */
    : `var(--jolie-space-${space})`;
};
