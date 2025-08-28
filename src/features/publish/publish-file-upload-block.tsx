'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { PublishFormValues } from '../../app/publier/page';
import { DragDropInput } from '../../components/form/drag-drop-input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

const PublishFileUploadBlock = () => {
  const { register, setValue, watch } = useFormContext<PublishFormValues>();
  const file = watch('file');

  useEffect(() => {
    register('file', { validate: f => !!f || 'Le fichier est requis' });
  }, [register]);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Fichier vidéo</h2>
        <p className="text-foreground/55 text-sm">
          Glissez-déposer votre vidéo ou cliquez pour la sélectionner
        </p>
      </CardHeader>
      <CardContent>
        <DragDropInput
          accept="video/*"
          multiple={true}
          maxSize={100}
          onFilesChange={(files: File[]) => {
            const f = files?.[0] ?? null;
            setValue('file', f, { shouldValidate: true, shouldDirty: true });
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PublishFileUploadBlock;
