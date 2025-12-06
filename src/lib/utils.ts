// Utility function for merging classNames (shadcn/ui requirement)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

