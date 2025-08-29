'use client';

import { useFormContext } from 'react-hook-form';
import { PublishFormValues } from '../../app/publier/page';
import { Field } from '../../components/form/field';
import { InputHashtags } from '../../components/form/hastags-input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const PublishInformationBlock = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PublishFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations de la vidéo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Field
          label="Titre"
          name="title"
          placeholder="Entrez le titre de votre vidéo"
          register={register}
          rules={{ required: 'Le titre est requis' }}
          error={errors.title?.message}
          required
        />
        <Field
          label="Description"
          name="description"
          placeholder="Décrivez votre vidéo..."
          type="textarea"
          register={register}
        />
        <InputHashtags />
      </CardContent>
    </Card>
  );
};

export default PublishInformationBlock;
