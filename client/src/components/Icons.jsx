// Line icons drawn in currentColor so they pick up the brand orange via CSS.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const paths = {
  wifi: <><path d="M2 8.5a15 15 0 0 1 20 0" /><path d="M5 12a10.5 10.5 0 0 1 14 0" /><path d="M8.5 15.5a5.5 5.5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" /></>,
  ac: <><rect x="2" y="5" width="20" height="8" rx="1" /><path d="M5 10h14" /><path d="M7 16l-1 3M12 16v3M17 16l1 3" /></>,
  meeting: <><path d="M4 10h16" /><path d="M6 10V7h12v3" /><path d="M7 10v9M17 10v9" /><path d="M9 5h6" /></>,
  cafe: <><path d="M6 3v7a2 2 0 0 0 2 2v9" /><path d="M10 3v7a2 2 0 0 1-2 2" /><path d="M16 21V3c2 1 3 3 3 6s-1 4-3 4" /></>,
  coffee: <><path d="M4 10h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M17 12h1.5a2.5 2.5 0 0 1 0 5H17" /><path d="M8 3v3M12 3v3" /></>,
  games: <><rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="7" cy="7" r="1" /><circle cx="17" cy="7" r="1" /><circle cx="7" cy="17" r="1" /><circle cx="17" cy="17" r="1" /><circle cx="12" cy="12" r="2" /></>,
  parking: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></>,
  power: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  security: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  pin: <><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  road: <><path d="M8 3L4 21M16 3l4 18" /><path d="M12 5v2M12 11v2M12 17v2" /></>,
  metro: <><rect x="5" y="3" width="14" height="13" rx="3" /><path d="M5 10h14" /><path d="M8 20l2-4M16 20l-2-4" /></>,
  building: <><path d="M4 21V7l8-4 8 4v14" /><path d="M9 21v-6h6v6" /><path d="M2 21h20" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
  menu: <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4z" />,
};

export function Icon({ name, size = 24, className = "" }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}
