# Invitation anniversaire de Nolan

Frontend-only birthday invitation website for Nolan's 5th birthday. The design follows a premium red-and-white superhero birthday direction with Google Stitch visual assets, playful motion, a real countdown, WhatsApp RSVP, calendar actions, and QR sharing.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/Radix local UI primitives
- Lucide icons
- qrcode.react
- Google Stitch design assets in `public/images/stitch`

## Scope

This project is intentionally frontend-only.

- No backend
- No database
- No API routes
- No authentication
- No admin dashboard
- No stored RSVP data

The RSVP action opens WhatsApp with a pre-filled message.

## Features

- Premium mobile-first invitation landing page
- Red-and-white superhero birthday visual identity
- Real countdown from `eventDateISO`
- WhatsApp RSVP CTA
- Google Maps itinerary link
- Google Calendar link
- Client-side `.ics` reminder download
- Copy/share invitation link
- WhatsApp share link
- QR code for the invitation URL
- Responsive sections and decorative Stitch assets

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

Build for production:

```bash
npm run build
```

Run type checking:

```bash
npm run typecheck
```

Run lint:

```bash
npm run lint
```

## Editing Event Details

All event content is centralized in:

```text
lib/event-config.ts
```

Update this file to change:

- Child name
- Age
- Date and time
- Location label/address
- Google Maps URL
- WhatsApp number and pre-filled RSVP message
- Site URL
- Parent contact
- Party program steps

## Assets

Google Stitch assets live in:

```text
public/images/stitch
```

The UI uses those assets for the map, cake, balloons, and celebratory decorations. The hero photo currently uses a verified Pexels image configured through `next.config.ts`.

## Deployment

Vercel is the recommended deployment target for this frontend-only Next.js app. Set `eventConfig.siteUrl` to the deployed URL before sharing the invitation.
