const VANCOUVER_TIME = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Vancouver",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function getVancouverTime() {
  return VANCOUVER_TIME.format(new Date());
}

export default function Loading() {
  const timeLabel = getVancouverTime();

  return (
    <main
      className="ui-surface-page relative isolate flex min-h-dvh flex-col overflow-hidden px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-5 lg:px-10 lg:pb-10 lg:pt-8"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="mx-auto flex w-full max-w-[84rem] flex-1 flex-col">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-4">
          <div className="order-2 sm:order-1">
            <p className="text-sm leading-tight tracking-tight sm:text-base md:text-lg">
              <span className="font-semibold">Data Analyst</span> for work
            </p>
            <p className="text-sm leading-tight tracking-tight sm:text-base md:text-lg">
              <span className="font-semibold">Apex &amp; Football</span> for fun
            </p>
          </div>

          <p className="order-1 text-center font-display text-[clamp(1.75rem,4vw,3.125rem)] leading-none tracking-[0.02em] sm:order-2">
            AKD
          </p>

          <div className="order-3 text-left sm:text-right">
            <p className="text-sm tracking-tight text-[var(--text-muted)] sm:text-base">{timeLabel}</p>
            <p className="text-base font-semibold tracking-tight sm:text-lg md:text-xl">
              Vancouver, BC
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="font-display text-[clamp(4.5rem,18vw,13.75rem)] leading-none tracking-[0.015em] text-[var(--text-primary)] animate-akd-breathe">
              AKD
            </p>
            <p className="mt-5 text-sm tracking-[0.22em] text-[var(--text-muted)] uppercase">
              Loading portfolio
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
