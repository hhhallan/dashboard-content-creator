import { toast } from 'sonner';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const PublishActionsBlock = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Button
          variant="action"
          onClick={() => toast.success('Vidéo publiée !')}
        >
          Publier maintenant
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success('Programmation sauvegardée !')}
        >
          Programmer la vidéo
        </Button>
      </CardContent>
    </Card>
  );
};

export default PublishActionsBlock;
