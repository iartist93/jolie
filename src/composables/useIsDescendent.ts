/**
 *
 * Check if the `target` is a child/descendent if `root`
 *
 * @param root the top most element that containt target
 * @param target the element we're checking if it's descendent of root
 *
 * @returns : boolean
 *
 */
export function useIsDescendent<T extends HTMLElement = HTMLElement>(
  root: T,
  target: HTMLElement
): boolean {
  let targetParentNode = target.parentNode;

  if (root === target) return true;

  while (targetParentNode) {
    if (root.contains(targetParentNode)) {
      return true;
    } else {
      targetParentNode = (targetParentNode as HTMLElement).parentNode;
    }
  }

  return false;
}
