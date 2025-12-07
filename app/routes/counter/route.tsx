import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>A simple counter using shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-6xl font-bold">{count}</div>
          <div className="flex gap-2">
            <Button
              onClick={() => setCount(count - 1)}
              variant="outline"
              className="flex-1"
            >
              -
            </Button>
            <Button
              onClick={() => setCount(0)}
              variant="secondary"
              className="flex-1"
            >
              Reset
            </Button>
            <Button onClick={() => setCount(count + 1)} className="flex-1">
              +
            </Button>
          </div>
          <Button asChild variant="ghost" className="w-full">
            <Link to="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
