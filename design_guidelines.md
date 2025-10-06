# Design Guidelines: FlexTech Mobile Accessories E-Commerce Platform

## Design Approach

**Selected Approach:** Reference-Based with FlexTech Telecom Brand Integration

The project requires a professional e-commerce experience inspired by FlexTech Telecom's established visual identity. We'll adapt their brand elements while incorporating e-commerce best practices from industry leaders like Amazon and Shopify for product browsing, and clean admin interfaces inspired by Shopify Admin and Linear for the backend.

## Core Design Elements

### A. Color Palette

**Primary Brand Colors:**
- Primary Orange/Coral: `20 95% 60%` - Main CTA buttons, active states, key highlights
- Deep Charcoal: `220 20% 20%` - Primary text, headings
- Soft White: `0 0% 98%` - Main background
- Light Gray: `220 15% 95%` - Secondary backgrounds, card surfaces

**Accent & Supporting Colors:**
- Success Green: `145 70% 45%` - Stock availability, success messages
- Warning Amber: `35 90% 60%` - Low stock alerts, warnings
- Error Red: `0 80% 55%` - Out of stock, error states
- Info Blue: `210 90% 55%` - Informational badges, notifications

**Dark Mode:**
- Background: `220 25% 10%`
- Surface: `220 20% 15%`
- Text: `0 0% 95%`
- Primary Orange remains: `20 95% 60%`

### B. Typography

**Font Stack:**
- Primary: Inter or system-ui for clean, modern readability
- Headings: Semi-bold (600) to Bold (700)
- Body: Regular (400) to Medium (500)

**Scale:**
- Hero Headline: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Product Titles: text-lg font-medium
- Body Text: text-base
- Small/Meta: text-sm
- Price (emphasized): text-2xl font-bold

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Card padding: p-6
- Element gaps: gap-6 or gap-8
- Container max-width: max-w-7xl

**Grid System:**
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Service Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Admin Tables: Full-width responsive with horizontal scroll on mobile

### D. Component Library

**Navigation:**
- Sticky header with white/dark background, subtle shadow on scroll
- Logo on left, centered nav links, right-aligned cart/profile icons
- Mobile: Hamburger menu with slide-in drawer
- Admin sidebar: Collapsible with icons and labels, active state with orange accent

**Product Cards:**
- Image aspect ratio: 1:1 or 4:5
- Rounded corners: rounded-xl
- Hover state: slight scale (scale-105) and shadow elevation
- Badge positioning: absolute top-4 left-4 for "Sale", "New"
- Rating stars: filled orange stars with gray unfilled
- Quick action icons: absolute top-4 right-4 (wishlist heart)

**Buttons:**
- Primary CTA: Orange background, white text, rounded-lg, px-6 py-3
- Secondary: Outline with orange border, orange text
- Ghost: No background, orange text on hover
- Disabled: Reduced opacity (opacity-50)
- When on images: backdrop-blur-sm with semi-transparent background

**Forms:**
- Input fields: border-2 border-gray-300, focus:border-orange-500, rounded-lg, px-4 py-3
- Labels: text-sm font-medium mb-2
- Error states: border-red-500 with text-red-500 message below
- Dark mode: border-gray-600, bg-gray-800

**Data Tables (Admin):**
- Alternating row colors for readability
- Hover row highlight
- Sortable column headers with arrow indicators
- Action buttons: Icon-only for edit/delete/view
- Bulk selection: Checkboxes with orange check color

**Modals & Overlays:**
- Backdrop: bg-black/50 backdrop-blur-sm
- Modal: max-w-2xl, rounded-2xl, shadow-2xl
- Close button: absolute top-4 right-4

**Cards & Containers:**
- White/dark surface with border or subtle shadow
- Rounded-xl for modern feel
- Consistent padding: p-6 or p-8

### E. Animations

**Sparingly Used:**
- Page transitions: Subtle fade-in
- Product card hover: Transform scale (0.2s ease)
- Add to cart: Brief scale pulse on button click
- Toast notifications: Slide-in from top-right
- Loading states: Spinning icon or skeleton screens (no elaborate animations)

## Customer-Facing Pages Design

### Homepage
**Hero Section:**
- Full-width slider with 3-5 rotating images showcasing products/promotions
- Image overlay with gradient (from transparent to black/20%)
- Centered CTA: "Shop Now" button with backdrop-blur
- Height: min-h-[500px] md:min-h-[600px]

**Service Highlights:**
- 6 icon-based cards in grid (matching FlexTech's services)
- Icon size: 64px, orange-colored
- Card: white background, hover shadow lift
- Icons: Mobile Accessories, Phones, Unlocking, Computer Accessories, IT Services, Screen Protectors

**Featured Products:**
- Grid of 8-12 products with "Featured" badge
- Section heading: "Trending Accessories"

**About Section:**
- Two-column: Image on left (rounded), text content on right
- FlexTech mission statement with brand color highlights

### Product Listing Page
**Layout:**
- Left sidebar (20% width): Filters with collapsible sections
- Main content (80% width): Sort bar, product grid, pagination
- Mobile: Filters in slide-out drawer triggered by button

**Filter Sidebar:**
- Collapsible sections with chevron icons
- Checkboxes for multi-select (orange checked state)
- Price range: Dual-handle slider with orange fill
- Active filters: Pills with X to remove, orange background

**Product Grid:**
- Cards with image, title, brand, price, rating
- "Add to Cart" button on hover (desktop) or always visible (mobile)
- Wishlist heart icon (outline, fills on click)

### Product Detail Page
**Layout:**
- Two-column: Image gallery on left (60%), Details on right (40%)
- Image gallery: Main image with thumbnails below, zoom on hover
- Breadcrumb navigation at top
- Sticky "Add to Cart" button on scroll (mobile)

**Product Info:**
- Large product title (text-3xl)
- Price with original price strikethrough if discounted
- Star rating with review count link
- Stock status badge (green/amber/red)
- Quantity selector with +/- buttons
- Primary CTA: Large "Add to Cart" button
- Secondary actions: Add to Wishlist, Compare, Share icons

**Tabs Section:**
- Description, Specifications, Reviews
- Underlined active tab with orange accent

### Shopping Cart
**Layout:**
- Cart items table/list on left (70%), Order summary on right (30%)
- Each item: Image thumbnail, name, price, quantity selector, remove icon
- Subtotal calculation updates in real-time
- Prominent "Proceed to Checkout" button (orange, full-width on mobile)

## Admin Panel Design

### Admin Dashboard
**Layout:**
- Sidebar navigation (fixed, 240px width)
- Top bar with breadcrumbs, search, notifications, profile
- Main content area with stat cards, charts, recent activity

**Stat Cards:**
- Grid of 4 cards: Total Products, Orders, Revenue, Active Users
- Icon on left, number (large), label below, percentage change
- Orange accent for positive trends

**Charts:**
- Sales chart: Line graph with orange gradient fill (Recharts)
- Revenue breakdown: Donut chart with brand colors
- Card container: white background, shadow, rounded-lg, p-6

### Product Management
**Product List:**
- Table with columns: Image, Name, Brand, Category, Price, Stock, Status, Actions
- Search bar above table
- Filters: Status dropdown, category dropdown
- Bulk actions: Checkbox column, action dropdown (delete, activate, etc.)

**Add/Edit Product Form:**
- Single-column form with logical sections
- Image upload: Dropzone with preview thumbnails
- Rich text editor for description (simple toolbar)
- Category/Brand: Searchable dropdowns
- Price fields: Side-by-side (price, original price, auto-calculated discount)
- Features: Dynamic input list (add/remove rows)
- Specifications: Key-value pair inputs
- Save/Cancel buttons at bottom-right

### Order Management
**Order List:**
- Table with status color coding (badge)
- Quick status change dropdown in table
- Order detail modal: Timeline view with status progression

## Images

**Hero Section Images:**
- 3-5 high-quality lifestyle images showing mobile accessories in use
- Dimensions: 1920x600px minimum
- Subjects: Wireless chargers, phone cases, headphones, cables in modern settings
- Overlay: Dark gradient for text readability

**Product Images:**
- White background, centered product shots
- Multiple angles for each product (front, side, in-use)
- Dimensions: 800x800px minimum

**Service Icons:**
- Custom illustrated icons in orange (#FF6B35 color)
- Style: Line-based, modern, consistent stroke width
- Representing: Phone, accessories, unlock symbol, computer, tools, shield

**About Section Image:**
- Professional store/team photo or accessories lifestyle shot
- Rounded corners (rounded-xl)
- Dimensions: 600x400px

**Category Banners:**
- Relevant category imagery (e.g., headphones for audio category)
- Dimensions: 1200x300px
- Subtle overlay for text placement

## Accessibility & Responsive Behavior

- Minimum touch target size: 44x44px
- Keyboard navigation support for all interactive elements
- Focus states: Orange ring (ring-2 ring-orange-500)
- ARIA labels for icon-only buttons
- Mobile: Drawer navigation, stacked layouts, larger tap targets
- Admin tables: Horizontal scroll with sticky first column on mobile
- Color contrast: Maintain WCAG AA standards (4.5:1 for text)

## Visual Hierarchy Principles

- Orange accent draws attention to primary actions (CTAs, active states)
- White space creates breathing room between sections
- Product images as focal points with supporting text
- Admin: Data tables prioritized, actions secondary (right-aligned)
- Typography scale creates clear information hierarchy