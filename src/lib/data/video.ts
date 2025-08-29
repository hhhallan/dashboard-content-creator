export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  platforms: ('tiktok' | 'instagram' | 'youtube')[];
  status: 'published' | 'scheduled' | 'failed' | 'draft';
  publishDate: string;
  views: number;
  likes: number;
  comments: number;
  hashtags: string[];
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Tutoriel React - Les Hooks expliqués',
    description:
      'Une explication complète des React Hooks avec des exemples pratiques.',
    thumbnail: '🎥',
    platforms: ['tiktok', 'instagram', 'youtube'],
    status: 'published',
    publishDate: '2024-01-15T10:00:00Z',
    views: 12500,
    likes: 890,
    comments: 156,
    hashtags: ['#react', '#javascript', '#programmation', '#tutorial'],
  },
  {
    id: '2',
    title: 'Top 5 des erreurs TypeScript',
    description:
      'Les erreurs les plus communes en TypeScript et comment les éviter.',
    thumbnail: '📚',
    platforms: ['youtube'],
    status: 'scheduled',
    publishDate: '2024-01-20T15:30:00Z',
    views: 0,
    likes: 0,
    comments: 0,
    hashtags: ['#typescript', '#javascript', '#erreurs', '#conseil'],
  },
  {
    id: '3',
    title: 'Mon setup de développeur 2024',
    description: 'Découvrez mon environnement de développement complet.',
    thumbnail: '💻',
    platforms: ['instagram'],
    status: 'failed',
    publishDate: '2024-01-18T08:00:00Z',
    views: 0,
    likes: 0,
    comments: 0,
    hashtags: ['#setup', '#développeur', '#workspace', '#tech'],
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox - Comparaison',
    description: 'Quelle technique choisir pour vos layouts CSS ?',
    thumbnail: '🎨',
    platforms: ['tiktok', 'youtube'],
    status: 'published',
    publishDate: '2024-01-12T14:00:00Z',
    views: 8760,
    likes: 567,
    comments: 89,
    hashtags: ['#css', '#grid', '#flexbox', '#layout'],
  },
  {
    id: '5',
    title: 'Introduction à Next.js 14',
    description:
      'Découvrez les nouveautés de Next.js 14 avec des exemples pratiques.',
    thumbnail: '⚡',
    platforms: ['instagram', 'youtube'],
    status: 'published',
    publishDate: '2024-01-10T16:45:00Z',
    views: 15200,
    likes: 1234,
    comments: 201,
    hashtags: ['#nextjs', '#react', '#framework', '#web'],
  },
];
