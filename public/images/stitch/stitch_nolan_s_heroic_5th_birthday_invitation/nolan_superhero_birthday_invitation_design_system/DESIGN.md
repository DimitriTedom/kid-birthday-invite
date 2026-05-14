---
name: Nolan Superhero Birthday Invitation
version: 1.0.0
project_type: frontend-only digital birthday invitation
platform: responsive web
primary_viewport: mobile-first, 390px width
language: French UI content; English design instructions
framework_target: Next.js + TypeScript + Tailwind CSS + Framer Motion
brand_keywords:
- premium
- playful
- superhero cartoon
- red and white
- joyful
- mobile-first
- birthday invitation
- clean
- immersive
- original
tokens:
  colors:
    primary_red:
      value: '#E92828'
      usage: Primary CTAs, hero accents, important badges, timeline line, active states
    deep_red:
      value: '#B91515'
      usage: Pressed states, deep gradients, emphasis, footer accents
    soft_red:
      value: '#FFF1F1'
      usage: Soft section backgrounds, card highlights, subtle gradient surfaces
    white:
      value: '#FFFFFF'
      usage: Main background, cards, CTA text on red backgrounds
    warm_white:
      value: '#FFF9F7'
      usage: Page background alternative, soft invitation-card surfaces
    charcoal:
      value: '#1E1E2F'
      usage: Primary text, titles, strong labels
    muted_gray:
      value: '#6B7280'
      usage: Secondary text, helper text, captions
    light_border:
      value: '#F3DADA'
      usage: Card borders, dividers, subtle outlines
    accent_yellow:
      value: '#FFD84D'
      usage: Stars, tiny highlights, celebratory accents only
    accent_blue:
      value: '#A7D8FF'
      usage: Cloud shadows and very small secondary decorative accents only
  typography:
    display:
      family: Nunito, Baloo 2, Fredoka, rounded sans-serif fallback
      weight: 800
      usage: Hero title, section titles, large celebratory text
    heading:
      family: Nunito, Fredoka, rounded sans-serif fallback
      weight: 700
      usage: Section headings and card titles
    body:
      family: Inter, Nunito, system sans-serif
      weight: 400
      usage: Readable body text and helper text
    button:
      family: Inter, Nunito, system sans-serif
      weight: 700
      usage: CTA labels
  font_sizes:
    hero_title_mobile: 48px
    hero_title_desktop: 72px
    section_title_mobile: 30px
    section_title_desktop: 42px
    card_title: 18px
    body: 16px
    caption: 13px
    countdown_number_mobile: 40px
    countdown_number_desktop: 52px
  spacing:
    page_padding_mobile: 20px
    page_padding_tablet: 32px
    page_padding_desktop: 64px
    section_gap_mobile: 72px
    section_gap_desktop: 96px
    card_padding_mobile: 20px
    card_padding_desktop: 28px
    button_padding_x: 24px
    button_padding_y: 14px
  radius:
    button: 9999px
    small_card: 20px
    card: 28px
    hero_card: 36px
    circular: 9999px
  shadows:
    soft_card:
      value: 0 16px 40px rgba(185, 21, 21, 0.10)
      usage: Default card shadow
    hero:
      value: 0 28px 70px rgba(185, 21, 21, 0.18)
      usage: Hero invitation-card shadow
    cta:
      value: 0 12px 28px rgba(233, 40, 40, 0.28)
      usage: Primary button shadow
  breakpoints:
    mobile: 390px
    tablet: 768px
    desktop: 1024px
components:
  primary_button:
    background: '{tokens.colors.primary_red.value}'
    text: '{tokens.colors.white.value}'
    radius: '{tokens.radius.button}'
    shadow: '{tokens.shadows.cta.value}'
    usage: 'Main user actions: RSVP, map, WhatsApp, calendar'
    states:
      hover: Slight lift, brighter red, stronger shadow
      pressed: Scale down to 0.97, use deep red
      focus: Visible red outline with white inner ring
  secondary_button:
    background: '{tokens.colors.white.value}'
    text: '{tokens.colors.primary_red.value}'
    border: 1.5px solid {tokens.colors.primary_red.value}
    radius: '{tokens.radius.button}'
    usage: 'Secondary actions: view details, copy link, download reminder'
  info_card:
    background: '{tokens.colors.white.value}'
    radius: '{tokens.radius.card}'
    shadow: '{tokens.shadows.soft_card.value}'
    border: 1px solid {tokens.colors.light_border.value}
    usage: Date, time, location, notes, program steps
  icon_badge:
    background: '{tokens.colors.soft_red.value}'
    icon_color: '{tokens.colors.primary_red.value}'
    radius: '{tokens.radius.circular}'
    usage: Calendar, clock, location, gift, cake, camera, star
  hero_card:
    background: Layered white and warm white with red gradient blobs
    radius: '{tokens.radius.hero_card}'
    shadow: '{tokens.shadows.hero.value}'
    usage: Main invitation poster area
  action_panel:
    background: 'Red gradient from #E92828 to #B91515'
    text: '{tokens.colors.white.value}'
    radius: '{tokens.radius.hero_card}'
    usage: WhatsApp RSVP call-to-action section
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad8ef'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e8e6fe'
  surface-container-highest: '#e3e0f8'
  on-surface: '#1a1a2b'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#2f2f41'
  inverse-on-surface: '#f2efff'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00012'
  primary: '#bb0012'
  on-primary: '#ffffff'
  primary-container: '#e32324'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4ab'
  secondary: '#b71314'
  on-secondary: '#ffffff'
  secondary-container: '#dc322a'
  on-secondary-container: '#fffbff'
  tertiary: '#725c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca81c'
  on-tertiary-container: '#4e3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930007'
  tertiary-fixed: '#ffe07e'
  tertiary-fixed-dim: '#e9c339'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#564500'
  background: '#fcf8ff'
  on-background: '#1a1a2b'
  surface-variant: '#e3e0f8'
  soft-red: '#FFF1F1'
  warm-white: '#FFF9F7'
  muted-gray: '#6B7280'
  light-border: '#F3DADA'
  accent-blue: '#A7D8FF'
typography:
  hero-title-mobile:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  hero-title-desktop:
    fontFamily: Nunito Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  section-title-mobile:
    fontFamily: Nunito Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
  section-title-desktop:
    fontFamily: Nunito Sans
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
  card-title:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.4'
  countdown-number-mobile:
    fontFamily: Nunito Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1'
  countdown-number-desktop:
    fontFamily: Nunito Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: '1'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1'
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  page-padding-mobile: 20px
  page-padding-tablet: 32px
  page-padding-desktop: 64px
  section-gap-mobile: 72px
  section-gap-desktop: 96px
  card-padding-mobile: 20px
  card-padding-desktop: 28px
  button-px: 24px
  button-py: 14px
---

# DESIGN.md — Nolan Superhero Birthday Invitation

## 1. Role of this file

This file is the design-system source of truth for Stitch and for the frontend implementation.

Use it to keep the generated screens consistent across:
- colors
- typography
- spacing
- cards
- buttons
- illustration style
- responsive behavior
- animation direction
- component hierarchy

This is not a content brief and not a backend specification. It is a visual and interaction contract for a frontend-only birthday invitation website.

The final design must be rebuilt later with:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- qrcode.react
- canvas-confetti

## 2. Product context

Create a premium mobile-first digital birthday invitation website for a 5-year-old boy named Nolan.

The invitation is frontend-only:
- no backend
- no database
- no admin dashboard
- no authentication
- no long RSVP form

The main confirmation action is a WhatsApp button that opens a pre-filled message.

## 3. Target users

Primary users are parents, family members, and guests receiving the invitation link on mobile.

The interface must be:
- immediately understandable
- emotionally engaging
- easy to scan
- easy to tap
- visually polished

The design should feel like a premium custom digital invitation, not a generic template.

## 4. Core visual direction

Use a red-and-white superhero cartoon birthday theme.

The design should feel:
- joyful
- heroic
- festive
- energetic
- cute
- modern
- premium
- clean
- mobile-first

Use superhero-inspired visual language without using any copyrighted intellectual property.

Allowed inspiration:
- capes
- stars
- lightning
- comic-style badges
- city skyline silhouettes
- balloons
- clouds
- confetti
- gift boxes
- original hero mascot
- birthday crown or party hat

Forbidden:
- copyrighted superhero characters
- recognizable masks or costumes
- spider symbols
- Marvel/DC/Pixar/Disney/Nintendo references
- real logos
- overly dark comic style
- cheap clipart
- cluttered layouts

## 5. Interface language

All visible UI text must be in French.

Use these core placeholder texts:
- “Tu es invité !”
- “Viens fêter les 5 ans de Nolan”
- “Une journée pleine de jeux, de rires et de surprises”
- “Je confirme ma présence”
- “Voir les détails”
- “La fête commence dans”
- “Les infos de la mission”
- “Programme de la fête”
- “Où se passe la fête ?”
- “Tu viens à la fête ?”
- “Confirmer sur WhatsApp”
- “N’oublie pas la date”
- “Partager l’invitation”
- “On a hâte de te voir !”

## 6. Page structure

The page is a long vertical landing page.

Required sections in order:

1. Hero
2. Countdown
3. Event Details
4. Party Program
5. Location
6. WhatsApp RSVP
7. Add to Calendar
8. Share / QR Code
9. Footer

Each section should feel visually distinct while remaining part of the same design system.

## 7. Hero section

The hero is the most important section.

It must look like a premium invitation poster inside the page.

Content:
- top badge: “Invitation spéciale”
- main title: “Tu es invité !”
- subtitle: “Viens fêter les 5 ans de Nolan”
- supporting text: “Une journée pleine de jeux, de rires et de surprises”
- primary CTA: “Je confirme ma présence”
- secondary CTA: “Voir les détails”
- floating badge: “5 ans”
- floating badge: “Super fête en approche !”

Visual composition:
- large rounded hero card
- white or warm-white background
- red gradient blobs
- subtle halftone dots
- original superhero boy mascot
- red balloons
- white clouds
- yellow stars
- red lightning bolts
- small gift boxes
- confetti
- soft city skyline silhouette

Mascot direction:
Create an original superhero boy mascot. He should look cute, friendly, confident, and about 5 years old.

Outfit:
- red cape
- white outfit
- red boots
- birthday crown or party hat
- optional original star, shield, or lightning badge

Avoid any recognizable superhero costume.

Animation intent:
- mascot floating gently
- balloons drifting upward
- stars rotating subtly
- CTA pulse
- small confetti movement
- section fade-in on load

## 8. Countdown section

Section title:
“La fête commence dans”

Countdown cards:
- Jours
- Heures
- Minutes
- Secondes

Placeholder values:
- 12
- 08
- 45
- 30

Mobile layout:
- 2x2 grid

Desktop layout:
- horizontal row

Card style:
- white card
- rounded-3xl
- red-tinted shadow
- light red border
- large red number
- small readable label

Animation intent:
- small bounce or flip when values update
- very subtle glow on active number

## 9. Event details section

Section title:
“Les infos de la mission”

Subtitle:
“Prépare-toi pour une journée pleine d’aventures.”

Cards:
1. Date
   - value: “Samedi 24 Août”
   - icon: calendar

2. Heure
   - value: “15h00”
   - icon: clock

3. Lieu
   - value: “Adresse à préciser”
   - icon: map pin

Additional note card:
“Pense à arriver quelques minutes avant le début de la fête.”

Layout:
- mobile: stacked cards
- desktop: 3-column grid

Use clear card hierarchy and strong readability.

## 10. Party program section

Section title:
“Programme de la fête”

Timeline steps:
1. “Accueil des invités”
   - “On se retrouve et on commence l’aventure.”

2. “Jeux & animations”
   - “Des défis, des rires et des surprises.”

3. “Gâteau d’anniversaire”
   - “Place au gâteau et aux bougies.”

4. “Photos souvenirs”
   - “Un moment pour garder de beaux souvenirs.”

5. “Fin de la fête”
   - “Merci d’être venu partager ce moment.”

Design:
- vertical red timeline on mobile
- circular red icon badges
- white rounded cards
- playful icons: star, gift, cake, camera, flag
- clean spacing
- no clutter

Animation intent:
- timeline items reveal sequentially on scroll
- icons pop softly when revealed

## 11. Location section

Section title:
“Où se passe la fête ?”

Location card:
- stylized map illustration placeholder, not a real map
- red and white route line
- large map pin
- small clouds, stars, route dots
- location text: “Adresse à préciser”
- CTA: “Voir l’itinéraire”
- helper text: “Le bouton ouvrira l’itinéraire dans Google Maps.”

The map card must be friendly, polished, and clearly tappable.

## 12. WhatsApp RSVP section

Section title:
“Tu viens à la fête ?”

Text:
“Confirme ta présence en un clic pour aider à bien préparer la journée.”

CTA:
“Confirmer sur WhatsApp”

Supporting text:
“Un message prérempli s’ouvrira automatiquement.”

Design:
- high-impact action card
- red gradient background
- white text
- strong CTA hierarchy
- decorative cape or badge illustration
- confetti and balloons around the section

Important:
Do not include form fields.
Do not imply database storage.
Do not imply an admin panel.

Animation intent:
- button tap bounce
- button shine effect
- optional confetti burst concept after click

## 13. Add to calendar section

Section title:
“N’oublie pas la date”

Text:
“Ajoute l’anniversaire à ton calendrier pour ne rien oublier.”

Buttons:
- “Ajouter à Google Calendar”
- “Télécharger le rappel”

Design:
- clean white card
- calendar illustration
- red accent
- stacked buttons on mobile
- side-by-side buttons on desktop

## 14. Share / QR Code section

Section title:
“Partager l’invitation”

Text:
“Envoie l’invitation facilement aux proches.”

Elements:
- QR code placeholder card
- CTA: “Copier le lien”
- CTA: “Partager sur WhatsApp”
- helper text: “Scanne le QR code pour ouvrir l’invitation.”

Design:
- centered QR card
- red rounded frame
- soft shadow
- small floating stars and balloons
- stacked buttons on mobile

## 15. Footer

Main text:
“On a hâte de te voir !”

Subtext:
“Prépare ton plus beau sourire pour une super journée.”

Footer details:
- “Invitation digitale créée avec amour”
- “Contact parent : +XXX XX XX XX XX”

Decorations:
- small balloons
- stars
- cloud
- tiny cape
- confetti

Keep the footer light and warm.

## 16. Button rules

Primary buttons:
- use primary red background
- white text
- rounded-full
- large touch area
- soft shadow
- bold label
- optional icon

Secondary buttons:
- white background
- red text
- red border
- rounded-full

Button behavior:
- hover: lift slightly
- pressed: scale to 0.97
- focus: visible outline
- disabled: lower opacity, no shadow

## 17. Card rules

Cards should use:
- white background
- rounded-3xl corners
- soft red-tinted shadows
- subtle red border
- generous padding
- strong text hierarchy
- optional red icon badge

Cards should not look flat or corporate. They should feel soft, festive, and premium.

## 18. Layout and spacing rules

Mobile:
- single-column layout
- generous vertical spacing
- large CTA buttons
- centered hero content
- cards stacked vertically
- countdown in 2x2 grid

Tablet:
- wider content
- some cards may move to 2-column grid

Desktop:
- hero can become two-column
- details become 3-column grid
- countdown becomes horizontal
- share and QR code can be side-by-side

Do not make the desktop version look like a corporate SaaS landing page. It must still feel like an invitation.

## 19. Accessibility rules

Ensure:
- readable font sizes
- high contrast between text and background
- large mobile tap targets
- no important text placed over busy graphics
- focus states for buttons
- logical content order

The design should remain usable even if animations are disabled.

## 20. Animation rules

Animations should be subtle and joyful.

Use:
- fade-up reveals
- gentle floating mascot
- drifting balloons
- subtle rotating stars
- light confetti
- CTA pulse
- button tap bounce
- countdown flip/bounce
- timeline sequential reveal

Avoid:
- excessive motion
- distracting loops
- aggressive comic effects
- too many simultaneous animations

## 21. Asset direction

Create or imply these exportable assets:
- original superhero boy mascot
- red cape
- balloons
- stars
- lightning bolts
- gift boxes
- white clouds
- soft city skyline
- party hat or crown
- badge icon
- calendar icon
- cake icon
- camera icon
- map illustration
- QR code frame

Assets should be isolated enough for export as SVG or PNG.

## 22. Implementation mapping

The final design should map cleanly to these React components:

- `Hero`
- `Countdown`
- `EventInfo`
- `PartyTimeline`
- `LocationSection`
- `RSVPWhatsapp`
- `CalendarSection`
- `ShareSection`
- `Footer`

The layout should be easy to rebuild using Tailwind utility classes and Framer Motion variants.

## 23. Do

Do:
- keep the page premium and clean
- use red and white consistently
- use original superhero-inspired assets
- create a strong hero section
- make CTAs obvious
- prioritize mobile UX
- use generous spacing
- maintain visual hierarchy
- keep all content in French

## 24. Don’t

Do not:
- use copyrighted characters
- use recognizable superhero logos
- use dark aggressive comic visuals
- create a long RSVP form
- mention backend, database, or admin dashboard
- overload the page with decorations
- use too many colors
- reduce readability for visual effects
- make it look like a generic template

## 25. Final quality target

The final output must feel like a custom, premium, mobile-first superhero birthday invitation for Nolan’s 5th birthday.

It should be visually impressive, joyful, easy to understand, and ready to rebuild in a real Next.js frontend project.