'use client';

import { Instagram, Music, Youtube } from 'lucide-react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import type { PublishFormValues } from '../../app/publier/page';
import { PublishPlatformItem } from '../../components/publish-platform-item';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

const platforms = [
  { name: 'TikTok', icon: Music, color: 'bg-slate-900' },
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  { name: 'YouTube', icon: Youtube, color: 'bg-red-600' },
];

const PublishPlatformBlock = () => {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext<PublishFormValues>();
  const selected = watch('platforms');

  // Enregistrer et valider "platforms"
  useEffect(() => {
    register('platforms', {
      validate: arr =>
        (arr?.length ?? 0) > 0 || 'Sélectionne au moins une plateforme',
    });
  }, [register]);

  const toggle = (name: string) => {
    const next = selected.includes(name)
      ? selected.filter(p => p !== name)
      : [...selected, name];
    setValue('platforms', next, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Plateformes de publication</h2>
        <p className="text-foreground/55 text-sm">
          Sélectionnez les plateformes où publier votre vidéo
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {platforms.map(p => (
            <PublishPlatformItem
              key={p.name}
              name={p.name}
              icon={p.icon}
              color={p.color}
              checked={selected.includes(p.name)}
              onToggle={() => toggle(p.name)}
            />
          ))}
        </div>

        {errors.platforms?.message && (
          <p className="mt-2 text-sm text-red-500" role="alert">
            {errors.platforms.message as string}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default PublishPlatformBlock;
