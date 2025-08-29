'use client';

import { Lock } from 'lucide-react';
import { toast } from 'sonner';
import { Field } from '../../components/form/field';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';

const ProfileSecurityBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Lock className="h-5" />
          Sécurité
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-2">
        <div>
          <p className="text-lg font-bold">Mot de passe</p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Dernière modification il y a 2 mois
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Modifier</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Modifier le mot de passe</DialogTitle>
              <DialogDescription>
                Entrez votre mot de passe actuel puis votre nouveau mot de
                passe.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Field label="Mot de passe actuel" name="actualPassword" />
              <Field label="Nouvea mot de passe" name="newPassword" />
              <Field
                label="Confirmer le nouveau mot de passe"
                name="confirmNewPassword"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Annuler</Button>
              </DialogClose>

              <DialogClose asChild>
                <Button
                  variant="primary"
                  onClick={() => toast.success('Mot de passe mis à jour !')}
                >
                  Mettre à jour
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileSecurityBlock;
