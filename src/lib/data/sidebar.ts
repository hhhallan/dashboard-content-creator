import {
  Calendar,
  FileText,
  History,
  LayoutDashboard,
  Upload,
} from 'lucide-react';

export const items = [
  {
    title: 'Accueil',
    url: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Publier',
    url: '/publier',
    icon: Upload,
  },
  {
    title: 'Historique',
    url: '/historique',
    icon: History,
  },
  {
    title: 'Calendrier',
    url: '/calendrier',
    icon: Calendar,
  },
  {
    title: 'Logs',
    url: '/logs',
    icon: FileText,
  },
];
