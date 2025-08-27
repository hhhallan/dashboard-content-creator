'use client';

import { AlertTriangle, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

const ProfileDangerZone = () => {
  return (
    <Card className="border-red-500/20">
      <CardHeader className="flex items-center gap-2 text-red-700">
        <AlertTriangle className="h-5" />
        <h2 className="text-xl font-medium">Zone de danger</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full border-red-500/20 text-red-600"
              variant="outline"
            >
              <LogOut />
              Se déconnecter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmer la déconnexion</DialogTitle>
              <DialogDescription>
                Êtes-vous sûr de vouloir vous déconnecter de votre compte ?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Annuler</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="primary"
                  className="bg-red-500/80"
                  onClick={() => toast.success('Déconnexion réussie !')}
                >
                  Se déconnecter
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full border-red-500/20 text-red-600"
              variant="outline"
            >
              Supprimer le compte
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Supprimer définitivement votre compte ?</DialogTitle>
              <DialogDescription>
                Cette action est irréversible. Toutes vos données seront
                supprimées définitivement.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Annuler</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="primary"
                  className="bg-red-500/80"
                  onClick={() => toast.success('Votre compte a été supprimé !')}
                >
                  Supprimer le compte
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileDangerZone;
