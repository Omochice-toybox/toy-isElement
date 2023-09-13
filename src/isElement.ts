export function isElement<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElement,
  tagName: T,
): element is HTMLElementTagNameMap[T] {
  return element.tagName.toLowerCase() === tagName.toLowerCase();
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("sample", () => {
    it("should return true", () => {
      // ensure that function return true if element's tagName matches received tagName
      const el = document.createElement("div") as HTMLElement;
      expect(el instanceof HTMLDivElement).toBe(true);
      expect(isElement(el, "div")).toBe(true);
    });

    it("should return false", () => {
      // ensure that function return false if element's tagName does not match received tagName
      const el = document.createElement("div") as HTMLElement;
      expect(el instanceof HTMLAnchorElement).toBe(false);
      expect(isElement(el, "a")).toBe(false);
    });

    it("should return true even if it in iframe element", () => {
      // ensure that iframe.contentDocument exists
      const el = document.createElement("iframe");
      document.body.appendChild(el);
      // biome-ignore lint/style/noNonNullAssertion: for testing
      const doc = el.contentDocument!;
      expect(doc).toBeTruthy();

      // ensure that div in iframe is not instanceof window.HTMLDivElement
      const div = doc.createElement("div");
      expect(div instanceof HTMLDivElement).toBe(false);

      // ensure that div in iframe is instanceof its defaultView.HTMLDivElement
      doc.body.appendChild(div);
      // biome-ignore lint/style/noNonNullAssertion: for testing
      const view = div.ownerDocument.defaultView!;
      expect(view).toBeTruthy();
      expect(div instanceof view.HTMLDivElement).toBe(true);

      // ensure that isElement return true even if element is in iframe
      expect(isElement(div, "div")).toBe(true);
    });
  });
}
