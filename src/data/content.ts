import { cvs, facts } from './site';

export interface Service { title: string; body: string }
export interface FaqItem { q: string; a: string }
export interface CrossLink { href: string; label: string }

export interface Stat { value: string; label: string }

export interface Profile {
  slug: string;
  route: string;
  title: string;         // <title>
  description: string;   // meta description
  eyebrow: string;
  h1: string;
  intro: string[];
  claim: string;         // frase-tesis bajo el hero
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  stats?: Stat[];        // cifras verificables bajo los CTA
  cv?: string;
  services: Service[];
  servicesNote?: string;
  extras?: { heading: string; items: Service[] };
  process?: { step: string; body: string }[];
  faq?: FaqItem[];
  crossLinks: CrossLink[];
  showTimeline: boolean;
  showPortfolio: boolean;
  /** Portfolio y capacidades justo después del hero, antes de los servicios. */
  portfolioFirst?: boolean;
  showCapabilities?: boolean;
  showAbout: boolean;
}

/* ------------------------------------------------------------------ */
/* Trayectoria — una sola fuente, usada por todas las páginas          */
/* ------------------------------------------------------------------ */

export const timeline = [
  {
    years: '2025 — hoy',
    role: 'Desarrollo web, sistemas y calidad',
    org: 'F2Prom',
    body: 'Mantengo en producción las webs corporativas y la plataforma LMS de e-learning de una empresa de formación, del servidor a la base de datos. Además llevo calidad interna, control documental y contabilidad de costes.',
    result: 'Plataformas en producción, formación auditada para FUNDAE y la JCCM (FOCO), y entornos Java listos para enseñar a programar.',
  },
  {
    years: '2026',
    role: 'Docente — Programación en Java (IFCD052PO)',
    org: 'HAZERTA',
    body: 'Impartición del curso de Programación en Java, 210 h, con metodología propia de Flipped Classroom apoyada en IA: NotebookLM, Cursor IDE y Claude.',
    result: 'Diseño íntegro de la programación didáctica, rúbricas y material de aula, de cero a entrega.',
  },
  {
    years: '2026',
    role: 'Docente — Data Mining y Business Intelligence (IFCT032PO)',
    org: 'Fundación Empleo y Sostenibilidad',
    body: 'Cuarenta horas de selección, limpieza, transformación, análisis y visualización de datos para decisiones operativas.',
    result: 'Conceptos técnicos explicados a un grupo con perfiles muy distintos, sin bajar el nivel.',
  },
  {
    years: '2022 — 23',
    role: 'Asesor financiero y soporte de banca digital',
    org: 'CaixaBank',
    body: 'CRM y software financiero del banco para extraer, analizar y gestionar la base de clientes B2B y B2C, con soporte técnico en banca electrónica.',
    result: 'Programas de alfabetización digital: tecnología acercada a quien más la temía.',
  },
  {
    years: '2018 — 21',
    role: 'Desarrollo de e-commerce y marketing digital',
    org: 'Pinturas COES',
    body: 'Tienda online corporativa construida desde cero con HTML, CSS, JavaScript y Java en servidor para un fabricante con más de treinta años de marca.',
    result: 'Catálogo técnico digitalizado, base de datos de productos e integración con el ERP Sage.',
  },
  {
    years: '2017 — 18',
    role: 'Desarrollador backend Java',
    org: 'Hybrid Company · Praga',
    body: 'Lógica de negocio en Java para aplicaciones de televisión interactiva bajo el estándar europeo HbbTV.',
    result: 'Componentes interactivos en producción y bases de datos relacionales sosteniendo el servicio.',
  },
];

export const formacion = [
  { year: '2025', title: 'Calidad y Mejora Continua (ADGD01)', detail: '425 h presenciales, certificado registrado en FOCO. Modelos de gestión, mejora continua, auditorías, metrología y estadística aplicada.' },
  { year: '2025', title: 'Docencia de la FP para el Empleo (SSCE0110)', detail: 'Certificado de profesionalidad nivel 3, 380 h, nota media 8,2.' },
  { year: '2017', title: 'Desarrollo de Aplicaciones con Tecnologías Web (IFCD0210)', detail: 'Certificado de profesionalidad nivel 3, 590 h.' },
  { year: '2017', title: 'Grado en Administración y Dirección de Empresas', detail: 'Universidad de Castilla-La Mancha.' },
  { year: '2022', title: 'Piloto oficial de drones', detail: 'Habilitación AESA.' },
  { year: 'En curso', title: 'Grado en Psicología', detail: 'UNED, 21 ECTS superados.' },
];

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  slug: string;          // ancla: /casos#slug
  name: string;
  sector: string;
  url: string;
  img: string;
  status: 'En producción' | 'Pre-lanzamiento';
  tags: string[];
  resumen: string;       // una frase, para la home
  reto: string;
  solucion: string;
  destacados?: string[]; // funcionalidades comprobables en la web publicada
  stack: string;
  resultado: string;
}

export const projects: Project[] = [
  {
    slug: 'logistikos', name: 'Logístikos', sector: 'Formación in company · Logística B2B',
    url: 'https://logistikos.pro', img: '/img/portfolio/logistikos.webp', status: 'En producción',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'API serverless', 'schema.org', 'Netlify'],
    resumen: 'Web B2B de nueve páginas para una consultora de formación logística: simulador de crédito FUNDAE, formulario con API propia y cookies conforme a la guía de la AEPD.',
    reto: 'Vender formación a medida a direcciones de operaciones que desconfían de los cursos de catálogo, y explicar la bonificación FUNDAE sin convertir la web en un folleto administrativo.',
    solucion: 'Nueve páginas por intención de búsqueda (programas, metodología, sectores, FUNDAE y contacto), cada área de formación enlazada a su programa y tres vías de conversión: formulario, videollamada de 15 minutos y WhatsApp.',
    destacados: [
      'Simulador orientativo de crédito FUNDAE con controles deslizantes accesibles: plantilla y horas previstas.',
      'Formulario segmentado (empresa, área, participantes) con endpoint propio y antispam sin captcha: campo trampa y tiempo mínimo de relleno.',
      'Gestor de consentimiento propio: Google Analytics no se descarga hasta que el usuario acepta la medición.',
      'Datos estructurados por página: organización con catálogo de servicios, cursos, FAQ, contacto y migas de pan.',
    ],
    stack: 'Next.js (React) con generación estática, Tailwind CSS, función serverless para el formulario, schema.org y despliegue en Netlify.',
    resultado: 'Un servicio complejo explicado en términos de coste, stock y transporte, preparado para posicionar por área de formación y para medir sin incumplir la normativa de cookies.',
  },
  {
    slug: 'prom-ibs', name: 'PROM International Business School', sector: 'Educación · Escuela de negocios',
    url: 'https://promibs.school', img: '/img/portfolio/promib-school.webp', status: 'Pre-lanzamiento',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vídeo adaptativo', 'Hostinger'],
    resumen: 'Página de pre-lanzamiento con vídeo a pantalla completa: versión vertical en móvil, horizontal en escritorio y dominio activo desde el primer día.',
    reto: 'Ocupar el dominio de una escuela de negocios que aún no ha lanzado su oferta, con una imagen cuidada y sin indexar contenido provisional.',
    solucion: 'Página única con vídeo a pantalla completa que elige el corte según la orientación de la pantalla, póster mientras carga y reproducción silenciada compatible con iOS.',
    destacados: [
      'Dos cortes de vídeo: 720p vertical para móvil (menos de 0,5 MB) y 1080p horizontal para escritorio (menos de 2 MB), que se intercambian al girar o redimensionar.',
      'Póster específico por formato: la primera impresión nunca es una pantalla vacía.',
      'Autoplay silenciado con playsinline y reintento tras el primer toque si el navegador lo bloquea.',
      'Etiqueta noindex mientras dure el pre-lanzamiento, para no posicionar una página provisional.',
    ],
    stack: 'HTML, CSS y JavaScript sin dependencias, vídeo MP4 en dos resoluciones y alojamiento en Hostinger.',
    resultado: 'Marca y dominio activos con un mantenimiento mínimo, listos para sustituirse por la web completa en el lanzamiento.',
  },
  {
    slug: 'norden-barber', name: 'Norden Barber', sector: 'Barbería · Reservas',
    url: 'https://barbernorden.vercel.app', img: '/img/portfolio/norden-barber.webp', status: 'En producción',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO local', 'WebP'],
    resumen: 'Landing orientada a reserva para una barbería de Cuenca: servicios, precios y llamada a la cita visibles desde el primer vistazo en el móvil.',
    reto: 'Ordenar servicios, precios, tono visual y llamada a reserva en una experiencia rápida, especialmente en móvil.',
    solucion: 'Landing visual, jerarquía clara de servicios, CTA visible y estructura preparada para posicionar búsquedas de barbería de proximidad.',
    stack: 'HTML, CSS, JavaScript, imágenes WebP y despliegue estático.',
    resultado: 'Una presencia digital enfocada a reserva, fácil de compartir y con identidad propia.',
  },
  {
    slug: 'stefania', name: 'Stefania Panzariu Studio', sector: 'Estética · Branding',
    url: 'https://stefaniavictoria.com', img: '/img/portfolio/stefania-studio.webp', status: 'En producción',
    tags: ['React', 'Vite', 'CSS responsive', 'Metadatos sociales'],
    resumen: 'Web de marca para un estudio de estética y masajes en Cuenca: identidad delicada, servicios claros y captación de citas.',
    reto: 'Convertir una identidad visual delicada en una web clara, elegante y útil para captar citas.',
    solucion: 'Estructura por servicios, copy orientado a confianza, experiencia visual limpia y navegación sin ruido.',
    stack: 'React con Vite, CSS responsive, optimización de imagen y metadatos sociales.',
    resultado: 'Más autoridad visual para servicios premium, preparada para ampliar páginas de tratamientos.',
  },
  {
    slug: 'promesas-de-papel', name: 'Promesas de Papel', sector: 'Librería · Cultura',
    url: 'https://promesasdepapel.com', img: '/img/portfolio/promesas-papel.webp', status: 'En producción',
    tags: ['HTML', 'CSS', 'JavaScript', 'Diseño editorial'],
    resumen: 'Web editorial para una librería independiente de Cuenca, preparada para eventos, recomendaciones y comunidad lectora.',
    reto: 'No caer en una web genérica de comercio: el valor estaba en la personalidad, la comunidad y la selección.',
    solucion: 'Diseño editorial, contenido claro y estructura preparada para eventos, recomendaciones y comunicación con lectores.',
    stack: 'HTML, CSS, JavaScript, diseño responsive y optimización de assets.',
    resultado: 'Una presencia online que puede crecer hacia agenda, artículos y clubes de lectura.',
  },
  {
    slug: 'pinturas-coes', name: 'Pinturas COES', sector: 'Industria · E-commerce',
    url: 'https://pinturascoes.com', img: '/img/portfolio/pinturas-coes.webp', status: 'En producción',
    tags: ['E-commerce', 'Java', 'SQL', 'ERP Sage'],
    resumen: 'Catálogo técnico y tienda online para un fabricante de pinturas con más de treinta años de marca, integrados con el ERP Sage.',
    reto: 'Pasar de producto técnico a experiencia digital entendible para cliente profesional y usuario final.',
    solucion: 'Catálogo digital, base de datos de productos, arquitectura preparada para ecommerce e integración con el ERP Sage.',
    stack: 'HTML, CSS, JavaScript, Java en servidor, SQL y Sage.',
    resultado: 'Un activo digital industrial con recorrido para fichas de producto, SEO técnico y venta online.',
  },
];

/* ------------------------------------------------------------------ */
/* Capacidades — cada una con la prueba al lado                        */
/* ------------------------------------------------------------------ */

export interface Capability {
  title: string;
  body: string;
  skills: string[];
  evidence: { label: string; href?: string }[];
}

export const capabilities: Capability[] = [
  {
    title: 'Desarrollo web a medida',
    body: 'Webs rápidas y mantenibles, de la arquitectura de contenidos al despliegue, sin plantillas genéricas.',
    skills: ['Next.js', 'React', 'Astro', 'Tailwind CSS', 'HTML · CSS · JS', 'Vite', 'WebP y carga diferida'],
    evidence: [
      { label: 'Logístikos · Next.js', href: '/casos#logistikos' },
      { label: 'Stefania Panzariu · React', href: '/casos#stefania' },
      { label: 'Esta web · Astro' },
    ],
  },
  {
    title: 'SEO técnico y conversión',
    body: 'Cada página responde a una búsqueda concreta y deja claro el siguiente paso a quien llega.',
    skills: ['schema.org · JSON-LD', 'Sitemap y canonical', 'SEO local', 'Arquitectura por intención', 'CTA y formularios'],
    evidence: [
      { label: 'Logístikos · datos estructurados por página', href: '/casos#logistikos' },
      { label: 'Norden Barber · SEO local', href: '/casos#norden-barber' },
      { label: 'Esta web · siete páginas por perfil' },
    ],
  },
  {
    title: 'Formularios, datos y back-end',
    body: 'Lo que hay detrás del botón de enviar: validación, antispam, bases de datos e integración con sistemas de gestión.',
    skills: ['API serverless', 'Antispam sin captcha', 'Java', 'SQL', 'Integración ERP Sage'],
    evidence: [
      { label: 'Logístikos · endpoint de contacto propio', href: '/casos#logistikos' },
      { label: 'Pinturas COES · catálogo y Sage', href: '/casos#pinturas-coes' },
      { label: 'Backend Java HbbTV · Praga', href: '/#trayectoria' },
    ],
  },
  {
    title: 'Privacidad y cumplimiento web',
    body: 'RGPD, LSSI y cookies aplicados en el código, no solo en el texto legal.',
    skills: ['RGPD y LOPDGDD', 'Guía de cookies AEPD', 'Bloqueo previo de analítica', 'Aviso legal y privacidad'],
    evidence: [
      { label: 'Logístikos · gestor de consentimiento propio', href: '/casos#logistikos' },
      { label: 'Esta web · sin cookies de seguimiento', href: '/privacidad' },
      { label: 'Expedientes con datos de alumnado · F2Prom', href: '/#trayectoria' },
    ],
  },
  {
    title: 'Formación subvencionada y LMS',
    body: 'La parte técnica y la administrativa de la formación para el empleo, para que plataforma y expediente digan lo mismo.',
    skills: ['FUNDAE', 'FOCO · JCCM', 'Programaciones SEPE', 'Moodle', 'Justificación económica'],
    evidence: [
      { label: 'F2Prom · gestión y justificación', href: '/tecnico' },
      { label: 'Logístikos · simulador de crédito FUNDAE', href: '/casos#logistikos' },
      { label: 'ADGD01 registrado en FOCO', href: '/calidad' },
    ],
  },
  {
    title: 'Docencia técnica con IA',
    body: 'Enseño lo que uso en producción, con material propio, evaluación por rúbrica y la IA como apoyo, no como atajo.',
    skills: ['Java', 'Bases de datos SQL', 'Data Mining y BI', 'Flipped Classroom', 'Claude · Cursor · NotebookLM'],
    evidence: [
      { label: 'Java IFCD052PO · 210 h', href: '/docencia' },
      { label: 'Data Mining y BI IFCT032PO · 40 h', href: '/docencia' },
      { label: 'SSCE0110 · nota media 8,2', href: '/docencia' },
    ],
  },
  {
    title: 'Calidad, costes y datos',
    body: 'Procedimientos, trazabilidad e indicadores que aguantan una auditoría, con el dato sacado del sistema real.',
    skills: ['Control documental', 'Auditoría interna', 'Indicadores', 'Contabilidad de costes', 'Excel avanzado', 'SAP FICO · Sage · Dynamics'],
    evidence: [
      { label: 'ADGD01 · 425 h', href: '/calidad' },
      { label: 'F2Prom · calidad interna y costes', href: '/calidad' },
      { label: 'CaixaBank · CRM y datos de clientes', href: '/#trayectoria' },
    ],
  },
];

export const about = {
  heading: 'Sobre mí',
  paragraphs: [
    'Soy analista programador, pero antes estudié Administración y Dirección de Empresas: por eso leo un negocio antes de escribir una sola línea de código. Desde 2017 me he movido entre el desarrollo de software, la administración de sistemas corporativos y el aula.',
    'Diseño y programo webs a medida de principio a fin, integro herramientas como Sage, SAP o Moodle, y formo a quienes quieren dedicarse a esto. Mi acreditación oficial en docencia me obliga a explicar lo complejo de forma sencilla, y eso acaba mejorando también el código.',
    'Cuando cierro el portátil, piloto drones. Y siempre ando estudiando algo: ahora, Psicología en la UNED.',
  ],
  data: [
    { k: 'Área',      v: 'Cuenca y provincia · remoto' },
    { k: 'Situación', v: 'Autónomo disponible' },
    { k: 'Idiomas',   v: 'Español · Inglés B1 · Alemán A2' },
    { k: 'Desarrollo',v: 'Next.js · React · Astro · Java · SQL' },
    { k: 'Sistemas',  v: 'Sage · SAP FICO · Dynamics · Moodle' },
    { k: 'También',   v: 'IA aplicada · Drones (AESA)' },
  ],
};

/* ------------------------------------------------------------------ */
/* Las 7 páginas                                                       */
/* ------------------------------------------------------------------ */

export const profiles: Profile[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'home', route: '/',
    title: 'Natanael Alzate Torres · Portfolio: webs, formación y calidad',
    description: 'Portfolio de Natanael Alzate Torres: seis webs publicadas en Next.js, React y Astro, docencia IT acreditada, formación FUNDAE y FOCO y calidad ADGD01.',
    eyebrow: 'Portfolio · Cuenca y remoto · autónomo disponible',
    h1: 'Construyo webs y sistemas que funcionan en producción, y formo a los equipos que los usan.',
    intro: [
      'Soy Natanael Alzate Torres, analista programador y docente técnico acreditado por el SEPE. Aquí está lo que he construido, las capacidades que hay detrás y dónde comprobar cada una: todos los proyectos están publicados y enlazados.',
      'Si llegas desde el pie de una web firmada por Nathan Torres, estás en el sitio correcto: es mi firma como desarrollador.',
    ],
    claim: 'ADE, desarrollo de software y acreditación docente: entiendo el negocio, programo la solución y la explico para que tu equipo la use y la mantenga sin depender de mí.',
    ctaPrimary: { label: 'Ver proyectos', href: '#trabajo' },
    ctaSecondary: { label: 'Hablemos', href: '#contacto' },
    stats: [
      { value: String(facts.proyectosPublicados), label: 'webs publicadas y enlazadas' },
      { value: `${facts.horasImpartidas} h`, label: 'de docencia IT impartidas' },
      { value: `${facts.horasCalidad} h`, label: 'de formación en calidad' },
      { value: String(facts.anosDesde), label: 'primer software en producción' },
    ],
    services: [
      { title: 'Webs a medida para negocios que necesitan vender mejor', body: 'Diseño y programo páginas rápidas, claras y mantenibles para empresas, comercios y proyectos profesionales. Sin plantilla genérica: contenido, estructura y código pensados para que Google entienda el servicio y el cliente sepa qué hacer.' },
      { title: 'Automatización de procesos e IA administrativa', body: 'Detecto las tareas repetitivas que se comen las horas de tu equipo y las convierto en flujos más simples: formularios, bases de datos, informes, agentes de IA y conexiones seguras con ERP como Sage o SAP FICO.' },
      { title: 'Formación técnica, LMS y cumplimiento e-learning', body: 'Formo a equipos y dejo plataformas Moodle, documentación SEPE, FOCO y FUNDAE listas para revisión. La parte técnica y la didáctica van juntas: menos improvisación, más trazabilidad.' },
    ],
    servicesNote: 'Primero mapa de negocio; después arquitectura, contenido y automatización. El resultado no es solo una web bonita: es un sistema pequeño, rápido y medible que se puede explicar, mantener y mejorar.',
    faq: [
      { q: '¿Haces webs para negocios pequeños o solo proyectos técnicos?', a: 'Las dos cosas: desde una landing de reservas para una barbería hasta una web B2B de nueve páginas con simulador y API propia. Cada proyecto de esta página enlaza a la web publicada para que lo compruebes.' },
      { q: '¿Puedes automatizar tareas administrativas con IA?', a: 'Sí. Empiezo con un diagnóstico pequeño: qué tarea se repite, qué dato se usa, quién valida y qué herramienta ya existe. La página de automatización detalla proceso y entregables.' },
      { q: '¿Trabajas presencial y en remoto?', a: 'Ambos. Para proyectos locales la cercanía ayuda; para desarrollo, automatización y formación técnica pesa más la documentación que la distancia.' },
      { q: '¿Puedes ayudar a centros de formación con Moodle, FOCO o FUNDAE?', a: 'Sí, es una de mis líneas principales: programaciones didácticas, seguimiento, auditorías y soporte técnico de plataforma.' },
      { q: '¿Cómo prefieres que te contacten?', a: 'Por el formulario de esta página o por correo. Contesto yo, por escrito y en menos de 24 horas laborables: así la propuesta queda documentada desde el primer mensaje.' },
    ],
    crossLinks: [
      { href: '/casos', label: 'Proyectos' },
      { href: '/docencia', label: 'Docencia IT' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/administracion', label: 'Administración' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
    ],
    showTimeline: true, showPortfolio: true, portfolioFirst: true, showCapabilities: true, showAbout: true,
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: 'docencia', route: '/docencia',
    title: 'Docente técnico IT acreditado SEPE · Java · Cuenca',
    description: 'Formador homologado SSCE0110 para certificados de profesionalidad IT: Java, desarrollo web y análisis de datos. 250 h impartidas. Disponible para convocatorias 2026.',
    eyebrow: 'Impartiendo ahora · Java IFCD052PO, 210 h',
    h1: 'Enseño tecnología que uso: programar, manejar los datos y sostener los sistemas.',
    intro: [
      'Soy Natanael Alzate Torres, docente técnico IT acreditado por el SEPE (SSCE0110, nivel 3, nota media 8,2). Combino programación real desde 2017 —Java, bases de datos, ERP— con el aula: imparto certificados de profesionalidad, programación y análisis de datos a profesionales en activo.',
    ],
    claim: '250 horas impartidas en 2026 entre programación en Java (210 h) y Data Mining con Business Intelligence (40 h). Materia técnica convertida en aprendizaje práctico, medible y aplicable desde el primer día.',
    ctaPrimary: { label: 'Colaborar con tu centro', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV docente', href: cvs.docencia },
    cv: cvs.docencia,
    services: [
      { title: 'Impartición de certificados y cursos técnicos', body: 'Certificados de profesionalidad del SEPE y acciones formativas de programación (Java, desarrollo web) y análisis de datos, con material y rúbricas diseñados de cero.' },
      { title: 'Metodología de aula invertida con IA', body: 'Flipped Classroom apoyado en asistentes de IA (NotebookLM, Cursor IDE, Claude): aprendizaje personalizado y medible, sin atajos que debiliten el esfuerzo del alumno. Todo el material pasa por validación humana.' },
      { title: 'Diseño de programaciones y evaluación', body: 'Programaciones didácticas, rúbricas objetivas y materiales completos, listos para acreditar y para entrar al aula.' },
    ],
    extras: {
      heading: 'Lo que suele preguntar un centro antes de contratar',
      items: [
        { title: 'Acreditación', body: 'SSCE0110 nivel 3, 380 h, nota media 8,2. Certificado de profesionalidad IFCD0210 (590 h) para la familia informática.' },
        { title: 'Modalidad', body: 'Presencial en Cuenca capital y provincia, online, y desplazamiento dentro de Castilla-La Mancha.' },
        { title: 'Relación contractual', body: 'Contrato laboral, autónomo con factura o acuerdo marco. Documentación en regla.' },
        { title: 'Disponibilidad', body: 'Inmediata para convocatorias 2026. Respondo con disponibilidad y documentación en menos de 24 h.' },
      ],
    },
    faq: [
      { q: '¿Qué familias profesionales puedes impartir?', a: 'Informática y comunicaciones, con base acreditada en desarrollo de aplicaciones web (IFCD0210) y experiencia real en Java, SQL y bases de datos. También formación en IA aplicada y ofimática avanzada.' },
      { q: '¿Preparas tú el material o lo aporta el centro?', a: 'Puedo trabajar con el material del centro o diseñar la programación completa: objetivos, contenidos, actividades, rúbricas y evaluación.' },
      { q: '¿Cómo usas la IA en el aula sin que el alumno se acomode?', a: 'La IA prepara material y personaliza el ritmo; el alumno sigue teniendo que escribir el código y defenderlo. La evaluación es por rúbrica sobre producto propio.' },
      { q: '¿También gestionas la parte administrativa del curso?', a: 'Sí. Es mi otra línea de trabajo: plataformas LMS, expedientes, FOCO y justificación FUNDAE.' },
    ],
    crossLinks: [
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/administracion', label: 'Administración' },
      { href: '/casos', label: 'Proyectos' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: 'tecnico', route: '/tecnico',
    title: 'Técnico de formación · FUNDAE, FOCO y Moodle',
    description: 'Gestión integral de expedientes de formación subvencionada: programaciones SEPE, plataforma FOCO-JCCM, LMS Moodle y justificación económica FUNDAE.',
    eyebrow: 'Disponible para incorporación inmediata',
    h1: 'Pongo en orden tu formación: programaciones SEPE, plataformas LMS y justificaciones que pasan a la primera.',
    intro: [
      'Soy Natanael Alzate Torres, técnico de formación y analista programador. Me ocupo de la gestión técnica integral de la Formación para el Empleo: diseño programaciones didácticas SEPE, administro plataformas LMS (Moodle, FOCO-JCCM) y dejo lista la bonificación y justificación ante FUNDAE.',
      'Disponible para incorporación en centro de formación o como colaboración freelance, presencial en Cuenca o en remoto.',
    ],
    claim: 'La ventaja no es saber de plataforma o saber de expediente: es saber de las dos. Puedo revisar la coherencia entre lo que dice tu Moodle y lo que dice tu justificación antes de que lo haga la administración.',
    ctaPrimary: { label: 'Revisar un expediente', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV técnico', href: cvs.tecnico },
    cv: cvs.tecnico,
    services: [
      { title: 'Gestión y administración de plataformas LMS', body: 'Configuro, mantengo y optimizo Moodle y FOCO (JCCM): altas, seguimiento, informes y cumplimiento normativo telemático. Tu plataforma, lista para inspección en cualquier momento.' },
      { title: 'Programaciones didácticas y acreditación SEPE', body: 'Programaciones completas de certificados de profesionalidad de nivel 2 y 3: objetivos, contenidos, rúbricas y evaluación, listas para presentar y acreditar.' },
      { title: 'Bonificación y justificación FUNDAE', body: 'Preparo y justifico la formación bonificada cumpliendo cada requisito de FUNDAE y de la JCCM, para que la auditoría sea un trámite y no un problema.' },
    ],
    extras: {
      heading: 'Qué resuelvo para un centro de formación',
      items: [
        { title: 'Programaciones SEPE', body: 'Objetivos, contenidos, metodología, evaluación, rúbricas y documentación preparada para revisión.' },
        { title: 'Moodle y FOCO', body: 'Altas, seguimiento, informes, configuración de actividades, trazabilidad y control de evidencias.' },
        { title: 'FUNDAE y auditoría', body: 'Documentación, coherencia entre plataforma y expediente, revisión de puntos débiles y preparación de inspección.' },
        { title: 'Soporte al docente', body: 'Materiales, evaluación, guías de uso y ayuda para que la parte técnica no bloquee la parte pedagógica.' },
      ],
    },
    process: [
      { step: 'Revisión inicial', body: 'Curso, certificado, plataforma, expediente, calendario y obligaciones documentales.' },
      { step: 'Orden técnico', body: 'Moodle o FOCO, usuarios, actividades, seguimiento, informes y evidencias.' },
      { step: 'Orden didáctico', body: 'Programación, material, rúbricas, criterios de evaluación y coherencia con la norma SEPE.' },
      { step: 'Cierre y auditoría', body: 'Documentación final, checklist FUNDAE y JCCM, y correcciones antes de la revisión.' },
    ],
    faq: [
      { q: '¿Puedes incorporarte como técnico o colaborar como freelance?', a: 'Ambas. Incorporación en centro, soporte externo por curso o colaboración puntual para auditorías y documentación.' },
      { q: '¿Solo gestionas documentación o también plataforma?', a: 'Las dos. Mi ventaja es unir gestión técnica del LMS con programación didáctica y criterio de aula.' },
      { q: '¿Puedes automatizar parte del seguimiento?', a: 'Sí. Informes, extracción de datos, control de evidencias y resúmenes se pueden mejorar con flujos automatizados, siempre con validación humana.' },
      { q: '¿También impartes?', a: 'Sí, con acreditación SSCE0110. Puedes ver el perfil docente completo.' },
    ],
    crossLinks: [
      { href: '/docencia', label: 'Docencia IT' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/administracion', label: 'Administración' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: 'calidad', route: '/calidad',
    title: 'Calidad y mejora continua · ADGD01, 425 h',
    description: 'Implantación de sistemas de gestión, auditorías internas, control documental, metrología y estadística aplicada. 425 horas acreditadas y práctica diaria.',
    eyebrow: 'ADGD01 · 425 h · certificado registrado en FOCO',
    h1: 'Calidad que aguanta una auditoría: procedimientos, trazabilidad e indicadores que se sostienen con datos.',
    intro: [
      'Soy Natanael Alzate Torres, graduado en ADE y técnico en Calidad y Mejora Continua (ADGD01, 425 h presenciales, certificado registrado en FOCO). Trabajo la parte que nadie quiere: que el expediente esté completo, que el dato cuadre y que el indicador signifique algo.',
      'Lo aplico a diario sobre formación subvencionada, donde la administración revisa cada euro y cada firma.',
    ],
    claim: 'Base formativa de 425 horas con 130 h de modelo de gestión, 70 h de mejora continua, 60 h de auditorías y 130 h entre metrología, ensayos y estadística. Y una base técnica en SQL y BI que me permite medir el proceso sin depender de un informático.',
    ctaPrimary: { label: 'Hablemos de tu sistema', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV de calidad', href: cvs.calidad },
    cv: cvs.calidad,
    services: [
      { title: 'Sistema documental auditable', body: 'Procedimientos, registros y trazabilidad de expedientes. Lo aplico sobre formación subvencionada, donde cada documento tiene que resistir una revisión de la administración.' },
      { title: 'Auditorías internas y preparación de auditoría externa', body: 'Checklist, recogida de evidencias, no conformidades y plan de acciones correctivas. Base formativa: 60 h de auditorías y 130 h de modelo de gestión dentro del ADGD01.' },
      { title: 'Métrica y control', body: 'Estadística aplicada, metrología y ensayos, más cuadros de mando en Excel y Business Intelligence construidos sobre bases de datos reales.' },
    ],
    extras: {
      heading: 'Qué no soy, para que nadie se lleve una sorpresa',
      items: [
        { title: 'No soy auditor certificado', body: 'No estoy acreditado en IATF 16949 ni en VDA 6.3/6.5, y no lo voy a decir. Lo que aporto es base formativa sólida, criterio documental y disponibilidad para formarme en Core Tools (APQP, PPAP, AMFE, SPC, MSA, 8D) desde el primer día.' },
        { title: 'No implanto ISO 9001 en solitario', body: 'Puedo preparar la documentación, los procedimientos y las evidencias, y acompañar el proceso. La certificación la emite una entidad acreditada.' },
        { title: 'Sí sostengo el día a día', body: 'Control documental, trazabilidad, indicadores, auditoría interna, acciones correctivas y contabilidad de costes asociada. Es lo que hago cada semana.' },
        { title: 'Sí traigo el dato', body: 'Depuración y validación de bases de datos, cuadros de mando y detección temprana de incidencias. La calidad sin medición es una carpeta bonita.' },
      ],
    },
    faq: [
      { q: '¿Trabajas para industria o solo para formación?', a: 'Mi práctica actual es en formación subvencionada, que es un entorno muy regulado. La base formativa (metrología, ensayos, estadística, modelo de gestión) es industrial y transferible.' },
      { q: '¿Puedes preparar una auditoría externa?', a: 'Puedo preparar documentación, evidencias e indicadores y acompañarte en la revisión. La certificación la emite una entidad acreditada, no yo.' },
      { q: '¿Qué herramientas usas para medir?', a: 'Excel avanzado, Business Intelligence y SQL sobre las bases de datos del propio proceso. Sin exportaciones manuales que se desactualizan al día siguiente.' },
    ],
    crossLinks: [
      { href: '/administracion', label: 'Administración' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/docencia', label: 'Docencia IT' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: 'administracion', route: '/administracion',
    title: 'Administración digital, ERP e IA aplicada',
    description: 'Digitalización de procesos administrativos: integración ERP (Sage, SAP FICO), CRM, control de costes y automatización de tareas repetitivas con IA.',
    eyebrow: 'Grado en ADE · en entornos técnicos desde 2017',
    h1: 'Automatizo la administración de tu empresa: ERP, IA y procesos que devuelven horas a tu equipo.',
    intro: [
      'Soy Natanael Alzate Torres, graduado en Administración y Dirección de Empresas por la UCLM y en entornos empresariales y técnicos desde 2017. Digitalizo procesos administrativos con IA, gestiono ERP (Sage, SAP FICO) y CRM corporativo, y aporto control de calidad con base acreditada.',
    ],
    claim: 'Entiendo el negocio y sé programar la solución. Esa combinación es la que suele faltar cuando una empresa intenta digitalizar su administración sin romper lo que ya funciona.',
    ctaPrimary: { label: 'Pedir diagnóstico', href: '#contacto' },
    ctaSecondary: { label: 'Descargar CV', href: cvs.administracion },
    cv: cvs.administracion,
    services: [
      { title: 'Automatización de procesos con IA', body: 'Identifico las tareas que más tiempo consumen y las convierto en flujos automatizados, conectados de forma controlada a tu ERP o CRM. Siempre con una persona validando lo sensible.' },
      { title: 'Gestión de ERP, CRM y datos', body: 'Administro y conecto tus sistemas: extracción y análisis de datos, gestión documental digital y soporte operativo. Integración con Sage probada en producción durante tres años.' },
      { title: 'Control de costes y mejora continua', body: 'Contabilidad de costes, justificación económica y modelos de gestión (ADGD01) para que tus procesos administrativos sean medibles, trazables y revisables.' },
    ],
    extras: {
      heading: 'Dónde suele estar el ahorro',
      items: [
        { title: 'Entrada de datos duplicada', body: 'El mismo dato tecleado en tres sitios: formulario, hoja de cálculo y ERP. Se resuelve con una única entrada y sincronización.' },
        { title: 'Informes rehechos cada mes', body: 'Extracción, limpieza y montaje manual de cuadros que podrían generarse solos a partir de la base de datos.' },
        { title: 'Documentación dispersa', body: 'Expedientes repartidos entre correo, disco y plataforma. Sin trazabilidad no hay auditoría que se supere con tranquilidad.' },
        { title: 'Conciliaciones a mano', body: 'Cotejo de importes entre facturas, ERP y justificación. Es exactamente el tipo de tarea que una automatización con validación humana hace bien.' },
      ],
    },
    faq: [
      { q: '¿Necesito tener ya un ERP?', a: 'No. Si existe, lo respeto y lo conecto donde tenga sentido. Si no existe, se puede empezar con formularios, hojas y una base de datos sencilla.' },
      { q: '¿Cómo garantizas que no se rompe lo que ya funciona?', a: 'Empezando pequeño: una tarea concreta, en paralelo al proceso actual, con datos reales y marcha atrás disponible. Solo se sustituye cuando el flujo nuevo demuestra que aguanta.' },
      { q: '¿Trabajas el RGPD?', a: 'Sí. Aplico RGPD y LOPDGDD en mi trabajo diario con expedientes de formación, que incluyen datos personales de alumnado.' },
    ],
    crossLinks: [
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/calidad', label: 'Calidad' },
      { href: '/tecnico', label: 'Formación y LMS' },
      { href: '/casos', label: 'Proyectos' },
    ],
    showTimeline: true, showPortfolio: false, showAbout: true,
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: 'automatizacion-ia', route: '/automatizacion-ia',
    title: 'Automatización con IA para pymes · Cuenca',
    description: 'Automatizaciones pequeñas, medibles y seguras: mapa de proceso, prototipo funcional, integración con ERP o CRM y formación del equipo.',
    eyebrow: 'Diagnóstico · prototipo · integración',
    h1: 'Automatizo tareas administrativas para que tu equipo deje de copiar datos, perseguir documentos y rehacer informes.',
    intro: [
      'La IA útil no empieza preguntando qué herramienta comprar, sino qué tarea se repite, dónde nace el dato y quién lo revisa. Trabajo con empresas que necesitan ordenar administración, informes, documentación, CRM o ERP sin montar un proyecto imposible.',
      'Mi perfil mezcla ADE, programación, sistemas y docencia: puedo entender el proceso, construir el flujo y enseñar al equipo a usarlo sin dependencia ciega.',
    ],
    claim: 'Automatización pequeña, segura y medible: formularios, documentos, informes, clasificación de solicitudes, extracción de datos y conexiones con Sage, SAP FICO, CRM o Moodle.',
    ctaPrimary: { label: 'Pedir diagnóstico', href: '#contacto' },
    ctaSecondary: { label: 'Ver el proceso', href: '#proceso' },
    services: [
      { title: 'Administración repetitiva', body: 'Entradas de datos, correos, hojas de cálculo, justificantes, solicitudes, seguimiento de expedientes y documentación que cambia poco pero consume muchas horas.' },
      { title: 'Informes y cuadros de mando', body: 'Extracción, limpieza y lectura de datos para informes internos, seguimiento comercial, calidad, formación o dirección.' },
      { title: 'IA conectada al trabajo real', body: 'Asistentes y flujos que trabajan con tus documentos y sistemas, con límites claros: qué pueden hacer, qué no, quién valida y cómo queda trazado.' },
    ],
    extras: {
      heading: 'Qué entrego',
      items: [
        { title: 'Mapa de proceso', body: 'Diagrama de entradas, salidas, responsables, herramientas, riesgos y puntos donde automatizar tiene sentido.' },
        { title: 'Prototipo funcional', body: 'Un flujo pequeño que resuelve una tarea concreta antes de escalar. Nada de prometer una nave espacial para clasificar tres correos.' },
        { title: 'Integración técnica', body: 'Conexión con formularios, hojas, bases de datos, ERP, CRM, Moodle o la documentación existente según el caso.' },
        { title: 'Guía de uso', body: 'Instrucciones, límites, mantenimiento básico y formación para que el equipo sepa usarlo y corregirlo.' },
      ],
    },
    process: [
      { step: 'Auditoría breve', body: 'Revisamos tareas, volumen, herramientas y dolor real.' },
      { step: 'Priorización', body: 'Elegimos una automatización pequeña con impacto medible.' },
      { step: 'Prototipo', body: 'Construyo el flujo, lo probamos con datos reales y ajustamos.' },
      { step: 'Entrega', body: 'Documentación, formación y criterios para escalar sin perder control.' },
    ],
    faq: [
      { q: '¿Necesito tener ya un ERP o CRM?', a: 'No. Si existe, lo respeto y lo conecto donde tenga sentido. Si no existe, podemos empezar con formularios, hojas y una base de datos sencilla.' },
      { q: '¿La IA decide sola?', a: 'No debería. En procesos sensibles la IA prepara, clasifica o propone, y una persona valida. La gracia está en ahorrar trabajo sin perder criterio.' },
      { q: '¿Se puede conectar con una web?', a: 'Sí. Una web a medida puede alimentar formularios, solicitudes, reservas o informes internos.' },
      { q: '¿Sirve para formación bonificada o LMS?', a: 'Especialmente para seguimiento, documentación, informes y auditorías.' },
    ],
    crossLinks: [
      { href: '/administracion', label: 'Administración' },
      { href: '/casos', label: 'Proyectos' },
      { href: '/tecnico', label: 'Formación y LMS' },
    ],
    showTimeline: false, showPortfolio: true, showAbout: false,
  },

  /* ---------------------------------------------------------------- 7 */
  {
    slug: 'casos', route: '/casos',
    title: 'Proyectos · Webs a medida publicadas',
    description: 'Seis webs publicadas con reto, solución, stack y resultado: formación logística B2B en Next.js, escuela de negocios, barbería, estética, librería e industria.',
    eyebrow: 'Seis proyectos publicados · seis sectores',
    h1: 'Webs reales, publicadas y enlazadas: qué pedía cada negocio, qué construí y con qué.',
    intro: [
      'No vendo páginas bonitas como si fueran cuadros. Un buen proyecto web tiene que aclarar el servicio, reducir fricción, transmitir confianza y dejar una base técnica que no se rompa cuando el negocio crece.',
      'Seis casos, seis sectores: formación in company B2B, una escuela de negocios en pre-lanzamiento, reserva online, marca personal, comercio cultural e industria con catálogo técnico.',
    ],
    claim: 'La misma lógica para sectores distintos: entender el negocio, diseñar la ruta del cliente y programar una web que Google y las personas puedan leer sin esfuerzo.',
    ctaPrimary: { label: 'Quiero algo parecido', href: '#contacto' },
    ctaSecondary: { label: 'Ver capacidades', href: '#capacidades' },
    services: [],
    faq: [
      { q: '¿El diseño empieza por estética o por negocio?', a: 'Por negocio. Primero se define qué debe hacer la web: reservar, captar contactos, explicar servicios, ordenar catálogo o reducir preguntas repetidas. Después se diseña.' },
      { q: '¿Con qué tecnología trabajas?', a: 'La que pide el proyecto: HTML, CSS y JavaScript sin dependencias para una página ligera, React o Next.js cuando hay interacción y muchas páginas, y Astro para webs de contenido como esta.' },
      { q: '¿Se puede añadir automatización después?', a: 'Sí. Una web bien planteada puede crecer hacia formularios inteligentes, bases de datos, informes y flujos automatizados.' },
      { q: '¿También trabajas con centros de formación?', a: 'Sí. Para LMS, FUNDAE, FOCO y programaciones didácticas, el perfil enfocado es el de técnico de formación.' },
    ],
    crossLinks: [
      { href: '/automatizacion-ia', label: 'Automatización con IA' },
      { href: '/administracion', label: 'Administración' },
      { href: '/', label: 'Inicio' },
    ],
    showTimeline: false, showPortfolio: true, showCapabilities: true, showAbout: false,
  },
];

export const byRoute = (route: string) => profiles.find(p => p.route === route)!;
