export const site = {
  name: 'Natanael Alzate Torres',
  shortName: 'Natanael Alzate',
  role: 'Analista programador y docente técnico acreditado',
  location: 'Cuenca, España',
  url: 'https://natanaelalzatetorres.com',
  // Solo correo y formulario: el teléfono no se publica en ninguna página ni PDF.
  email: 'alzatetorres@icloud.com',
  // NC-05: un único handle, el mismo que en CV, LinkedIn e InfoJobs.
  linkedin: 'https://www.linkedin.com/in/natanaelalzatetorres',
  linkedinHandle: 'in/natanaelalzatetorres',
  photo: '/photo.jpg',
  ogImage: '/og.jpg',
  // NC-03: endpoint real. La access key de Web3Forms es pública por diseño
  // (viaja en el HTML); la variable de entorno permite rotarla sin tocar código.
  formEndpoint: 'https://api.web3forms.com/submit',
  // Datos LSSI art. 10. Vacíos = la línea no se muestra. Rellenar antes de facturar desde la web.
  nif: '',
  domicilio: '',
  formKey: import.meta.env.PUBLIC_WEB3FORMS_KEY || 'ea55e5d5-a299-4e21-8654-68d70d9b082e',
} as const;

/** NC-04: cada ruta tiene su PDF en public/cv/. Generados con cv-ecosystem. */
export const cvs = {
  docencia:       '/cv/CV_Natanael_Alzate_Docencia.pdf',
  tecnico:        '/cv/CV_Natanael_Alzate_Tecnico_Formacion.pdf',
  administracion: '/cv/CV_Natanael_Alzate_Administracion.pdf',
  calidad:        '/cv/CV_Natanael_Alzate_Calidad.pdf',
} as const;

/**
 * Cifras verificables. Cada una debe poder documentarse si la piden en una entrevista.
 * horasImpartidas: 210 h (IFCD052PO, HAZERTA) + 40 h (IFCT032PO, Fundación Empleo y Sostenibilidad).
 */
export const facts = {
  horasImpartidas: 250,
  horasCalidad: 425,
  anosDesde: 2017,
  proyectosPublicados: 6,
  notaSSCE: '8,2',
} as const;

export const trust = [
  { label: 'SEPE',      title: 'Certificados de profesionalidad SSCE0110 e IFCD0210' },
  { label: 'FOCO·JCCM', title: 'Certificado ADGD01 registrado en FOCO' },
  { label: 'FUNDAE',    title: 'Justificación de formación programada' },
  { label: 'UCLM',      title: 'Grado en Administración y Dirección de Empresas' },
  { label: 'AESA',      title: 'Piloto oficial de drones' },
] as const;

/** Cabecera: primero el trabajo, después los perfiles. */
export const nav = [
  { href: '/casos',             label: 'Proyectos' },
  { href: '/#capacidades',      label: 'Capacidades' },
  { href: '/docencia',          label: 'Docencia IT' },
  { href: '/tecnico',           label: 'Formación y LMS' },
  { href: '/calidad',           label: 'Calidad' },
  { href: '/automatizacion-ia', label: 'Automatización IA' },
] as const;

/** Menú móvil y pie: todas las páginas indexables. */
export const navAll = [
  { href: '/',                  label: 'Inicio' },
  { href: '/casos',             label: 'Proyectos' },
  { href: '/#capacidades',      label: 'Capacidades' },
  { href: '/docencia',          label: 'Docencia IT' },
  { href: '/tecnico',           label: 'Formación y LMS' },
  { href: '/calidad',           label: 'Calidad' },
  { href: '/administracion',    label: 'Administración' },
  { href: '/automatizacion-ia', label: 'Automatización IA' },
] as const;
