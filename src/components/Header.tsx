import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-400">GBTech School</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection('formations')} className="text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Formations
            </button>
            <button onClick={() => scrollToSection('cfa')} className="text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              CFA
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 font-semibold"
            >
              Prendre RDV
            </button>
          </nav>

          <button
            className="md:hidden text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <button onClick={() => scrollToSection('accueil')} className="block text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="block text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection('formations')} className="block text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Formations
            </button>
            <button onClick={() => scrollToSection('cfa')} className="block text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              CFA
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-100 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
            >
              Prendre RDV
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
