import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

export default function DJBarcelonaLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    guests: "",
    hours: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const formSubmitAction = "https://formsubmit.co/ajax/smextradivertion@gmail.com";
  const whatsappHref =
    "https://wa.me/34654685158?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20evento.";

  const trustItems = [
    { label: "EVENTOS A MEDIDA", value: "Personalizado", text: "música adaptada a cada público" },
    { label: "ZONA DE SERVICIO", value: "BCN", text: "Barcelona y alrededores" },
    { label: "SERVICIO COMPLETO", value: "DJ + equipo", text: "sonido, cabina e iluminación" },
  ];

  const eventSections = [
    { title: "DJ para fiestas privadas", image: "/servicio-fiestas.jpg", link: "#formulario" },
    { title: "DJ para eventos", image: "/servicio-privados.jpg", link: "#formulario" },
    { title: "DJ para discoteca", image: "/servicio-discoteca.jpg", link: "#formulario" },
    { title: "DJ para eventos corporativos", image: "/servicio-corporativos.jpg", link: "#formulario" },
    { title: "Experiencias musicales a medida", image: "/servicio-medida.jpg", link: "#formulario" },
  ];

  const zones = [
    "Barcelona ciudad",
    "Sabadell",
    "Terrassa",
    "Sant Cugat del Vallès",
    "Cerdanyola del Vallès",
    "Rubí",
    "Barberà del Vallès",
    "Otras zonas cercanas",
  ];

  const faqs = [
    {
      question: "¿Cuánto cuesta contratar un DJ para un evento?",
      answer:
        "Depende de la fecha, ubicación, duración, tipo de evento y necesidades técnicas. No es lo mismo una fiesta privada pequeña que un evento corporativo o una sesión con sonido e iluminación completos. Por eso preparamos cada presupuesto a medida y con la información clara desde el principio.",
    },
    {
      question: "¿El servicio puede incluir sonido, cabina e iluminación?",
      answer:
        "Sí. Podemos llevar DJ profesional, mesa de mezclas, cabina DJ, equipo de sonido, iluminación y montaje adaptado al espacio. Si el local ya tiene equipo, lo revisamos y ajustamos la propuesta para no incluir cosas innecesarias.",
    },
    {
      question: "¿Trabajáis en Barcelona, Sabadell, Terrassa y Vallès Occidental?",
      answer:
        "Sí. Trabajamos principalmente en Barcelona y alrededores, con cobertura habitual en Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí, Barberà del Vallès y otras zonas del Vallès Occidental.",
    },
    {
      question: "¿Podemos elegir el estilo musical del evento?",
      answer:
        "Sí. Antes del evento hablamos contigo para entender el ambiente que buscas, los estilos que te gustan, canciones importantes y temas que prefieres evitar. La sesión se prepara con esa base, pero manteniendo flexibilidad para adaptarse al público en directo.",
    },
    {
      question: "¿Hacéis fiestas privadas, eventos de empresa y discotecas?",
      answer:
        "Sí. Trabajamos en fiestas privadas, cumpleaños, eventos corporativos, celebraciones familiares, discotecas y experiencias a medida. Cada formato requiere un enfoque distinto de música, ritmo, montaje y trato con el público.",
    },
    {
      question: "¿Con cuánta antelación conviene reservar?",
      answer:
        "Lo mejor es consultarlo cuanto antes, sobre todo si el evento es en fin de semana, verano, Navidad o fechas con alta demanda. Aun así, si tienes una fecha cercana, escríbenos y revisamos disponibilidad.",
    },
  ];

  const reviews = [
    {
      name: "Marta · cumpleaños privado",
      location: "Barcelona",
      text: "Queríamos una fiesta animada pero sin que pareciera una sesión genérica. Entendió muy rápido el estilo, mezcló temas actuales con clásicos y la gente acabó bailando muchísimo más de lo que esperábamos.",
    },
    {
      name: "Álvaro · fiesta privada",
      location: "Sabadell",
      text: "Muy fácil organizarlo todo. Nos orientó con el horario, el equipo y el tipo de música. Durante la fiesta fue adaptándose al ambiente y eso se notó bastante.",
    },
    {
      name: "Paula · evento de empresa",
      location: "Terrassa",
      text: "Buscábamos algo profesional pero con buen ambiente, y salió muy bien. Música cuidada, montaje limpio y trato cercano desde el primer contacto.",
    },
  ];

  const scrollOffset = { scrollMarginTop: "90px" };

  const navLinkClass =
    "inline-flex items-center whitespace-nowrap text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] transition hover:text-sky-200";

  const mobileNavLinkClass =
    "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)]";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.dataset.field;
    const { value } = e.target;
    if (!field) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getReviewInitial = (name: string) =>
    name.split("·")[0].trim().charAt(0).toUpperCase();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(false);
    setFormError("");
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("Nombre", formData.name);
    payload.append("Teléfono", formData.phone);
    payload.append("Email", formData.email);
    payload.append("Tipo de evento", formData.eventType);
    payload.append("Fecha del evento", formData.eventDate || "No indicada");
    payload.append("Ubicación", formData.location || "No indicada");
    payload.append("Nº de personas aprox.", formData.guests || "No indicado");
    payload.append("Horas de servicio", formData.hours || "No indicado");
    payload.append("Detalles del evento", formData.details || "No indicado");
    payload.append("Página de origen", window.location.href);
    payload.append("_subject", "Nueva solicitud de presupuesto · Extradivertion");
    payload.append("_replyto", formData.email);
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("_url", "https://extradivertion.com/");

    try {
      const response = await fetch(formSubmitAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "No se pudo enviar la solicitud");
      }

      const result = await response.json();
      if (result?.success !== true && result?.success !== "true") {
        throw new Error("No se pudo enviar la solicitud");
      }

      setFormSent(true);
      setFormError("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        location: "",
        guests: "",
        hours: "",
        details: "",
      });
    } catch (error) {
      console.error(error);
      setFormError(
        "No se pudo enviar la solicitud. Escríbenos por WhatsApp o por correo y revisaremos el formulario. Si estás probando varias veces seguidas, FormSubmit puede bloquear envíos repetidos durante unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const upsertMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    const upsertLink = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };

    document.title = "DJ para eventos en Barcelona | Extradivertion";

    upsertMeta('meta[name="description"]', {
      name: "description",
      content:
        "DJ para eventos en Barcelona y Vallès Occidental. Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas y celebraciones a medida.",
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "DJ para eventos en Barcelona | Extradivertion",
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content:
        "Servicio de DJ para eventos privados, empresas, discotecas y celebraciones en Barcelona, Sabadell, Terrassa y Vallès Occidental.",
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: "https://extradivertion.com/",
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "https://extradivertion.com/dj-home-blue.jpg",
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: "https://extradivertion.com/",
    });

    upsertLink('link[rel="icon"]', {
      rel: "icon",
      href: "/logo-sobre-nosotros.png",
      type: "image/png",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EntertainmentBusiness"],
      name: "Extradivertion",
      url: "https://extradivertion.com/",
      image: "https://extradivertion.com/logo-sobre-nosotros.png",
      email: "smextradivertion@gmail.com",
      telephone: "+34654685158",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sabadell",
        addressRegion: "Barcelona",
        addressCountry: "ES",
      },
      areaServed: [
        "Barcelona",
        "Sabadell",
        "Terrassa",
        "Sant Cugat del Vallès",
        "Cerdanyola del Vallès",
        "Rubí",
        "Barberà del Vallès",
        "Vallès Occidental",
      ],
      description:
        "Servicio de DJ para eventos en Barcelona y Vallès Occidental. Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas y celebraciones a medida.",
      priceRange: "€€",
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DJ para eventos en Barcelona",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DJ para fiestas privadas y eventos corporativos",
          },
        },
      ],
    };

    let schemaScript = document.getElementById("extradivertion-local-business-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "extradivertion-local-business-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-100 text-slate-900"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/78 shadow-[0_10px_30px_rgba(2,6,23,0.42)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/72">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/25 to-slate-950/10" />

        <div className="relative hidden md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
            <div className="hidden md:block md:w-[210px]" />

            <nav className="hidden flex-1 items-center justify-center gap-8 text-[16px] font-semibold tracking-[0.03em] md:flex lg:gap-10">
              <a href="#inicio" className={navLinkClass}>Inicio</a>
              <a href="#servicios" className={navLinkClass}>Servicios</a>
              <a href="#zonas" className={navLinkClass}>Zonas</a>
              <a href="#conocenos" className={navLinkClass}>Conócenos</a>
              <a href="#faq" className={navLinkClass}>FAQ</a>
              <a href="#contacto-directo" className={navLinkClass}>Contactar</a>
            </nav>

            <a
              href="#formulario"
              className="rounded-full bg-sky-700 px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(3,105,161,0.42)] transition hover:-translate-y-0.5 hover:bg-sky-800 md:min-w-[210px] md:text-center"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>

        <div className="relative md:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
            <a
              href="#inicio"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_18px_rgba(0,0,0,0.20)]"
            >
              Extradivertion
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#formulario"
                className="rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-800"
              >
                Presupuesto
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.20)]"
                aria-expanded={isMobileMenuOpen}
                aria-label="Abrir menú"
              >
                Menú
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-white/10 bg-slate-950/96 px-4 py-3 backdrop-blur-xl">
              <div className="grid gap-2">
                <a href="#inicio" onClick={closeMobileMenu} className={mobileNavLinkClass}>Inicio</a>
                <a href="#servicios" onClick={closeMobileMenu} className={mobileNavLinkClass}>Servicios</a>
                <a href="#zonas" onClick={closeMobileMenu} className={mobileNavLinkClass}>Zonas</a>
                <a href="#conocenos" onClick={closeMobileMenu} className={mobileNavLinkClass}>Sobre nosotros</a>
                <a href="#equipo-disponible" onClick={closeMobileMenu} className={mobileNavLinkClass}>Equipo disponible</a>
                <a href="#faq" onClick={closeMobileMenu} className={mobileNavLinkClass}>Preguntas frecuentes</a>
                <a href="#contacto-directo" onClick={closeMobileMenu} className={mobileNavLinkClass}>Contacto</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,23,42,0.48), rgba(15,23,42,0.24)), url('/dj-home-blue.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.08),transparent_32%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-[42px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-7xl xl:text-8xl">
                <span className="block">DJ para eventos</span>
                <span className="mt-2 block bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_8px_26px_rgba(56,189,248,0.25)] md:mt-3">
                  Barcelona
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-7 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-lg md:mt-7 md:text-[23px] md:leading-9">
                Aquí empieza la{" "}
                <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text font-semibold italic text-transparent drop-shadow-[0_2px_12px_rgba(56,189,248,0.18)]">
                  música que hará inolvidable tu evento
                </span>
                .
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
                <a
                  href="#formulario"
                  className="w-full rounded-full bg-white px-8 py-4 text-base font-bold tracking-[0.01em] text-sky-900 shadow-[0_16px_34px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto sm:px-12 sm:py-5 sm:text-[19px]"
                >
                  Pedir presupuesto
                </a>

                <a
                  href={whatsappHref}
                  className="w-full rounded-full border border-white/25 bg-white/12 px-8 py-4 text-base font-bold tracking-[0.01em] text-white shadow-[0_14px_30px_rgba(2,6,23,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 sm:w-auto sm:px-12 sm:py-5 sm:text-[19px]"
                >
                  Hablar por WhatsApp
                </a>
              </div>

            </div>
          </div>
        </section>

        <section className="relative -mt-6 z-10 mx-auto max-w-5xl px-6 pb-5" aria-label="Datos de confianza de Extradivertion">
          <div className="grid gap-3 md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/40 bg-white/75 px-4 py-4 text-center shadow-[0_16px_34px_rgba(15,23,42,0.10)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,23,42,0.14)]"
              >
                <div className="mx-auto inline-flex rounded-full bg-sky-100/90 px-4 py-1.5 shadow-[0_8px_18px_rgba(14,165,233,0.12)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                    {item.label}
                  </p>
                </div>

                <p className="mt-3 text-[28px] font-black leading-none text-slate-950 drop-shadow-[0_2px_8px_rgba(15,23,42,0.08)] md:text-[30px]">
                  {item.value}
                </p>

                <p className="mt-1.5 text-[15px] font-semibold leading-5 text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="servicios"
          className="mx-auto max-w-7xl px-6 py-4 md:py-5"
          style={scrollOffset}
        >
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700/80">
              Servicios DJ para eventos
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 drop-shadow-[0_2px_10px_rgba(15,23,42,0.06)] md:text-6xl">
              DJ para{" "}
              <span className="bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                todo tipo
              </span>
              <span className="block">de eventos</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              Servicio de DJ en Barcelona para fiestas privadas, eventos corporativos, discotecas, cumpleaños y celebraciones a medida. Adaptamos la música, el equipo y el montaje al espacio y al público.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {eventSections.slice(0, 2).map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.82), rgba(2,6,23,0.18)), url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="relative flex h-full flex-col items-center justify-end p-7 text-center md:p-9">
                  <h3 className="mt-3 text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-[0_10px_25px_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5 group-hover:bg-slate-100">
                    Pedir presupuesto
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {eventSections.slice(2).map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group relative min-h-[220px] overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.82), rgba(2,6,23,0.20)), url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="relative flex h-full flex-col items-center justify-end p-6 text-center">
                  <h3 className="mt-3 text-2xl font-bold uppercase leading-tight text-white">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-[0_10px_25px_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5 group-hover:bg-slate-100">
                    Pedir presupuesto
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="zonas"
          className="mx-auto max-w-7xl px-6 py-8 md:py-12"
          style={scrollOffset}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-sky-100/70 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-100/60 blur-3xl" />

            <div className="relative grid gap-6 p-5 md:p-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-stretch">
              <div className="rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-white via-sky-50/40 to-white p-6 md:p-8 lg:p-9">
                <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 backdrop-blur">
                  Zonas de servicio
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 md:text-5xl">
                  Servicio DJ en Barcelona
                  <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                    y alrededores
                  </span>
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  Nos movemos principalmente por Barcelona y el Vallès Occidental, con un servicio pensado para eventos privados, empresas, discotecas y celebraciones a medida. La clave no es solo llegar: es llevar el montaje adecuado, cuidar el sonido y adaptar la sesión al espacio y al público.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  Cubrimos habitualmente Barcelona, Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí y Barberà del Vallès. Si tu evento está en una zona cercana, revisamos disponibilidad y te decimos rápido la mejor opción.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                    <p className="text-xl font-black text-sky-700">Barcelona</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">zona principal</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                    <p className="text-xl font-black text-sky-700">Vallès</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">cobertura habitual</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-sky-100 bg-white/80 p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                    <p className="text-xl font-black text-sky-700">A medida</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">según evento</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#formulario"
                    className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.24)] transition hover:-translate-y-0.5 hover:bg-sky-800"
                  >
                    Consultar disponibilidad
                  </a>
                  <a
                    href={whatsappHref}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:bg-slate-50"
                  >
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:p-6 lg:p-7">
                <div className="flex h-full flex-col justify-center rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur">
                  <div className="mt-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {zones.map((zone) => (
                      <div
                        key={zone}
                        className="group flex min-h-[58px] items-center justify-center rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 px-4 py-3 text-center shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-white/12"
                      >
                        <p className="text-sm font-bold leading-5 text-white">{zone}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.25rem] border border-sky-300/20 bg-sky-300/10 p-4">
                    <p className="text-sm font-semibold leading-6 text-sky-50">
                      Si no ves tu zona, escríbenos igualmente. Valoramos desplazamiento, horario y necesidades técnicas para darte una respuesta realista.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="conocenos"
          className="mx-auto max-w-7xl px-6 py-8 md:py-10"
          style={scrollOffset}
        >
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-sky-50/70 to-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-200/20 blur-3xl" />

              <div className="relative">
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:items-center">
                  <div className="max-w-3xl">
                    <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 backdrop-blur">
                      Extradivertion · DJ para eventos desde 2022
                    </p>

                    <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 md:text-5xl">
                      <span className="bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                        Sobre
                      </span>
                      <span className="block">Extradivertion</span>
                    </h2>

                    <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
                      En Extradivertion entendemos la música como una parte clave de la experiencia. No se trata solo de pinchar canciones, sino de crear el ambiente adecuado para que cada evento tenga identidad, ritmo y una energía que se note de verdad.
                    </p>

                    <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
                      Trabajamos eventos privados, corporativos, discotecas y celebraciones a medida en Barcelona y Vallès Occidental con una propuesta cuidada, cercana y profesional. Escuchamos lo que necesita cada cliente, adaptamos la sesión al espacio y buscamos que todo encaje desde el primer contacto hasta el último tema.
                    </p>

                    <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700 md:text-lg md:leading-8">
                      Nuestra idea es simple: que organizar la música de tu evento sea fácil, que el resultado se vea profesional y que la experiencia se recuerde por cómo se vivió, no solo por cómo sonó.
                    </p>

                    <div className="mt-6">
                      <a
                        href="#contacto"
                        className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.24)] transition hover:-translate-y-0.5 hover:bg-sky-800"
                      >
                        Contactar
                      </a>
                    </div>
                  </div>

                  <div className="mx-auto flex w-full max-w-[180px] items-center justify-center md:mx-0 md:justify-center">
                    <div className="flex aspect-square w-full items-center justify-center rounded-[1.6rem] bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
                      <img
                        src="/logo-sobre-nosotros.png"
                        alt="Logo Extradivertion, DJ para eventos en Barcelona"
                        className="max-h-[120px] w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                    <p className="text-2xl font-black text-sky-700">Desde 2022</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Creando ambiente
                    </p>
                  </div>

                  <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                    <p className="text-2xl font-black text-sky-700">A medida</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Cada evento es distinto
                    </p>
                  </div>

                  <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                    <p className="text-2xl font-black text-sky-700">Completo</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Música, sonido y montaje
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="equipo-disponible"
              style={scrollOffset}
              className="overflow-hidden rounded-[2rem] border border-sky-100 bg-slate-950 p-7 text-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
                    Servicio incluido
                  </p>

                  <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white md:text-4xl">
                    <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                      Equipo disponible
                    </span>
                  </h3>
                </div>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Setup completo
                </span>
              </div>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Todo lo necesario para ofrecer una sesión DJ cuidada, profesional y adaptada al espacio de tu evento.
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "DJ profesional",
                  "Mesa de mezclas",
                  "Cabina DJ",
                  "Equipo de sonido",
                  "Iluminación",
                  "Montaje adaptado",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 px-4 py-5 text-center text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.20)] backdrop-blur md:px-5 md:py-6 md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50/80 p-6 md:flex-row md:items-end md:justify-between md:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.30em] text-sky-700/75">
                    Reseñas
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 md:text-4xl">
                    Eventos con música cuidada
                    <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                      y ambiente de verdad
                    </span>
                  </h3>
                </div>

                <div className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
                  Experiencias reales
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3 md:p-7">
                {reviews.map((item) => (
                  <article
                    key={item.name}
                    className="group flex h-full flex-col rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-sky-300 text-base font-black text-white shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
                          {getReviewInitial(item.name)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-950">{item.name}</p>
                          <p className="text-xs font-semibold text-slate-500">{item.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 flex gap-1 text-sky-700" aria-label="Valoración de 5 estrellas">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <p className="flex-1 text-sm leading-7 text-slate-600 md:text-[15px]">
                      “{item.text}”
                    </p>

                    <div className="mt-5 rounded-full bg-sky-50 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                      Servicio DJ a medida
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-8 md:py-12" style={scrollOffset}>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:p-9">
            <div className="mb-7 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">
                Preguntas frecuentes
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 drop-shadow-[0_2px_10px_rgba(15,23,42,0.06)] md:text-5xl">
                Dudas habituales antes de
                <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  contratar un DJ
                </span>
              </h2>
            </div>

            <div className="mx-auto grid max-w-4xl gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-slate-50/80 px-5 py-4">
                  <summary className="cursor-pointer list-none text-base font-bold text-slate-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[1.6rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 text-center shadow-[0_14px_34px_rgba(15,23,42,0.07)] md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-sky-700/80">
                ¿Tienes una fecha en mente?
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-slate-950 md:text-3xl">
                Cuéntanos la idea y te preparamos
                <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  una propuesta a medida
                </span>
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Revisamos disponibilidad, ubicación, horario y necesidades técnicas para darte una respuesta clara y adaptada a tu evento.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#formulario"
                  className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.24)] transition hover:-translate-y-0.5 hover:bg-sky-800"
                >
                  Pedir presupuesto
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:bg-slate-50"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="border-t border-sky-100 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10">
              <div
                id="formulario"
                style={scrollOffset}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                  Presupuesto DJ para eventos
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                  Solicita tu propuesta <span className="block text-sky-200">para el evento</span>
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                  Déjanos la información básica y te responderemos con una propuesta adaptada para tu evento en Barcelona, Vallès Occidental o alrededores.
                </p>

                <form className="mt-6 grid gap-4" onSubmit={handleSubmit} acceptCharset="UTF-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="Nombre"
                      data-field="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nombre"
                      required
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                    />
                    <input
                      type="tel"
                      name="Teléfono"
                      data-field="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Teléfono"
                      required
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="email"
                      name="Email"
                      data-field="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                    />
                    <input
                      type="text"
                      name="Tipo de evento"
                      data-field="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      placeholder="Tipo de evento: cumpleaños, empresa, discoteca..."
                      required
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                      <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                        Fecha del evento
                      </label>
                      <input
                        type="date"
                        name="Fecha del evento"
                        data-field="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white outline-none"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                      <span className="text-sky-200">📍</span>
                      <input
                        type="text"
                        name="Ubicación"
                        data-field="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Barcelona, Sabadell, Terrassa..."
                        className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                      <span className="text-sky-200">👤</span>
                      <input
                        type="text"
                        name="Nº de personas aprox."
                        data-field="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="Nº de personas aprox."
                        className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                      <span className="text-sky-200">⏱️</span>
                      <select
                        name="Horas de servicio"
                        data-field="hours"
                        value={formData.hours}
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white outline-none"
                      >
                        <option value="" disabled className="text-slate-900">Horas de servicio</option>
                        <option value="2 horas" className="text-slate-900">2 horas</option>
                        <option value="3 horas" className="text-slate-900">3 horas</option>
                        <option value="4 horas" className="text-slate-900">4 horas</option>
                        <option value="5 horas" className="text-slate-900">5 horas</option>
                        <option value="6 horas" className="text-slate-900">6 horas</option>
                        <option value="Más de 6 horas" className="text-slate-900">Más de 6 horas</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    rows={5}
                    name="Detalles del evento"
                    data-field="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos qué necesitas: interior o exterior, horario, estilo musical, tipo de público, si necesitas equipo de sonido e iluminación o cualquier detalle importante"
                    className="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-sky-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                  </button>

                  {formSent && (
                    <div className="rounded-[1.2rem] border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100">
                      Solicitud enviada correctamente. Te contactaremos lo más rápido posible para preparar una propuesta a medida.
                    </div>
                  )}

                  {formError && (
                    <div className="rounded-[1.2rem] border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-100">
                      {formError}
                    </div>
                  )}

                  <details className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <summary className="cursor-pointer list-none font-semibold text-white">
                      Información sobre protección de datos
                    </summary>
                    <div className="mt-3 space-y-2 leading-6 text-slate-300">
                      <p>
                        <span className="font-semibold text-white">Responsable:</span> Extradivertion.
                        <span className="ml-1 font-semibold text-white">Finalidad:</span> gestionar tu solicitud de presupuesto y contactar contigo sobre el evento.
                        <span className="ml-1 font-semibold text-white">Legitimación:</span> aplicación de medidas precontractuales a petición del interesado.
                      </p>
                      <p>
                        <span className="font-semibold text-white">Destinatarios:</span> no se cederán datos a terceros salvo obligación legal.
                        <span className="ml-1 font-semibold text-white">Derechos:</span> acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:smextradivertion@gmail.com" className="font-medium text-sky-200 hover:text-white">smextradivertion@gmail.com</a>.
                      </p>
                      <p className="text-slate-400">
                        Al enviar el formulario declaras haber leído el aviso legal, la política de privacidad y las condiciones de contratación incluidas en el footer.
                      </p>
                    </div>
                  </details>
                </form>
              </div>

              <div
                id="contacto-directo"
                className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/15 bg-white/10 px-6 py-8 text-center shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur md:px-8 md:py-10"
                style={scrollOffset}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
                  Contacto directo
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                  Hablemos de <span className="block text-sky-200">tu evento</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                  Si buscas un DJ para eventos en Barcelona, Sabadell, Terrassa o Vallès Occidental, escríbenos por WhatsApp o mándanos un correo con los detalles del evento.
                </p>

                <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-4 text-center">
                  <a
                    href={whatsappHref}
                    className="w-full rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-sky-900 transition hover:bg-slate-100"
                  >
                    WhatsApp · Respondemos en 24h
                  </a>
                  <a
                    href="mailto:smextradivertion@gmail.com"
                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/15"
                  >
                    Escribir por correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_40px_rgba(2,6,23,0.18)] backdrop-blur md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
                    Extradivertion
                  </p>
                </div>

                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                  DJ para eventos en Barcelona
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Barcelona · Sabadell · Terrassa · Vallès Occidental
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Marca enfocada en experiencias musicales, eventos privados, corporativos, discotecas y celebraciones a medida.
                </p>
              </div>

              <div className="grid gap-2 text-sm text-slate-300">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Navegación
                </p>
                <a href="#inicio" className="transition hover:text-white">Inicio</a>
                <a href="#servicios" className="transition hover:text-white">Servicios DJ</a>
                <a href="#zonas" className="transition hover:text-white">Zonas de servicio</a>
                <a href="#conocenos" className="transition hover:text-white">Sobre nosotros</a>
                <a href="#equipo-disponible" className="transition hover:text-white">Equipo disponible</a>
                <a href="#faq" className="transition hover:text-white">Preguntas frecuentes</a>
                <a href="#contacto" className="transition hover:text-white">Contactar</a>
              </div>

              <div className="grid gap-2 text-sm text-slate-300 md:min-w-[240px]">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Legal
                </p>
                <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <summary className="cursor-pointer list-none font-medium text-white">Aviso legal</summary>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <p>El titular de esta web es <strong>Extradivertion</strong>.</p>
                    <p><strong>Domicilio:</strong> Sabadell</p>
                    <p><strong>Correo de contacto:</strong> <a href="mailto:smextradivertion@gmail.com" className="text-sky-200 hover:text-white">smextradivertion@gmail.com</a></p>
                    <p><strong>Teléfono / WhatsApp:</strong> 654 685 158</p>
                    <p><strong>Actividad:</strong> servicios DJ para eventos privados, corporativos, discotecas y celebraciones a medida.</p>
                  </div>
                </details>
                <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <summary className="cursor-pointer list-none font-medium text-white">Política de privacidad</summary>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <p><strong>Responsable:</strong> Extradivertion.</p>
                    <p><strong>Finalidad:</strong> atender solicitudes de información y presupuesto realizadas por formulario, WhatsApp o correo electrónico.</p>
                    <p><strong>Base jurídica:</strong> aplicación de medidas precontractuales a petición del interesado.</p>
                    <p><strong>Derechos:</strong> acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:smextradivertion@gmail.com" className="text-sky-200 hover:text-white">smextradivertion@gmail.com</a>.</p>
                  </div>
                </details>
                <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <summary className="cursor-pointer list-none font-medium text-white">Condiciones de contratación</summary>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <p>Las solicitudes enviadas desde esta web no constituyen contratación automática del servicio.</p>
                    <p>Las condiciones finales de precio, horario, desplazamiento, necesidades técnicas, forma de pago y cancelación se concretarán en la propuesta o acuerdo final correspondiente.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Extradivertion. Todos los derechos reservados.</p>
              <p>DJ para eventos en Barcelona, Sabadell, Terrassa y Vallès Occidental.</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-sky-800"
      >
        WhatsApp
      </a>
    </div>
  );
}
