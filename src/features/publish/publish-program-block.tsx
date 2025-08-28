import { Field } from '../../components/form/field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const PublishProgramBlock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Programmation</CardTitle>
        <CardDescription>Planifiez votre publication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Field type="date" label="Date de publication" name="date" />
        <Field type="time" label="Heure" name="time" />
      </CardContent>
    </Card>
  );
};

export default PublishProgramBlock;
