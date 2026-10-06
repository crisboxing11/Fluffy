import { trackAdsClick } from './ads';

function hrefFromClickTarget(target: EventTarget | null): string | null {
  const element =
    target instanceof Element
      ? target
      : target instanceof Node
        ? target.parentElement
        : null;
  if (!element) return null;

  const clickable = element.closest('a[href], area[href]');
  if (!clickable) return null;

  if (clickable instanceof HTMLAnchorElement || clickable instanceof HTMLAreaElement) {
    return clickable.href || clickable.getAttribute('href');
  }

  return clickable.getAttribute('href');
}

/**
 * Capture-phase listener so one click is handled once, before navigation,
 * without calling preventDefault.
 */
export function installAdsClickListener(doc: Document = document): () => void {
  const onClick = (event: Event) => {
    if (!(event instanceof MouseEvent)) return;
    trackAdsClick(event, hrefFromClickTarget(event.target));
  };

  doc.addEventListener('click', onClick, true);
  return () => {
    doc.removeEventListener('click', onClick, true);
  };
}
