# Use

A modern and elegant portfolio website for showcasing our work and services. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and luxurious design
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- 💅 Styled with Tailwind CSS
- 📸 Image optimization with Next.js Image component
- 🔍 Portfolio filtering by category
- 📄 Detailed project pages
- 📝 Contact form

## Project Structure

```
luxury-portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/         # React components
│   ├── constants/         # Constant values and data
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles
├── public/              # Static assets
└── ...config files
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd luxury-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Colors and Typography

The website uses a sophisticated color palette and typography system that can be customized in the following files:

- `tailwind.config.ts`: Configure colors, fonts, and other theme settings
- `src/app/globals.css`: Global styles and CSS variables
- `src/constants/portfolio.ts`: Portfolio categories and content

### Content

Update the content in the following locations:

- `src/app/page.tsx`: Homepage content
- `src/constants/portfolio.ts`: Portfolio items and categories
- `src/components/Footer.tsx`: Footer links and information
- `public/images/`: Replace with your own images

## Deployment

The website can be deployed to any platform that supports Next.js applications. We recommend using Vercel for the best experience:

1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Configure your environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/luxury-portfolio](https://github.com/yourusername/luxury-portfolio)
