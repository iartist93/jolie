export default function isDescendent<T extends HTMLElement = HTMLElement>(
  root: T,
  target: HTMLElement
): boolean {
  let targetParentNode = target.parentNode;

  while (targetParentNode) {
    if (root.contains(targetParentNode)) {
      return true;
    } else {
      targetParentNode = (targetParentNode as HTMLElement).parentNode;
    }
  }

  return false;
}
