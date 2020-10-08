export interface ProjectI {
  name: string;
  url: string;
  url_app?: string;
  preview?: boolean;
  code?: boolean;
  download?: boolean;
  app?: boolean;
}

export const dataProjects: ProjectI[] = [
  {
    name: 'GO finanzas',
    url: 'http://gofinanzas.com/',
    preview: true,
  },
  {
    name: 'Entre Pinos',
    url: 'http://entrepinoshostal.com/',
    preview: true,
  },
  {
    name: 'Oral Center',
    url: 'http://oralcenter.com.co/',
    preview: true,
  },
  {
    name: 'Conexiones',
    url: 'http://conexiones.net.co/',
    preview: true,
  },
  {
    name: 'Zeus Consultores',
    url: 'http://zeusconsultores.com/',
    preview: true,
  },
  {
    name: 'I.E Santo Domingo Savio',
    url: 'http://www.iesantodomingosavio.edu.co/',
    preview: true,
  },
  {
    name: 'Antorcha Films',
    url: 'http://atarrayaitinerante.org/ebookapp/index.html',
    preview: true,
  },
  {
    name: 'Rakin.org',
    url: 'http://rakin.org/',
    preview: true,
  },
  {
    name: 'JurisQuiz',
    url: 'https://play.google.com/store/apps/details?id=com.zopp.jurisquiz',
    url_app: 'https://play.google.com/store/apps/details?id=com.zopp.jurisquiz',
    app: true,
  },
  {
    name: 'Therapy Tips for',
    url: 'https://play.google.com/store/apps/details?id=com.zopp.artritis',
    url_app: 'https://play.google.com/store/apps/details?id=com.zopp.artritis',
    app: true,
  },
  {
    name: 'Zopp Agency',
    url: 'http://zoppagency.com',
    preview: true,
  },
  {
    name: 'Buffalo Republic',
    url: 'http://buffalorepublic.menu',
    preview: true,
  },
  {
    name: 'EasyNet',
    url: 'http://easynet.com.co',
    preview: true,
  },
  {
    name: 'CliniWeb',
    url: 'http://cliniweb.co',
    preview: true,
  },
  {
    name: 'Clinica de Artritis',
    url: 'http://clinicadeartritistemprana.com/',
    preview: true,
  },
  {
    name: 'Finca y Café',
    url: 'http://fincaycafe.com',
    preview: true,
  },
];
