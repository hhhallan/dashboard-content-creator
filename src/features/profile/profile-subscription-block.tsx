import { Check, CreditCard, Crown } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const fonctionnalities = [
  '50 vidéos/mois',
  'Toutes plateformes',
  'Statistiques avancées',
  'Support prioritaire',
];

const ProfileSubscriptionBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Crown className="h-5" />
          Abonnement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Card className="shadow-none bg-gradient-to-r from-violet-50 to-rose-50 border-none">
          <CardContent className="flex items-center gap-4">
            <span className="text-3xl">🚀</span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-xl">Pro</h3>
                <Badge variant="pro">29€/mois</Badge>
              </div>
              <p className="text-muted-foreground text-xs">
                Valide jusqu&apos;au 31/12/2026
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <p className="font-bold">Fonctionnalités incluses:</p>
          <ul>
            {fonctionnalities.map((fonc, i) => (
              <li key={i} className="flex items-center">
                <Check className="size-4 text-green-500 mr-2" />
                <p className="text-muted-foreground text-sm">{fonc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-right">
          <Button variant="action" className="w-full">
            <CreditCard className="size-4 mr-2" />
            Changer de plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSubscriptionBlock;
