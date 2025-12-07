import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">
            Vite + React + Prisma Starter
          </CardTitle>
          <CardDescription className="text-base">
            A modern full-stack starter template with shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm">
                React Router 7 with file-based routing
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm">
                Prisma ORM for type-safe database access
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm">
                Vite for fast development experience
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm">shadcn/ui component library</span>
            </div>
          </div>
          <Button asChild className="w-full">
            <Link to="/counter">Try Counter Demo</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
