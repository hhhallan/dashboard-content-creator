import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const PublishActionsBlock = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Button variant="action">Publier maintenant</Button>
        <Button variant="outline">Programmer la vidéo</Button>
      </CardContent>
    </Card>
  );
};

export default PublishActionsBlock;
