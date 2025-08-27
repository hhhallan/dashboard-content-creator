'use client';

import { useState } from 'react';
import { Switch } from './ui/switch';

interface ProfileNotificationItemProps {
  label: string;
  description: string;
  isEnabled: boolean;
}

export const ProfileNotificationItem = ({
  label,
  description,
  isEnabled,
}: ProfileNotificationItemProps) => {
  const [enabled, setEnabled] = useState<boolean>(isEnabled);

  const handleSwitch = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div>
        <p className="md:text-lg font-bold">{label}</p>
        <p className="text-foreground/55 text-xs md:text-sm">{description}</p>
      </div>

      <Switch checked={enabled} onCheckedChange={handleSwitch} />
    </div>
  );
};
