'use client';

import { Instagram, Link, Music, Youtube } from 'lucide-react';
import { ProfilePlatformCard } from '../../components/profile-plateform-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const platforms = [
  { app: 'TikTok', icon: Music, isConnected: true },
  { app: 'Youtube', icon: Youtube, isConnected: false },
  { app: 'Instagram', icon: Instagram, isConnected: true },
];

const ProfilePlatformBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link className="h-5" />
          Intégrations de plateforme
        </CardTitle>
        <CardDescription>
          Connectez vos comptes pour publier automatiquement vos vidéos
        </CardDescription>
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
