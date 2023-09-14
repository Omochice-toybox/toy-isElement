export function isElement<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElement,
  tagName: T,
): element is HTMLElementTagNameMap[T];
export function isElement<T extends keyof SVGElementTagNameMap>(
  element: Element,
  tagName: T,
): element is SVGElementTagNameMap[T];
export function isElement<T extends keyof MathMLElementTagNameMap>(
  element: Element,
  tagName: T,
): element is MathMLElementTagNameMap[T];
export function isElement(
  element: Element,
  tagName: string,
): element is Element {
  return element.tagName.toLowerCase() === tagName.toLowerCase();
}
