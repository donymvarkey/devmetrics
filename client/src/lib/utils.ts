import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIfAuthenticated(isAuthenticated: boolean) {
  if (!isAuthenticated) {
    return false;
  }
  return true;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
}
