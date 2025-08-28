'use client';

import { Instagram, Link, Music, Youtube } from 'lucide-react';
import { ProfilePlatformCard } from '../../components/profile-plateform-card';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

const platforms = [
  { app: 'TikTok', icon: Music, isConnected: true },
  { app: 'Youtube', icon: Youtube, isConnected: false },
  { app: 'Instagram', icon: Instagram, isConnected: true },
];

const ProfilePlatformBlock = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Link className="h-5" />
          <h2 className="text-xl font-medium">Intégrations de plateformes</h2>
        </div>
        <p className="text-foreground/55 text-xs md:text-sm">
          Connectez vos comptes pour publier automatiquement vos vidéos
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {platforms.map((platform, i) => (
          <ProfilePlatformCard key={i} platform={platform} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ProfilePlatformBlock;
