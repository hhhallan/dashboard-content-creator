'use client';

import { User } from 'lucide-react';
import { toast } from 'sonner';
import { Field } from '../../components/form/field';
import { FieldGroup } from '../../components/form/field-group';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

const ProfileInformationBlock = () => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <User className="h-5" />
        <h2 className="text-xl font-medium">Informations personnelles</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <div className="rounded-full size-20 md:size-12 lg:size-20 bg-gradient-brand text-xl text-white font-medium flex items-center justify-center">
            AD
          </div>
          <div>
            <p className="font-bold">Allan Leblond</p>
            <p className="text-foreground/55 text-sm">email</p>
            <Badge variant="pro">Pro</Badge>
          </div>
        </div>

        <form className="space-y-4">
          <FieldGroup>
            <Field label={'Prénom'} name={'prenom'} />
            <Field label={'Nom'} name={'nom'} />
          </FieldGroup>

          <Field label="Adresse email" name="email" type="email" />

          <Button
            variant="action"
            onClick={() => toast.success('Modifications sauvegardées !')}
          >
            Sauvegarder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileInformationBlock;
