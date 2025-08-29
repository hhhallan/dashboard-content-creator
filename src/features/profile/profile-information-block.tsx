'use client';

import { User } from 'lucide-react';
import { toast } from 'sonner';
import { Field } from '../../components/form/field';
import { FieldGroup } from '../../components/form/field-group';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { user } from '../../lib/data/user';

const ProfileInformationBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <User className="h-5" />
          Informations personnelles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <div className="rounded-full size-20 md:size-12 lg:size-20 bg-gradient-brand text-xl text-white font-medium flex items-center justify-center">
            {user.initials}
          </div>
          <div>
            <p className="font-bold">{`${user.name} ${user.lastname}`}</p>
            <p className="text-muted-foreground text-sm">{user.email}</p>
            <Badge variant="pro">Pro</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <FieldGroup>
            <Field label={'Prénom'} name={'prenom'} defaultValue={user.name} />
            <Field label={'Nom'} name={'nom'} defaultValue={user.lastname} />
          </FieldGroup>

          <Field
            label="Adresse email"
            name="email"
            type="email"
            defaultValue={user.email}
          />

          <Button
            variant="action"
            onClick={() => toast.success('Modifications sauvegardées !')}
          >
            Sauvegarder
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInformationBlock;
