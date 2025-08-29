'use client';

import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import type { PublishFormValues } from '../../app/publier/page';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { cn } from '../../lib/utils';

const PublishValidationStatesBlock = () => {
  const { watch } = useFormContext<PublishFormValues>();
  const file = watch('file');
  const title = watch('title');
  const platforms = watch('platforms');

  const checks = {
    file: !!file,
    title: (title ?? '').trim().length > 0,
    platforms: (platforms ?? []).length > 0,
  };

  const Row = ({ ok, label }: { ok: boolean; label: string }) => (
    <div className="flex items-center space-x-2">
      {ok ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      ) : (
        <AlertCircle className="h-4 w-4 text-slate-400" />
      )}
      <span
        className={cn('text-sm', ok ? 'text-emerald-700' : 'text-slate-600')}
      >
        {label}
      </span>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statut de validation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Row ok={checks.file} label="Fichier vidéo" />
        <Row ok={checks.title} label="Titre de la vidéo" />
        <Row ok={checks.platforms} label="Plateforme sélectionnée" />
      </CardContent>
    </Card>
  );
};

export default PublishValidationStatesBlock;
