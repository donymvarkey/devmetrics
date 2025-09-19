import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import type { ReactNode } from "react";

interface AppCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}

const AppCard = ({ title, children, className, footer }: AppCardProps) => {
  return (
    <Card className={cn("border-0 shadow-md", className)}>
      {title && (
        <CardHeader className="bg-muted/10 px-4 py-0">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
        </CardHeader>
      )}
      <CardContent className="px-4">{children}</CardContent>
      {footer && (
        <CardFooter className="border-t px-6 py-4">{footer}</CardFooter>
      )}
    </Card>
  );
};

export default AppCard;
