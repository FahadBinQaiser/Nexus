export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollY }) {
  const navLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Nexus</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle (Text-based) */}
          <button
            className="md:hidden text-white text-sm font-semibold border px-3 py-1 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
