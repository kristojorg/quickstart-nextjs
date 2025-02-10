import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { signUp } from "./actions";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={signUp}>
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <Logo />
            <h1 className="text-2xl font-bold">Sign up for Flashcards</h1>
          </CardHeader>
          <CardContent>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" />
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign up</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
