'use client';

import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader } from './ui/card';

type KpiVariant = 'default' | 'success' | 'danger';

interface KpiItem {
  label: string;
  value: string | number;
  icon: React.ElementType;
  subtitle: string;
  variant?: KpiVariant;
}

interface KpiCardProps {
  item: KpiItem;
}

const valueColorByVariant: Record<KpiVariant, string> = {
  default: '',
  success: 'text-green-500',
  danger: 'text-red-500',
};

export const KpiCard = ({ item }: KpiCardProps) => {
  const { label, value, subtitle, variant: itemVariant } = item;

  const v: KpiVariant = itemVariant ?? 'default';

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{label}</h3>
        <item.icon className="size-4 text-foreground/45" />
      </CardHeader>
      <CardContent>
        <p className={cn('text-2xl font-medium', valueColorByVariant[v])}>
          {value}
        </p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};
