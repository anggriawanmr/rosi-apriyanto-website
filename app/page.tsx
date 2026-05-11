"use client";

import ContactForm from "./components/ContactForm";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./providers/LanguageProvider";
import { translations } from "./locales/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.services.pierConstruction,
      icon: "/pier.svg",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      text: t.services.pierText,
    },
    {
      title: t.services.roadInfrastructure,
      icon: "/road.svg",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      text: t.services.roadText,
    },
    {
      title: t.services.housingConstruction,
      icon: "/housing.svg",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      text: t.services.housingText,
    },
    {
      title: t.services.projectManagement,
      icon: "/management.svg",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      text: t.services.projectManagementText,
    },
  ];

  const process = [
    {
      number: "01",
      title: t.process.discover,
      text: t.process.discoverText,
      icon: "/magnifying-glass.svg",
    },
    {
      number: "02",
      title: t.process.plan,
      text: t.process.planText,
      icon: "/document.svg",
    },
    {
      number: "03",
      title: t.process.develop,
      text: t.process.developText,
      icon: "/develop.svg",
    },
    {
      number: "04",
      title: t.process.deliver,
      text: t.process.deliverText,
      icon: "/deliver.svg",
    },
    {
      number: "05",
      title: t.process.complete,
      text: t.process.completeText,
      icon: "/complete.svg",
    },
  ];

  const testimonials = [
    [
      "Mr. Handoko",
      "Project Owner",
      "Rosi and his team are highly professional and responsible. The project was delivered with excellent quality and on time.",
    ],
    [
      "Fia Lestari",
      "Developer",
      "Strong communication, detailed coordination, and attention to site quality. We are very satisfied with the result.",
    ],
    [
      "Ir. Budi Santoso",
      "Civil Engineer",
      "The building is solid, functional, and full of character. The team delivered beyond expectations.",
    ],
  ];

  const projects = [
    ["Tanjung Harapan Pier", "South Sulawesi", "2023"],
    ["Trans Kendari Road", "Southeast Sulawesi", "2022"],
    ["Green Hill Residence", "Kendari", "2023"],
    ["Wana Bridge", "Southeast Sulawesi", "2021"],
    ["Pesona Alam Regency", "Kendari", "2022"],
  ];

  const clients = [
    { name: "Waskita", logo: "/waskita.png" },
    { name: "ADHI", logo: "/adhi-karya.png" },
    { name: "PP", logo: "/pp.png" },
    { name: "WIKA", logo: "/wika.png" },
    { name: "Ciputra", logo: "/ciputra.png" },
  ];

  const articles = [
    {
      date: "May 12, 2026",
      title: "Key Considerations in Designing Durable and Safe Piers",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      date: "April 30, 2026",
      title: "Sustainable Road Infrastructure for a Better Future",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      date: "April 10, 2026",
      title: "Designing Comfortable Homes for Modern Lifestyles",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Rosi Apriyanto home">
          <span className="brand-mark">RA</span>
          <span>
            <strong>Rosi Apriyanto</strong>
            <small>Architect Consultant</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#clients">{t.nav.clients}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <a className="header-cta" href="#contact">
            {t.nav.consult}
          </a>
        </div>
      </header>

      <section id="home" className="hero section-spacious">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/construction-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-copy">{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#services" className="button button-gold">
              {t.hero.services}
            </a>
            <a href="#projects" className="button button-outline">
              {t.hero.viewProjects}
            </a>
          </div>
          <div className="hero-features">
            {services.slice(0, 3).map((service) => (
              <div className="hero-feature" key={service.title}>
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="hero-feature-icon"
                />
                <div>
                  <strong>{service.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container split-section section-spacious">
        <div className="portrait-card">
          <div className="portrait-image" />
          <p className="signature">Rosi Apriyanto</p>
        </div>
        <div className="about-copy">
          <div className="about-copy-top">
            <p className="eyebrow">{t.about.eyebrow}</p>
          </div>
          <h2>{t.about.title}</h2>
          <p>{t.about.text1}</p>
          <p>{t.about.text2}</p>
          <a href="#contact" className="button button-dark">
            {t.about.moreAbout}
          </a>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <img src="/experience.svg" alt="Years of experience icon" />
            <strong>10+</strong>
            <span>{t.about.experience}</span>
          </div>
          <div className="stat-card">
            <img src="/projects.svg" alt="Projects completed icon" />
            <strong>100+</strong>
            <span>{t.about.projectsCompleted}</span>
          </div>
          <div className="stat-card">
            <img src="/clients.svg" alt="Happy clients icon" />
            <strong>50+</strong>
            <span>{t.about.happyClients}</span>
          </div>
          <div className="stat-card">
            <img src="/shield.svg" alt="Commitment icon" />
            <strong>100%</strong>
            <span>{t.about.commitmentToQuality}</span>
          </div>
        </div>
      </section>

      <section id="services" className="section-soft section-spacious">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.title}</h2>
          </div>
          <div className="service-grid roomy-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <img
                    className="service-icon"
                    src={service.icon}
                    alt={`${service.title} icon`}
                  />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Learn More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-dark section-spacious">
        <div className="container">
          <div className="section-heading inline-heading section-with-icon">
            <div className="section-title-with-icon">
              <div>
                <p className="eyebrow">{t.projects.eyebrow}</p>
                <h2>{t.projects.title}</h2>
              </div>
            </div>
            <a href="#contact">{t.projects.viewAll}</a>
          </div>
          <div className="project-grid roomy-grid">
            {projects.map(([title, location, year], index) => (
              <article className="project-card" key={title}>
                <div className={`project-thumb thumb-${index + 1}`} />
                <h3>{title}</h3>
                <p>Location: {location}</p>
                <p>Year: {year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="container clients-section section-spacious"
      >
        <div className="section-heading centered section-with-icon">
          <p className="eyebrow">{t.clients.eyebrow}</p>
          <h2>{t.clients.title}</h2>
        </div>
        <div className="client-strip">
          {clients.map((client) => (
            <div className="client-logo-card" key={client.name}>
              <img
                className="client-logo"
                src={client.logo}
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-soft section-spacious">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">{t.process.whyChooseUs}</p>
            <h2>{t.process.commitment}</h2>
          </div>
          <div className="commitment-wrapper">
            <aside className="commitment-card">
              <img
                className="commitment-icon"
                src="/shield.svg"
                alt="Trust icon"
              />
              <ul>
                <li>{t.process.integratedDesign}</li>
                <li>{t.process.experiencedConsultant}</li>
                <li>{t.process.qualitySafety}</li>
                <li>{t.process.clearCommunication}</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="process" className="section-spacious process-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2>{t.process.title}</h2>
          </div>
          <div className="process-grid">
            {process.map(({ number, title, text, icon }) => (
              <article key={number}>
                <img
                  className="process-icon"
                  src={icon}
                  alt={`${title} icon`}
                />
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container testimonials-section section-spacious">
        <div className="section-heading centered">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2>{t.testimonials.title}</h2>
        </div>
        <div className="testimonial-grid roomy-grid">
          {testimonials.map(([name, role, quote]) => (
            <article className="testimonial-card" key={name}>
              <span className="quote-mark">“</span>
              <p>{quote}</p>
              <div>
                <strong>{name}</strong>
                <small>{role}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-soft articles-section section-spacious">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">{t.articles.eyebrow}</p>
            <h2>{t.articles.title}</h2>
          </div>
          <div className="article-grid roomy-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <div
                  className="article-image"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="article-copy">
                  <span>{article.date}</span>
                  <h3>{article.title}</h3>
                  <a href="#contact">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-spacious">
        <div className="container contact-shell">
          <div className="contact-intro">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <div className="contact-note">
              <strong>{t.contact.availableFor}:</strong>
              <span>{t.contact.services}</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">RA</span>
              <span>
                <strong>Rosi Apriyanto</strong>
                <small>Architect Consultant</small>
              </span>
            </a>
            <p>{t.footer.description}</p>
          </div>
          <div>
            <h3>{t.footer.quickLinks}</h3>
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#clients">{t.nav.clients}</a>
          </div>
          <div>
            <h3>{t.footer.servicesFooter}</h3>
            <a href="#services">{t.services.pierConstruction}</a>
            <a href="#services">{t.services.roadInfrastructure}</a>
            <a href="#services">{t.services.housingConstruction}</a>
            <a href="#services">{t.services.projectManagement}</a>
          </div>
          <div>
            <h3>{t.footer.contactInfo}</h3>
            <p>{t.footer.address}</p>
            <p>{t.footer.phone}</p>
            <p>{t.footer.email}</p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.privacy}</span>
        </div>
      </footer>
    </main>
  );
}
