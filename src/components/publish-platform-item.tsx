'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Checkbox } from './ui/checkbox';

interface PublishPlatformItemProps {
  name: string;
  icon: LucideIcon;
  color: string;
  checked: boolean;
  onToggle: () => void;
}

export const PublishPlatformItem = ({
  name,
  icon: AppIcon,
  color,
  checked,
  onToggle,
}: PublishPlatformItemProps) => {
  return (
    <div
      className={cn(
        'border rounded-lg p-4 cursor-pointer transition-all',
        checked
          ? 'border-violet-500 bg-violet-50'
          : 'border-slate-200 hover:border-slate-300'
      )}
      onClick={onToggle}
      role="button"
      aria-pressed={checked}
    >
      <div className="flex items-center gap-2">
        <div onClick={e => e.stopPropagation()} className="hidden">
          <Checkbox
            checked={checked}
            onCheckedChange={onToggle}
            aria-label={`Sélectionner ${name}`}
          />
        </div>
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center text-white',
            color
          )}
        >
          <AppIcon className="w-5 h-5" />
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};
