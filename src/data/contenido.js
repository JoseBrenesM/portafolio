export const profile = {
  name: 'José Andrés Brenes',
  shortName: 'José Brenes',
  role: 'Desarrollador full stack · Ingeniero en Sistemas de Computación',
  languages: 'Español nativo · Inglés B2',
  headline: 'Hola, soy José.',
  heroSubtitle:
    'Soy José, ingeniero en Sistemas y desarrollador full stack. Me gusta convertir problemas reales en software útil. He trabajado con empresas y hoy también desarrollo por mi cuenta.',
  intro:
    'Desarrollo aplicaciones web de principio a fin. Me gusta encargarme de todo: planificar, documentar, levantar el backend, construir el frontend y cuidar los datos.',
  nota:
    'Me gusta entender el problema antes de pensar en código. Disfruto trabajar el proyecto completo: ordenar la idea, construir la solución, probarla y pulir los detalles. Para mí, un buen resultado es algo útil que le facilita el día a día a quien lo usa.',
  status: 'Abierto a nuevos proyectos',
  email: 'trabajo.joseb@gmail.com',
  whatsapp: 'https://wa.me/50664856905',
  whatsappLabel: '+506 6485 6905',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-a-8a90a8273',
  github: 'https://github.com/JoseBrenesM',
}

export const capabilities = [
  {
    icon: 'interface',
    title: 'Interfaces',
    text: 'Desarrollo interfaces web para consultar información, gestionar tareas e interactuar con contenido.',
  },
  {
    icon: 'database',
    title: 'Backend y datos',
    text: 'Construyo servicios y APIs con autenticación, permisos y gestión de datos.',
  },
  {
    icon: 'deploy',
    title: 'Integraciones y despliegue',
    text: 'Conecto servicios externos, pasarelas de pago y almacenamiento, y despliego aplicaciones web en la nube.',
  },
  {
    icon: 'ai',
    title: 'IA y automatización',
    text: 'Integro asistentes conversacionales y automatizaciones con IA para atender consultas, gestionar pedidos y trabajar con información del negocio.',
  },
]

export const technologies = [
  { src: '/img/icons/html.svg', alt: 'HTML5' },
  { src: '/img/icons/css.svg', alt: 'CSS3' },
  { src: '/img/icons/js.svg', alt: 'JavaScript' },
  { src: '/img/icons/react.svg', alt: 'React' },
  { src: '/img/icons/net.png', alt: '.NET' },
  { src: '/img/icons/node.svg', alt: 'Node.js' },
  { src: '/img/icons/sql.svg', alt: 'SQL Server' },
  { src: '/img/icons/mongo.svg', alt: 'MongoDB' },
  { src: '/img/icons/n8n.svg', alt: 'n8n', wide: true },
]

export const projects = [
  {
    id: 'veterinaria',
    title: 'Veterinaria El Ganadero',
    kind: 'Sistema de gestión',
    context: 'Proyecto universitario para una empresa real',
    image: '/img/optimized/veterinaria.jpg',
    imageWidth: 1200,
    imageHeight: 647,
    imageSmall: '/img/optimized/veterinaria-800.jpg',
    imageSmallWidth: 800,
    imageSmallHeight: 432,
    alt: 'Captura de Veterinaria El Ganadero',
    description: [
      'Gestión de ventas con acceso diferenciado para administradores y usuarios, sobre autenticación con JWT y permisos por rol.',
      'Incluye un punto de venta con pagos mediante PayPal.',
      'Desarrollado con .NET en arquitectura multicapas, SQL Server y Azure App Services.',
    ],
    stack: ['.NET', 'SQL Server', 'Azure', 'JWT', 'PayPal'],
    url: 'https://veterinariaelganadero.azurewebsites.net',
    course: true,
    featured: true,
  },
  {
    id: 'oferticas',
    title: 'Oferticas',
    kind: 'Comparador de precios',
    context: 'Costa Rica y Estados Unidos',
    image: '/img/oferticas.jpg',
    imageWidth: 1265,
    imageHeight: 712,
    alt: 'Captura de Oferticas',
    description: [
      'Reúne ofertas de varias tiendas con filtros, ordenamiento por precio, guardados y enlaces a las fichas originales.',
      'Incluye un asistente contextual de producto que responde consultas técnicas con fuentes oficiales.',
      'Desarrollado con React y Node.js, integra catálogos de tiendas y servicios externos, con MongoDB para reutilizar especificaciones técnicas.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://oferticas.vercel.app/',
  },
  {
    id: 'brn',
    title: 'BRN Solutions',
    kind: 'Sitio de servicios',
    context: 'Trabajo independiente',
    image: '/img/brn-solutions.jpg',
    imageWidth: 1265,
    imageHeight: 712,
    alt: 'Captura de BRN Solutions',
    description: [
      'Sitio para presentar las soluciones digitales que ofrezco en mis trabajos independientes.',
      'Permite conocer los servicios, consultar el proceso de trabajo y contactar por WhatsApp.',
      'El trabajo independiente también incluye automatizaciones con n8n y APIs de terceros, procesamiento de información, prototipos web y una herramienta con Gmail API, OAuth2 y Google Apps Script.',
    ],
    stack: ['Sitio', 'Automatización', 'APIs'],
    url: 'https://brnsolution.vercel.app/',
  },
  {
    id: 'hamaca',
    title: 'Casa de la Hamaca',
    kind: 'Catálogo y panel admin',
    context: 'Sitio para un emprendimiento',
    image: '/img/optimized/casa-hamaca.jpg',
    imageWidth: 1200,
    imageHeight: 643,
    imageSmall: '/img/optimized/casa-hamaca-800.jpg',
    imageSmallWidth: 800,
    imageSmallHeight: 428,
    alt: 'Captura de Casa de la Hamaca',
    description: [
      'Catálogo público de productos junto a un panel administrativo para gestionar el inventario.',
      'La aplicación en .NET utiliza SQL Azure para los datos y Azure Blob Storage para las imágenes de productos.',
    ],
    stack: ['.NET', 'SQL Azure', 'Blob Storage'],
    url: 'https://casadehamaca.azurewebsites.net',
    course: true,
  },
  {
    id: 'facebook',
    title: 'Facebook Clone',
    kind: 'Red social',
    context: 'Simulación con publicaciones y marketplace',
    image: '/img/face/face1.png',
    imageWidth: 1874,
    imageHeight: 1009,
    alt: 'Captura de Facebook Clone',
    description: [
      'Simulación de red social con publicaciones, likes, comentarios y un marketplace.',
      'El frontend se conecta a APIs REST con Node.js y Express. MongoDB almacena los datos, JWT gestiona la autenticación y bcrypt realiza el hashing de contraseñas.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    url: 'https://faceclone-beta.vercel.app/',
    course: true,
  },
]

export const experience = [
  {
    company: 'BRN Solutions',
    role: 'Desarrollador de software independiente',
    date: 'Marzo 2026 – presente',
    current: true,
    text: 'Desarrollo sitios web y landing pages para pequeños negocios, junto con herramientas que automatizan el procesamiento de información. El trabajo independiente también incluye integración de APIs y prototipos web.',
  },
  {
    company: 'Municipalidad de El Guarco',
    role: 'Desarrollador de software · práctica profesional',
    date: 'Enero – abril 2025',
    text: 'Desarrollé de forma independiente un sistema institucional, desde el levantamiento de requerimientos hasta la implementación. Coordiné el alcance con la institución y me encargué del backend, la base de datos y el frontend.',
    note: 'Sistema institucional privado con acceso individual y distintos roles.',
  },
  {
    company: 'PLECSYS',
    role: 'Desarrollador full stack junior · proyecto temporal',
    date: 'Febrero – diciembre 2024',
    text: 'Corregí errores en aplicaciones, incorporé validaciones y mejoré consultas de datos. También di soporte al frontend como parte de un proyecto temporal full stack.',
  },
]

export const extraExperience = {
  company: 'Servicios PSI',
  role: 'Analista y digitador de datos',
  date: 'Julio 2025 – febrero 2026',
  text: 'Revisión, validación y limpieza de registros, con Microsoft Office para organizar la información.',
}

export const education = [
  {
    title: 'Bachillerato Universitario',
    detail: 'Ingeniería en Sistemas de Computación',
    school: 'Fidélitas',
    period: '2021 – 2025',
    cert: '/img/titles/uni.jpg',
    certAlt: 'Título universitario',
  },
  {
    title: 'Bachillerato en Educación Media',
    detail: '',
    school: 'Colegio San Luis Gonzaga',
    period: '2016 – 2020',
    cert: '/img/titles/BEM.jpg',
    certAlt: 'Título de bachillerato',
  },
]

export const certifications = [
  {
    title: 'Scrum Fundamentals Certified',
    detail: '',
    school: 'SCRUMstudy',
    period: '2022',
    cert: '/img/titles/SCRUM.png',
    certAlt: 'Certificado Scrum Fundamentals',
  },
  {
    title: 'Curso CCNAv7',
    detail: 'Switching, Routing and Wireless Essentials',
    school: 'Cisco Networking Academy',
    period: '2023',
    cert: '/img/titles/CCNA.png',
    certAlt: 'Certificado del curso CCNAv7',
  },
]

export const tools = [
  {
    group: 'Backend y arquitectura',
    items: 'C#, ASP.NET Core, Entity Framework, Dapper, MVC y arquitectura por capas.',
  },
  {
    group: 'Desarrollo y coordinación',
    items: 'Git, GitHub, Postman, Swagger, Jira y Excel.',
  },
  {
    group: 'Automatización y APIs',
    items: 'n8n, Google Apps Script, Gmail API y OAuth2.',
  },
]
