import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './styles.css';

const navItems = [
  { href: '#hero', label: 'Accueil' },
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#action', label: 'En action' },
  { href: '#testimonials', label: 'Avis' },
  { href: '#download', label: 'Télécharger' },
  { href: '#contact', label: 'Nous contacter' },
];

const features = [
  {
    title: 'Gestion intuitive',
    description: 'Créez et organisez vos tâches en un clin d\'œil avec une interface épurée et fluide.',
    delay: '0.2s',
  },
  {
    title: 'Rappels intelligents',
    description: 'Restez à jour avec des notifications personnalisées qui s\'adaptent à votre rythme.',
    delay: '0.4s',
  },
  {
    title: 'Collaboration fluide',
    description: 'Partagez vos projets avec votre équipe pour une coordination sans effort.',
    delay: '0.6s',
  },
  {
    title: 'Suivi des progrès',
    description: 'Visualisez vos performances grâce à des statistiques claires et motivantes.',
    delay: '0.8s',
  },
];

const testimonials = [
  {
    quote: 'Melio Tasks a transformé ma gestion quotidienne. L\'interface est intuitive et les rappels m\'aident à rester concentré.',
    author: 'Sophie M., Designer',
    delay: '0.2s',
  },
  {
    quote: 'Une application essentielle pour coordonner mes projets d\'équipe. Le partage de tâches est un vrai gain de temps.',
    author: 'Julien T., Manager',
    delay: '0.4s',
  },
  {
    quote: 'Les statistiques me motivent à atteindre mes objectifs. Melio Tasks est simple et puissant à la fois.',
    author: 'Emma L., Étudiante',
    delay: '0.6s',
  },
  {
    quote: 'Enfin une app gratuite qui allie design moderne et fonctionnalités pratiques. Je l\'utilise tous les jours !',
    author: 'Lucas R., Entrepreneur',
    delay: '0.8s',
  },
];

const socialLinks = [
  { href: 'https://linkedin.com/company/melio.tasks.app', icon: '/linkedin-icon.png', label: 'LinkedIn' },
  { href: 'https://twitter.com/melio_tasks_app', icon: '/twitter-icon.png', label: 'Twitter' },
  { href: 'https://instagram.com/melio.tasks.app', icon: '/instagram-icon.png', label: 'Instagram' },
  { href: 'https://tiktok.com/@melio.tasks.app', icon: '/tiktok-icon.png', label: 'TikTok' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        closeMenu();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMenu();
      });
    });
  }, []);

  return (
    <>
      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} id="menu-overlay"></div>
      <nav role="navigation" aria-label="Navigation principale">
        <div className="nav-container">
          <a href="#hero" aria-label="Retour à l'accueil">
            <img src="/MelioLogo.png" alt="Logo Melio Tasks" className="nav-logo" />
          </a>
          <div className="desktop-menu">
            {navItems.map((item, index) => (
              <a key={index} href={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="mobile-menu-container">
            <button
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              id="hamburger"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`} id="dropdown-menu" role="menu">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} role="menuitem">{item.label}</a>
          ))}
        </div>
      </nav>
    </>
  );
};

const Hero = () => (
  <section id="hero" className="pt-24">
    <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
      <div className="hero-text text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Melio Tasks</h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Organisez vos projets avec fluidité et efficacité
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Une application intuitive pour gérer vos tâches et booster votre productivité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="https://apps.apple.com/fr/app/melio-tasks/id6747993532" className="btn-primary" aria-label="Télécharger sur iOS">
            Télécharger sur iOS
          </a>
          <a href="https://forms.gle/inECG8AANBGwDrvy9" className="btn-secondary" aria-label="Rejoindre la liste d'attente Android">
            Liste d'attente Android
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/VisuelAccueil.png"
          alt="Interface de Melio Tasks"
          className="hero-image animate-scale-in"
          style={{ animationDelay: '0.5s' }}
          width="800"
          height="1200"
        />
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">Pourquoi choisir Melio Tasks ?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card animate-fade-in" style={{ animationDelay: feature.delay }}>
            <h3 className="text-xl font-semibold text-orange-500 mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Action = () => (
  <section id="action" className="py-20">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">Melio Tasks en action</h2>
      <div className="swiper-container" role="region" aria-label="Captures d'écran de l'application">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView="auto"
          spaceBetween={16}
          centeredSlides={false}
          breakpoints={{
            640: { spaceBetween: 20 },
            768: { spaceBetween: 24 },
            1024: { spaceBetween: 28 },
          }}
        >
          {['Écran d\'accueil', 'Création de tâches', 'Notifications', 'Partage de tâches', 'Statistiques', 'Paramètres'].map((alt, index) => (
            <SwiperSlide key={index}>
              <img src={`/${index + 1}.png`} alt={alt} className="w-full h-auto" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">L'avis de nosਮ

      nos utilisateurs</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card animate-fade-in" style={{ animationDelay: testimonial.delay }}>
            <p className="italic mb-4">"{testimonial.quote}"</p>
            <cite className="font-semibold text-orange-500 not-italic">— {testimonial.author}</cite>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Download = () => (
  <section id="download" className="py-20 text-center">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Commencez dès aujourd'hui</h2>
      <p className="text-lg md:text-xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Téléchargez Melio Tasks et révolutionnez votre organisation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <a href="https://apps.apple.com/fr/app/melio-tasks/id6747993532" className="btn-primary" aria-label="Télécharger gratuitement sur iOS">
          Obtenez-le gratuitement
        </a>
        <a href="https://forms.gle/inECG8AANBGwDrvy9" className="btn-secondary" aria-label="Rejoindre la liste d'attente Android">
          Liste d'attente Android
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">Nous contacter</h2>
      <div className="max-w-md mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-center mb-6">Des questions ou des idées ? Contactez-nous !</p>
        <div className="flex justify-center">
          <a href="https://forms.gle/YfuMiS13g96Wwx1Z7" className="btn-primary" aria-label="Ouvrir le formulaire de contact">
            Envoyer un message
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-black" role="contentinfo">
    <div className="section-container">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-orange-500 mb-6">Suivez-nous</h3>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="social-icon" aria-label={link.label} target="_blank" rel="noopener">
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center border-t border-gray-800 pt-6">
        <p className="mb-4">© 2025 Melio Tasks. Tous droits réservés.</p>
        <a href="https://meliotasks.my.canva.site/privacy-policy" className="text-orange-500 hover:underline" target="_blank" rel="noopener">
          Politique de confidentialité
        </a>
      </div>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));

    window.gtag('config', 'G-94XB9SJ9BJ', {
      page_title: 'Melio Tasks - Gestionnaire de tâches',
      page_location: window.location.href
    });
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Action />
      <Testimonials />
      <Download />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
