'use client';

import { Bell } from 'lucide-react';
import { ProfileNotificationItem } from '../../components/profile-notification-item';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const notificationSettings = [
  {
    label: 'Notifications par email',
    description: "Recevoir des emails sur l'activité de vos vidéos",
    isEnabled: true,
  },
  {
    label: 'Notifications push',
    description: 'Notifications en temps réel dans le navigateur',
    isEnabled: true,
  },
  {
    label: 'Rapport hebdomadaire',
    description: 'Résumé de vos performances chaque semaine',
    isEnabled: false,
  },
];

const ProfileNotificationBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Bell className="h-5" />
          Préférences de notification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationSettings.map((setting, i) => (
          <ProfileNotificationItem key={i} {...setting} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ProfileNotificationBlock;
