# Selah - Cloud Management Agent

A modern landing page for Selah, an intelligent cloud management agent that helps businesses optimize their cloud infrastructure.

## Features

- Modern, responsive design
- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Smooth animations with Framer Motion
- SEO optimized
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/selah.git
cd selah
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── sections/       # Landing page sections
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Guide.tsx
│       └── Footer.tsx
```

## Customization

- Colors and theme: Edit `tailwind.config.js`
- Content: Modify the text content in each section component
- Styling: Use Tailwind CSS classes or add custom styles in `globals.css`

## Building for Production

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 