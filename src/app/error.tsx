"use client";

// Error boundaries must be Client Components
import { useEffect } from "react";

import * as Sentry from "@sentry/nextjs";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}

// continue ... https://youtu.be/djDgTYrFMAY?list=PL0Zuz27SZ-6PCLz7VMP2QQdeKa83rshe5&t=4623
