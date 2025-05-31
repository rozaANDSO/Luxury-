import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-playfair font-semibold text-navy-800"
        >
          Luxury Agency
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gold-500 transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-gold-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="hover:text-gold-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-navy-800"
          aria-label="Toggle mobile menu"
          title="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
