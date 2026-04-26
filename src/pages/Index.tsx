import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Radio,
  MapPin,
  Compass,
  Search,
  Cloud,
  AlertTriangle,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

import icon from "@/assets/app/icon.jpg";
import s1 from "@/assets/app/s1.png";
import s2 from "@/assets/app/s2.png";
import s3 from "@/assets/app/s3.png";
import s4 from "@/assets/app/s4.png";
import s5 from "@/assets/app/s5.png";
import s6 from "@/assets/app/s6.png";
import s7 from "@/assets/app/s7.png";
import s8 from "@/assets/app/s8.png";

// Store URLs
const APP_STORE_URL =
  "https://apps.apple.com/us/app/aerodromos-chile/id463238844";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.asvm.aerodromos&hl=es_CL";

const screenshots = [
  { src: s1, label: "Pantalla principal" },
  { src: s2, label: "Aeródromos cercanos" },
  { src: s3, label: "Detalle del aeródromo" },
  { src: s4, label: "Información de pistas" },
  { src: s5, label: "Vista en mapa" },
  { src: s6, label: "Compás magnético" },
  { src: s7, label: "METAR / NOTAM" },
  { src: s8, label: "Búsqueda" },
];

const features = [
  {
    icon: Plane,
    title: "Base de datos completa",
    desc: "Todos los aeropuertos y aeródromos de Chile, ordenados por región y orden alfabético.",
  },
  {
    icon: Search,
    title: "Búsqueda inteligente",
    desc: "Encuentra aeródromos por nombre o por su designador OACI en segundos.",
  },
  {
    icon: MapPin,
    title: "Datos de cada pista",
    desc: "Dimensiones, superficie y orientación de cada pista al detalle.",
  },
  {
    icon: Radio,
    title: "Frecuencias",
    desc: "Frecuencias de torre, AFIS y radio de cada aeródromo o aeropuerto.",
  },
  {
    icon: Cloud,
    title: "METAR y NOTAM",
    desc: "Consulta METAR y NOTAM decodificados para cada aeródromo (requiere internet).",
  },
  {
    icon: Compass,
    title: "Compás magnético",
    desc: "Dirección y distancia desde tu posición actual al aeródromo seleccionado.",
  },
];

const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Descargar en el App Store"
    className={`inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-elegant transition-smooth hover:scale-[1.03] hover:shadow-glow ${className}`}
  >
    <svg viewBox="0 0 384 512" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
    <div className="text-left leading-tight">
      <div className="text-[10px] uppercase tracking-wider opacity-80">Disponible en el</div>
      <div className="text-xl font-semibold">App Store</div>
    </div>
  </a>
);

const PlayStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Disponible en Google Play"
    className={`inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-elegant transition-smooth hover:scale-[1.03] hover:shadow-glow ${className}`}
  >
    <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden="true">
      <path fill="#34A853" d="M325.3 234.3 104.6 13l280.8 161-60.1 60.3z"/>
      <path fill="#FBBC04" d="m104.6 499 220.7-220.6-60.3-60.3L104.6 13z" opacity=".0"/>
      <path fill="#EA4335" d="M104.6 13v486l220.7-220.6L104.6 13z"/>
      <path fill="#4285F4" d="m104.6 13 280.8 161 60.1 60.3L104.6 499V13z" opacity="0"/>
      <path fill="#FBBC04" d="M385.4 174 104.6 13v486l280.8-161 60.1-60.3z" opacity="0"/>
      <path fill="#34A853" d="M104.6 13v486l220.7-220.6L104.6 13z" opacity="0"/>
      <path fill="#FBBC04" d="m325.3 278.4 60.1 59.6 76.8-44c20.5-11.7 20.5-37.3 0-49L385.4 200l-60.1 78.4z"/>
      <path fill="#4285F4" d="M104.6 499 325.3 278.4l-60.3-60.1L104.6 13c-7.4 4-12.4 11.5-12.4 21.4v443.2c0 9.9 5 17.4 12.4 21.4z"/>
    </svg>
    <div className="text-left leading-tight">
      <div className="text-[10px] uppercase tracking-wider opacity-80">Disponible en</div>
      <div className="text-xl font-semibold">Google Play</div>
    </div>
  </a>
);

const StoreBadges = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    <AppStoreBadge />
    <PlayStoreBadge />
  </div>
);

const Index = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % screenshots.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={icon} alt="Logo Aeródromos Chile" className="h-9 w-9 rounded-lg ring-1 ring-border" />
            <span className="font-semibold tracking-tight">Aeródromos Chile</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-smooth hover:text-foreground">Funciones</a>
            <a href="#screens" className="transition-smooth hover:text-foreground">Capturas</a>
            <a href="#about" className="transition-smooth hover:text-foreground">Acerca</a>
            <a href="#contact" className="transition-smooth hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild variant="default" className="bg-gradient-runway text-primary-foreground hover:opacity-90">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Descargar <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              App para iPhone y iPad
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Toda la aviación de <span className="text-gradient-runway">Chile</span> en tu bolso de vuelo.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              La aplicación de referencia para pilotos comerciales y privados.
              Aeródromos, pistas, frecuencias, METAR, NOTAM y mucho más.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <StoreBadges />
              <a
                href="http://www.plandevuelo.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
              >
                ¿Planes de vuelo? Visita PlanDeVuelo.info
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <div className="text-2xl font-semibold text-foreground">300+</div>
                aeródromos
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-semibold text-foreground">15</div>
                regiones
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-semibold text-foreground">★ 5.0</div>
                App Store
              </div>
            </div>
          </div>

          {/* Phone mock */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 animate-radar rounded-full opacity-60"
                 style={{ background: "var(--gradient-radar)" }} />
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[2.5rem] border border-border bg-secondary p-3 shadow-device">
                <div className="overflow-hidden rounded-[2rem] bg-black">
                  {screenshots.map((s, i) => (
                    <img
                      key={i}
                      src={s.src}
                      alt={s.label}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`h-[560px] w-[280px] object-cover transition-smooth ${
                        i === active ? "block" : "hidden"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ver captura ${i + 1}`}
                    className={`h-1.5 rounded-full transition-smooth ${
                      i === active ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container mx-auto py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Funcionalidades</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Diseñada por pilotos, para pilotos.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Todo lo que necesitas saber de cada aeródromo de Chile, sin distracciones.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS GALLERY */}
      <section id="screens" className="border-y border-border bg-secondary/30 py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Capturas</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Mira la aplicación en acción
            </h2>
          </div>

          <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin md:grid md:grid-cols-4 md:overflow-visible">
            {screenshots.map((s, i) => (
              <figure
                key={i}
                className="snap-center shrink-0 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="rounded-[2rem] border border-border bg-secondary p-2 shadow-elegant transition-smooth hover:scale-[1.02] hover:shadow-glow">
                  <img
                    src={s.src}
                    alt={s.label}
                    loading="lazy"
                    className="h-[440px] w-[220px] rounded-[1.5rem] object-cover md:h-auto md:w-full"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WARNING */}
      <section id="about" className="container mx-auto py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Acerca</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tu copiloto de referencia
            </h2>
            <p className="mt-5 text-muted-foreground">
              Aeródromos Chile reúne en una sola app la información esencial de cada
              aeropuerto y aeródromo del país. La información ha sido obtenida desde el
              AIP Vol I y II de la D.G.A.C de Chile, disponibles públicamente en{" "}
              <a
                href="https://www.aipchile.gob.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                aipchile.gob.cl
              </a>.
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>

          <aside className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6">
            <div className="flex items-center gap-3 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Advertencia importante</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              <strong>Esta aplicación NO debe ser usada en operaciones aéreas.</strong>{" "}
              No la utilices para planificar tu vuelo: los datos pueden estar
              desactualizados o contener errores. Para planificación de vuelo utiliza
              siempre el AIP Vol I y II oficial.
            </p>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
          <div className="relative">
            <img src={icon} alt="" className="mx-auto h-20 w-20 rounded-2xl shadow-glow" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
              Listo para despegar.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Descarga Aeródromos Chile gratis en el App Store o Google Play y lleva la
              información de cada aeródromo del país en tu bolsillo.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border bg-background/70">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" className="h-8 w-8 rounded-lg" />
            <div className="text-sm">
              <div className="font-semibold">Aeródromos Chile</div>
              <div className="text-muted-foreground">© {new Date().getFullYear()} Alvaro Valenzuela</div>
            </div>
          </div>
          <a
            href="mailto:contacto@aerodromoschile.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-smooth hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Sugerencias o reportar un error
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
