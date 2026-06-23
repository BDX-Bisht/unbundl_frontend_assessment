# Whistle - Invisible Dental Aligners Landing Page

This repository contains the frontend implementation of the Whistle dental aligners landing page, built as a responsive, pixel-perfect React application matching the Figma design.

## Approach Note
Our approach focused on building a modular React component architecture styled with vanilla CSS variables, custom Montserrat headings, and Instrument Sans body typography without external UI libraries. We integrated dynamic horizontal scrolling marquee animations, rotating comparison chevrons, and interactive accordions to bring the interface to life. Additionally, we implemented custom pulsing CSS skeleton loaders and local error recovery cards with "Retry" buttons for all API requests to ensure a resilient, premium user experience.

## APIs Used
We integrated the **JSONPlaceholder Posts API** (`https://jsonplaceholder.typicode.com/posts`) in two components:
1. **FAQ Section** (`FAQAndFooter`): Fetches 5 items dynamically, mapping post titles to questions and post bodies to answers.
2. **Why Choose Whistle** (`ResultsAndWhy`): Fetches 4 post records to populate the benefits card grid dynamically.

Both components manage the request lifecycle with state hooks (`useState` and `useEffect`) showing a loading skeleton while fetching, and rendering user-friendly error banners if a network error occurs.

## Project Structure
```text
src/
├── assets/             # Images, PNG and SVG assets
├── components/         # Reusable React components
│   ├── Header          # Brand header and call action button
│   ├── PromoBar        # Top price alert banner
│   ├── Hero            # Hero text and dental aligner presentation
│   ├── ScanBooking     # Interactive gaps question form and Clove Dental referral card
│   ├── ProductFeatures # Infinite marquee benefits banner and Whistle Aligner pricing card
│   ├── ResultsAndWhy   # Real Results (before/after) and Why Choose Whistle cards (API-powered)
│   ├── WhistleDifference # 3D scanning, laser, and pricing detail grids
│   ├── WhistleApart    # Interactive Whistle vs Other Brands comparison table
│   ├── StepsAndDoctor  # Numbered step card video block and Doctor-led referral section
│   ├── FAQAndFooter    # FAQ accordions (API-powered) and dark contact footer
│   └── FixedBottomBar  # Fixed sticky CTA actions bar at viewport bottom
├── App.jsx             # Main layouts assembly
├── index.css           # Global design system variables, resets, and typography
└── main.jsx            # Application entrypoint
```

## Setup & Running Instructions

### 1. Clone the repository and navigate to the directory
```bash
git clone https://github.com/BDX-Bisht/unbundl_frontend_assessment.git
cd unbundl_frontend_assessment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
This will compile assets and output static files into the `dist/` directory.
