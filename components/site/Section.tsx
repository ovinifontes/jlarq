import { cn } from "@/lib/utils";

type Ground = "paper" | "ink" | "bare";

/** Consistent section ground + scroll anchor offset. */
export function Section({
  id,
  ground = "paper",
  className,
  children,
}: {
  id?: string;
  ground?: Ground;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20",
        ground === "paper" && "bg-paper text-ink",
        ground === "ink" && "bg-ink text-paper",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Editorial container: wide max width, fluid horizontal gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[88rem] px-6 md:px-12 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
