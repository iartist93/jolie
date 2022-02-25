import {
  ComponentInstance,
  isRef,
  onBeforeUnmount,
  onMounted,
  ref,
  Ref,
} from '@vue/composition-api';

/**
 * Composable to add resize observer to an HTMLElement
 *
 * @param el : `ref` to the element to add the resize observer to
 * @param callback : the function to call when the element resized
 *
 * @returns : void
 */
export function useResizeObserver(
  el: Ref<HTMLElement | ComponentInstance>,
  callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void
): void {
  const observer = ref<ResizeObserver | null>(null);

  onMounted(() => {
    observer.value = new ResizeObserver(callback);
    observer.value.observe(
      el instanceof HTMLElement
        ? (el.value as HTMLElement)
        : (el.value as ComponentInstance).$el
    );
  });

  onBeforeUnmount(() => {
    observer.value?.unobserve(
      el instanceof HTMLElement
        ? (el.value as HTMLElement)
        : (el.value as ComponentInstance).$el
    );
  });
}
