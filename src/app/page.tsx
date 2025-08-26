'use client';

import { AlertTriangle, Calendar, Eye, Users } from 'lucide-react';
import { KpiCard } from '../components/kpi-card';
import { TableRecentVideos } from '../components/table-recent-videos';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  const stats = [
    {
      label: 'Prochaine vidéo',
      value: '20 Jan - 15:30',
      icon: Calendar,
      subtitle: 'Programmée',
    },
    {
      label: 'Vidéos cette semaine',
      value: 3,
      icon: Users,
      subtitle: '+2 par rapport à la semaine dernière',
      variant: 'success' as const,
    },
    {
      label: 'Vues totales',
      value: '147 805',
      icon: Eye,
      subtitle: 'Depuis le début sur la plateforme',
    },
    {
      label: 'Publications échouées',
      value: 1,
      icon: AlertTriangle,
      subtitle: 'Nécessite votre attention',
      variant: 'danger' as const,
    },
  ];

  return (
    <section className="space-y-6">
      <Card className="shadow-none bg-gradient-brand text-white border-none">
        <CardContent className="space-y-2">
          <h1 className="text-2xl font-bold">Bonjour Allan ! 👍</h1>
          <p>Voici un aperçu de votre activité récente sur la plateforme.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <KpiCard item={stat} key={i} />
        ))}
      </div>

      <TableRecentVideos />
    </section>
  );
}
