'use client';

import {
  PublishActionsBlock,
  PublishFileUploadBlock,
  PublishInformationBlock,
  PublishPlatformBlock,
  PublishProgramBlock,
  PublishValidationStatesBlock,
} from '@/features/publish/publish';
import { FormProvider, useForm } from 'react-hook-form';

export type PublishFormValues = {
  file: File | null;
  title: string;
  description?: string;
  platforms: string[];
};

const PublierPage = () => {
  const methods = useForm<PublishFormValues>({
    mode: 'onChange',
    defaultValues: {
      file: null,
      title: '',
      platforms: [],
    },
  });
  return (
    <FormProvider {...methods}>
      <section className="space-y-6 max-w-[885px] mx-auto">
        {/* <section className="space-y-6"> */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Publier une vidéo</h1>
          <p className="text-muted-foreground">
            Créez et publiez sur vos plateformes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6 lg:col-span-2">
            <PublishFileUploadBlock />
            <PublishInformationBlock />
            <PublishPlatformBlock />
          </div>

          <div className="space-y-6">
            <PublishValidationStatesBlock />
            <PublishProgramBlock />
            <PublishActionsBlock />
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

export default PublierPage;
