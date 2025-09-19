import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CustomDialogProps {
  title: string;
  description?: string;
  children: ReactNode;
  open: boolean;
  className?: string;
  onOpenChange: () => void;
}

const CustomDialog = ({
  title,
  description,
  open,
  onOpenChange,
  children,
  className = "",
}: CustomDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-0">
        <DialogHeader>
          <DialogTitle className="text-gray-50">{title}</DialogTitle>
          <DialogDescription className="text-gray-400/40">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className={cn(className)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
