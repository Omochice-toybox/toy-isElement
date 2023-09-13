export function isElement<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElement,
  tagName: T,
): element is HTMLElementTagNameMap[T] {
  return element.tagName.toLowerCase() === tagName.toLowerCase();
}


if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe("sample", () => {
    it("should return true", () => {
      const el = document.createElement("div") as HTMLElement
      expect(el instanceof HTMLDivElement).toBe(true)
      expect(isElement(el, "div")).toBe(true)
    })
    it("should return false", () => {
      const el = document.createElement("div") as HTMLElement
      expect(el instanceof HTMLAnchorElement).toBe(false)
      expect(isElement(el, "a")).toBe(false)
    })
  })
}
