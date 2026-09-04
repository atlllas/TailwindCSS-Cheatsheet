import type { ReactNode } from "react";

const ICON_PATHS: Record<string, ReactNode> = {
  "changed-since-v3": (
    <>
      <path d="M8 1.5L15 13.5H1Z" />
      <line x1="8" y1="6" x2="8" y2="9.5" />
      <circle cx="8" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  layout: (
    <>
      <rect x="2" y="2" width="12" height="12" rx="1.5" />
      <line x1="6" y1="2" x2="6" y2="14" />
    </>
  ),
  "positioning-display": (
    <>
      <rect x="2" y="2" width="12" height="12" rx="1.5" />
      <line x1="6" y1="2" x2="6" y2="14" />
    </>
  ),
  "flexbox-grid": (
    <>
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </>
  ),
  tables: (
    <>
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </>
  ),
  spacing: (
    <>
      <rect x="2" y="2" width="12" height="12" rx="1.5" strokeDasharray="2 2" />
      <rect x="5" y="5" width="6" height="6" rx="1" />
    </>
  ),
  "spacing-sizing": (
    <>
      <rect x="2" y="2" width="12" height="12" rx="1.5" strokeDasharray="2 2" />
      <rect x="5" y="5" width="6" height="6" rx="1" />
    </>
  ),
  sizing: <path d="M3 13L13 3M3 13H6M3 13V10M13 3H10M13 3V6" />,
  typography: (
    <>
      <line x1="3" y1="4" x2="13" y2="4" />
      <line x1="3" y1="8" x2="13" y2="8" />
      <line x1="3" y1="12" x2="9" y2="12" />
    </>
  ),
  backgrounds: <rect x="2" y="2" width="12" height="12" rx="2" fillOpacity="0.18" fill="currentColor" />,
  "backgrounds-borders": (
    <rect x="2" y="2" width="12" height="12" rx="2" fillOpacity="0.18" fill="currentColor" />
  ),
  borders: <rect x="2.5" y="2.5" width="11" height="11" rx="2" strokeDasharray="2.5 2.5" />,
  effects: <path d="M8 2L9.2 6.8L14 8L9.2 9.2L8 14L6.8 9.2L2 8L6.8 6.8Z" />,
  "effects-transitions": <path d="M8 2L9.2 6.8L14 8L9.2 9.2L8 14L6.8 9.2L2 8L6.8 6.8Z" />,
  filters: <path d="M2 3H14L9.5 8.5V13L6.5 11.5V8.5L2 3Z" />,
  "transitions-animation": (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M6.5 5.5L10.5 8L6.5 10.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  transforms: (
    <>
      <path d="M12.5 6A4.5 4.5 0 104 8" />
      <path d="M12.5 3V6H9.5" />
    </>
  ),
  interactivity: <path d="M4 2L4 13L7 10.5L9 14L10.5 13L8.5 9.5L12 9Z" />,
  "transforms-interactivity": <path d="M4 2L4 13L7 10.5L9 14L10.5 13L8.5 9.5L12 9Z" />,
  svg: (
    <>
      <circle cx="5" cy="10" r="3" />
      <path d="M11 4L14.5 11H7.5Z" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="8" cy="8" r="6" />
      <circle cx="8" cy="5.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8 7.5V11M5.5 8.5H10.5M6 13L8 11L10 13" />
    </>
  ),
  responsive: (
    <>
      <rect x="2" y="3" width="12" height="8" rx="1" />
      <line x1="6" y1="13" x2="10" y2="13" />
      <line x1="8" y1="11" x2="8" y2="13" />
    </>
  ),
  "container-queries": (
    <>
      <path d="M5 2H3V14H5" />
      <path d="M11 2H13V14H11" />
    </>
  ),
  "state-variants": (
    <>
      <rect x="2" y="6" width="12" height="4" rx="2" />
      <circle cx="10" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  "states-responsive": (
    <>
      <rect x="2" y="6" width="12" height="4" rx="2" />
      <circle cx="10" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function CategoryIcon({
  slug,
  className = "h-3.5 w-3.5",
}: {
  slug: string;
  className?: string;
}) {
  const path = ICON_PATHS[slug];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
