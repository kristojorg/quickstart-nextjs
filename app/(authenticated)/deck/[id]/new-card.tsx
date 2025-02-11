import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function NewCard({
  deckId,
  onSubmit,
}: {
  deckId: string;
  onSubmit: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={onSubmit}>
      <input type="hidden" name="deckId" value={deckId} />
      <Card>
        <CardHeader>
          <CardTitle>New Card</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <Input name="front" placeholder="Front" />
          <Separator />
          <Input name="back" placeholder="Back" />
        </CardContent>
        <CardFooter>
          <Button type="submit">Add Card</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
