// Minimal, vendor-neutral event layer. No analytics tool is installed today:
// events are pushed to `window.dataLayer` only if a tag manager defines it,
// otherwise they are ignored. Never include personal data in event params.

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...params });
}

/**
 * Delegated listener for elements annotated with `data-track="event_name"`
 * (and optional `data-track-label`). Installed once by the layout.
 */
export function installClickTracking() {
  const onClick = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
    if (!el) return;
    track(el.dataset.track!, {
      label: el.dataset.trackLabel ?? el.textContent?.trim().slice(0, 60) ?? "",
      page: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
