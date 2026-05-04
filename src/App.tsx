import { useRef, useState, type ChangeEvent } from "react";

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.dataset.field;
    const { value } = e.target;

    if (!field) return;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const formSubmitAction = "https://formsubmit.co/smextradivertion@gmail.com";
  const iframeLoadedRef = useRef(false);

  const whatsappHref =
    "https://wa.me/34654685158?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20evento.";

  const trustItems = [
  {
    label: "EXPERIENCIA",
    value: "+50",
    text: "eventos realizados",
  },
  {
    label: "PERSONALIZADO",
    value: "100%",
    text: "presupuestos a medida",
  },
  {
    label: "SERVICIO COMPLETO",
    value: "Completo",
    text: "equipo listo para tu evento",
  },
];

  const eventSections = [
    {
      title: "Fiestas privadas",
      image: "/servicio-fiestas.jpg",
      link: "#formulario",
    },
    {
      title: "Eventos",
      image: "/servicio-privados.jpg",
      link: "#formulario",
    },
    {
      title: "DJ para discoteca",
      image: "/servicio-discoteca.jpg",
      link: "#formulario",
    },
    {
      title: "Eventos corporativos",
      image: "/servicio-corporativos.jpg",
      link: "#formulario",
    },
    {
      title: "Experiencias a medida",
      image: "/servicio-medida.jpg",
      link: "#formulario",
    },
  ];

  const reviews = [
  {
    name: "Marta · cumpleaños privado",
    text: "Lucas lo puso facilísimo desde el primer momento. Pilló el rollo que queríamos y la música encajó genial toda la noche.",
  },
  {
    name: "Álvaro · fiesta privada",
    text: "Muy buen trato, cero complicaciones y muy buena vibra durante todo el evento. Se notó que sabía leer a la gente.",
  },
  {
    name: "Paula · evento de empresa",
    text: "Quedó súper bien. Buena música, todo muy cuidado y además fue muy fácil organizarlo con él.",
  },
];

  const scrollOffset = { scrollMarginTop: "90px" };

  const getReviewInitial = (name: string) => {
    return name.split("·")[0].trim().charAt(0).toUpperCase();
  };
  const handleSubmitStart = () => {
    setFormSent(false);
    setIsSubmitting(true);
  };

  const handleFormIframeLoad = () => {
    if (!iframeLoadedRef.current) {
      iframeLoadedRef.current = true;
      return;
    }

    if (!isSubmitting) return;

    setIsSubmitting(false);
    setFormSent(true);
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
  };

  return (
    <div
      className="min-h-screen bg-slate-100 text-slate-900"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/20 shadow-[0_8px_30px_rgba(2,6,23,0.10)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="hidden md:block md:w-[220px]" />

          <nav className="hidden flex-1 items-center justify-center gap-10 text-[17px] font-semibold tracking-[0.04em] md:flex lg:gap-12">
            <a
              href="#inicio"
              className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 bg-clip-text text-transparent transition hover:from-white hover:via-sky-100 hover:to-cyan-200"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 bg-clip-text text-transparent transition hover:from-white hover:via-sky-100 hover:to-cyan-200"
            >
              Nuestros Servicios
            </a>
            <a
              href="#conocenos"
              className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 bg-clip-text text-transparent transition hover:from-white hover:via-sky-100 hover:to-cyan-200"
            >
              Conócenos
            </a>
            <a
              href="#equipo-disponible"
              className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 bg-clip-text text-transparent transition hover:from-white hover:via-sky-100 hover:to-cyan-200"
            >
              Equipo disponible
            </a>
            <a
              href="#contacto-directo"
              className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-300 bg-clip-text text-transparent transition hover:from-white hover:via-sky-100 hover:to-cyan-200"
            >
              Contactar
            </a>
          </nav>

          <a
            href="#formulario"
            className="rounded-full bg-sky-700 px-6 py-3.5 text-[17px] font-semibold text-white shadow-[0_12px_30px_rgba(3,105,161,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-800 md:min-w-[220px] md:text-center"
          >
            Pedir Presupuesto
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.38), rgba(15,23,42,0.22)), url('/dj-home-blue.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.05),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl xl:text-8xl">
              <span className="block">DJ para evento</span>
              <span className="mt-2 block text-sky-200 italic tracking-[0.08em] md:mt-3">
                Barcelona
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-100/90 md:text-2xl">
              Aquí empieza la{" "}
              <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text font-semibold italic text-transparent">
                música que hará inolvidable tu evento
              </span>
              .
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#formulario"
                className="rounded-full bg-white px-12 py-5 text-[19px] font-bold tracking-[0.01em] text-sky-900 shadow-lg transition hover:bg-slate-100"
              >
                Pide presupuesto
              </a>

              <a
                href={whatsappHref}
                className="rounded-full border border-white/25 bg-white/10 px-12 py-5 text-[19px] font-bold tracking-[0.01em] text-white backdrop-blur transition hover:bg-white/15"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-6 z-10 mx-auto max-w-5xl px-6 pb-5">
        <div className="grid gap-3 md:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.2rem] border border-white/35 bg-white/60 px-4 py-4 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/68"
            >
              <div className="mx-auto inline-flex rounded-full bg-sky-100/75 px-4 py-1.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                  {item.label}
                </p>
              </div>

              <p className="mt-3 text-[28px] font-black leading-none text-slate-950 md:text-[30px]">
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
            Nuestros servicios
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 md:text-6xl">
            DJ para{" "}
            <span className="bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              todo tipo
            </span>
            <span className="block">de eventos</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Servicios musicales adaptados a cada tipo de evento, público y celebración.
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
                  Pedir Presupuesto
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
                  Pedir Presupuesto
                </span>
              </div>
            </a>
          ))}
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
                    Extradivertion · Desde 2022
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
                    Trabajamos eventos privados, corporativos y celebraciones a medida con una propuesta cuidada, cercana y profesional. Escuchamos lo que necesita cada cliente, adaptamos la sesión al espacio y al público, y buscamos que todo encaje desde el primer contacto hasta el último tema.
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

                <div className="mx-auto flex w-full max-w-[260px] items-center justify-center md:mx-0 md:justify-center">
                  <div className="flex aspect-square w-full items-center justify-center rounded-[2rem] bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
                    <img
                      src="/logo-sobre-nosotros.png"
                      alt="Logo Extradivertion"
                      className="max-h-[180px] w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <p className="text-3xl font-black text-sky-700">2022</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Empezamos
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <p className="text-3xl font-black text-sky-700">50+</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Eventos realizados
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white bg-white/80 p-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.05)]">
                  <p className="text-3xl font-black text-sky-700">100%</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Adaptado al evento
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
              Todo lo necesario para ofrecer una sesión cuidada, profesional y adaptada al espacio de tu evento.
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

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)] md:p-7">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.30em] text-sky-700/75">
                  Reseñas
                </p>
                <h3 className="mt-2 text-3xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                    Lo que dicen
                  </span>
                  <span className="block text-slate-950">de nosotros</span>
                </h3>
              </div>

              <div className="hidden rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 sm:block">
                Opiniones reales
              </div>
            </div>

            <div className="grid gap-4">
              {reviews.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.35rem] border border-slate-200 bg-slate-50/80 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-sky-300 text-base font-black text-white shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
                      {getReviewInitial(item.name)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex gap-1 text-sky-700">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <p className="text-sm leading-7 text-slate-600 md:text-[15px]">
                        “{item.text}”
                      </p>
                      <p className="mt-3 text-sm font-bold text-slate-950">{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                Formulario de presupuesto
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                Solicita tu propuesta <span className="block text-sky-200">para el evento</span>
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
                Déjanos la información básica y te responderemos con una propuesta adaptada a lo que necesitas.
              </p>

              <form
                className="mt-6 grid gap-4"
                action={formSubmitAction}
                method="POST"
                target="formsubmit_iframe"
                onSubmit={handleSubmitStart}
                acceptCharset="UTF-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="Nombre" data-field="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                  <input
                    type="tel"
                    name="Teléfono" data-field="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="Email" data-field="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                  />
                  <input
                    type="text"
                    name="Tipo de evento" data-field="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="Tipo de evento"
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
                      name="Fecha del evento" data-field="eventDate"
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
                      name="Ubicación" data-field="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Ubicación"
                      className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <span className="text-sky-200">👤</span>
                    <input
                      type="text"
                      name="Nº de personas aprox." data-field="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="Nº de personas aprox."
                      className="w-full bg-transparent text-white placeholder:text-slate-300 outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition focus-within:border-sky-300">
                    <span className="text-sky-200">⏱️</span>
                    <select
                      name="Horas de servicio" data-field="hours"
                      value={formData.hours}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white outline-none"
                    >
                      <option value="" disabled className="text-slate-900">
                        Horas de servicio
                      </option>
                      <option value="2" className="text-slate-900">2 horas</option>
                      <option value="3" className="text-slate-900">3 horas</option>
                      <option value="4" className="text-slate-900">4 horas</option>
                      <option value="5" className="text-slate-900">5 horas</option>
                      <option value="6" className="text-slate-900">6 horas</option>
                      <option value="mas" className="text-slate-900">Más de 6 horas</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={5}
                  name="Detalles del evento" data-field="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos qué necesitas: interior o exterior, horario, estilo musical, tipo de público, si ya tienes equipo o cualquier detalle importante"
                  className="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none transition focus:border-sky-300"
                />

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nueva solicitud de presupuesto · Extradivertion" />
                <input type="hidden" name="_replyto" value={formData.email} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-sky-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                </button>

                {formSent && (
                  <div className="rounded-[1.2rem] border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100">
                    Solicitud enviada correctamente. Te contactaremos lo más rápido posible para darte respuesta y preparar una propuesta a medida.
                  </div>
                )}

                <iframe
                  name="formsubmit_iframe"
                  title="Envío de formulario"
                  className="hidden"
                  onLoad={handleFormIframeLoad}
                />

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
                Si prefieres un contacto más directo, escríbeme por WhatsApp y te respondo en 24h, o mándame un correo con los detalles de tu evento.
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
                  Extradivertion
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Barcelona · Eventos en toda España
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Marca enfocada en experiencias musicales, eventos privados, corporativos y celebraciones a medida.
                </p>
              </div>

              <div className="grid gap-2 text-sm text-slate-300">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Navegación
                </p>
                <a href="#inicio" className="transition hover:text-white">Inicio</a>
                <a href="#servicios" className="transition hover:text-white">Nuestros servicios</a>
                <a href="#conocenos" className="transition hover:text-white">Sobre nosotros</a>
                <a href="#equipo-disponible" className="transition hover:text-white">Equipo disponible</a>
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
                    <p><strong>Actividad:</strong> servicios DJ para eventos privados, corporativos y celebraciones a medida.</p>
                    <p><strong>Identificación fiscal:</strong> no facilitada.</p>
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
              <p>Web sujeta a aviso legal, privacidad y condiciones de contratación.</p>
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