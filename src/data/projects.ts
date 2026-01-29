import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'caadi',
    title: 'CAADI',
    githubUrl: 'https://github.com/arielvincennao/caadi',
    liveUrl: 'https://caadi.vercel.app/',
    description: 'Proyecto desarrollado en conjunto de la Facultad de Exactas de la Universidad Nacional del Centro de la Provincia de Buenos Aires. La plataforma se enfoca en centralizar información administrativa, cultural y de servicios orientados a personas con discapacidad. Su propósito es facilitar el acceso a recursos útiles y favorecer una participación más activa, autónoma e inclusiva dentro de la comunidad. Actualmente está en desarrollo, y utiliza la pila de tecnologías MERN.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    technologyColors: {
      'React': { bg: 'bg-red-900/30', text: 'text-red-300', border: 'border-red-800/50' },
      'Next.js': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'Tailwind CSS': { bg: 'bg-cyan-900/30', text: 'text-cyan-300', border: 'border-cyan-800/50' },
      'Supabase': { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-800/50' },
    }
  },
  {
    id: 'descendify',
    title: 'DESCENDIFY APP',
    githubUrl: 'https://github.com/arielvincennao/descendify-app',
    description: 'Una plataforma colaborativa (actualmente en desarrollo) para crear y preservar su árbol genealógico. Los usuarios pueden agregar parientes con información detallada y fotos, definir parentescos y explorar visualmente su ascendencia.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    technologyColors: {
      'React': { bg: 'bg-red-900/30', text: 'text-red-300', border: 'border-red-800/50' },
      'Next.js': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'Tailwind CSS': { bg: 'bg-cyan-900/30', text: 'text-cyan-300', border: 'border-cyan-800/50' },
      'Supabase': { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-800/50' },
    }
  },
  {
    id: 'spoiler-five',
    title: 'SPOILER FIVE INC',
    githubUrl: 'https://github.com/arielvincennao/spoiler-five-inc-app',
    liveUrl: 'https://spoiler-five-inc-app.vercel.app/index.html',
    description: 'Una aplicación de streaming de música desarrollada para un proyecto universitario sobre interfaces y experiencia de usuario. Incluye vistas para iniciar sesión, administrar cuentas, planes, ayuda, resultados de búsqueda y listas de reproducción.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologyColors: {
      'HTML': { bg: 'bg-yellow-900/30', text: 'text-yellow-300', border: 'border-yellow-800/50' },
      'CSS': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'JavaScript': { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-800/50' },
    }
  },
  {
    id: 'retirement-calculator',
    title: 'RETIREMENT CALCULATOR AR',
    githubUrl: 'https://github.com/arielvincennao/calculadora-jubilacion-ar',
    liveUrl: 'https://calculadora-jubilacion-ar.vercel.app/',
    description: 'Una plataforma web interactiva que ayuda a los trabajadores argentinos a simular y planificar su jubilación. Los usuarios pueden guardar datos salariales personales, configurar variables y realizar múltiples cálculos con comparación y seguimiento del historial.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    technologyColors: {
      'Next.js': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'Tailwind CSS': { bg: 'bg-cyan-900/30', text: 'text-cyan-300', border: 'border-cyan-800/50' },
      'Supabase': { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-800/50' },
    }
  },
  {
    id: 'weather-app',
    title: 'WEATHER APP',
    githubUrl: 'https://github.com/arielvincennao/weather-app',
    liveUrl: 'https://weather-app-sigma-ten-74.vercel.app/',
    description: 'Una aplicación web para comprobar el tiempo actual de cualquier ciudad del mundo con una interfaz limpia e intuitiva.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    technologyColors: {
      'Next.js': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'Tailwind CSS': { bg: 'bg-cyan-900/30', text: 'text-cyan-300', border: 'border-cyan-800/50' },
      'Supabase': { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-800/50' },
    }
  },
  {
    id: 'password-generator',
    title: 'JS PASSWORD GENERATOR',
    githubUrl: 'https://github.com/arielvincennao/js-password-gen',
    liveUrl: 'https://js-password-gen-sage.vercel.app/',
    description: 'Un generador de contraseñas simple pero efectivo que crea contraseñas seguras y personalizadas según las especificaciones del usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologyColors: {
      'HTML': { bg: 'bg-yellow-900/30', text: 'text-yellow-300', border: 'border-yellow-800/50' },
      'CSS': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'JavaScript': { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-800/50' },
    }
  },
  {
    id: 'mayi-bot',
    title: 'MAYI BOT',
    githubUrl: 'https://github.com/arielvincennao/discord-bot-mayi',
    description: 'Mayi Bot es un bot de Discord inspirado en las frases icónicas de un amigo. Responde a comandos específicos. \n\n Interacción en el canal de voz: Al activar un comando, el bot se une al canal de voz del usuario, reproduce un clip de audio predefinido con la frase seleccionada y se retira. \n\n Imágenes aleatorias de gatos: Si se lo pides, el bot envía fotos aleatorias de gatos al chat de texto.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologyColors: {
      'HTML': { bg: 'bg-yellow-900/30', text: 'text-yellow-300', border: 'border-yellow-800/50' },
      'CSS': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-800/50' },
      'JavaScript': { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-800/50' },
    }
  }
];
