import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoGppem from "@/assets/logo-gppem.jpeg";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/linhas-de-pesquisa", label: "Linhas de Pesquisa" },
  { href: "/publicacoes", label: "Publicações" },
  { href: "/eventos", label: "Eventos" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-card/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      {/* Mobile Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-accent transition-colors shadow-sm border border-border">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <img src={logoGppem} alt="GPPEM Logo" className="w-12 h-12 rounded-lg object-contain bg-card" />
                <div>
                  <h2 className="font-bold text-primary text-lg">GPPEM</h2>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">UERN</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        location.pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent text-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 GPPEM - UERN
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo - Center on mobile, left on desktop */}
      <Link to="/" className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-3">
        <img 
          src={logoGppem} 
          alt="GPPEM Logo" 
          className="hidden lg:block w-10 h-10 rounded-lg object-contain bg-card" 
        />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-xl font-bold leading-none tracking-tight text-primary">GPPEM</h1>
          <span className="text-[10px] font-bold opacity-60 text-muted-foreground uppercase tracking-[0.2em] mt-0.5">
            UERN
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Search Button - Mobile */}
      <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-accent transition-colors shadow-sm border border-border">
        <span className="material-symbols-outlined text-primary">search</span>
      </button>
    </header>
  );
};

export default Header;
