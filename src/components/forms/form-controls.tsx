import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Shared editorial form styling for labels, inputs, and status messages. */

export const inputClass =
  "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-2 aria-[invalid=true]:border-destructive";

export const selectClass = cn(inputClass, "appearance-none bg-card");

export function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-destructive">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitButton({
  pending,
  label,
  pendingLabel = "Sending…",
  className,
}: {
  pending: boolean;
  label: string;
  pendingLabel?: string;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-forest-deep active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none",
        className,
      )}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

export function SubmissionError({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 p-4">
      <p className="text-sm font-medium text-destructive">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 text-sm font-medium text-destructive underline underline-offset-4 hover:no-underline"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
