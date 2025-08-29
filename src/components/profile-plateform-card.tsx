'use client';

import { Check, LucideIcon, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type ProfilePlatformCardItem = {
  app: string;
  icon: LucideIcon;
  isConnected: boolean;
};

interface ProfilePlatformCardProps {
  platform: ProfilePlatformCardItem;
}

export const ProfilePlatformCard = ({ platform }: ProfilePlatformCardProps) => {
  const { app, icon: AppIcon, isConnected } = platform;
  const [connected, setConnected] = useState<boolean>(isConnected);

  const handleConnectToggle = () => {
    if (connected) {
      toast('Plateforme déconnectée', {
        description: 'Votre compte TikTok a été déconnecté.',
      });
    } else {
      toast('Plateforme connectée', {
        description: 'Votre compte TikTok a été connecté.',
      });
    }
    setConnected(!connected);
  };

  return (
    <Card className="shadow-none">
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <AppIcon className="size-4 md:size-8" />
          <div>
            <span className="font-bold">{app}</span>
            <p className="hidden md:block text-muted-foreground text-sm">
              Publiez automatiquement sur {app}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant={connected ? 'success' : 'destructive'}>
            {connected ? (
              <Check className="size-3 mr-1 text-green-500" />
            ) : (
              <X className="size-3 mr-1 text-red-600" />
            )}

            {connected ? 'Connecté' : 'Déconnecté'}
          </Badge>

          <Button
            variant="outline"
            className="w-auto"
            onClick={handleConnectToggle}
          >
            {connected ? 'Déconnecter' : 'Connecter'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
