import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  donationAmounts,
  donationFrequencies,
  formatInr,
  images,
  programs,
  site,
} from "@/content/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: `Donate — ${site.name}` },
      {
        name: "description",
        content: `Learn about ${site.name}'s community-focused work and explore a demonstration donation selection.`,
      },
    ],
  }),
  component: Donate,
});

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<(typeof donationAmounts)[number] | "custom">(
    donationAmounts[0],
  );
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<(typeof donationFrequencies)[number]["id"]>("once");
  const selectedFrequency = donationFrequencies.find((option) => option.id === frequency);
  const parsedCustomAmount = Number(customAmount);
  const customAmountError =
    selectedAmount !== "custom"
      ? null
      : customAmount.trim() === ""
        ? "Enter a custom amount of at least ₹1."
        : !Number.isFinite(parsedCustomAmount) || parsedCustomAmount < 1
          ? "Enter a valid amount of at least ₹1."
          : !Number.isInteger(parsedCustomAmount)
            ? "Enter a whole amount in rupees."
            : null;
  const displayedAmount =
    selectedAmount === "custom" ? (customAmountError ? null : parsedCustomAmount) : selectedAmount;

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          image={images.heroDonate}
          imageAlt={`AI-generated illustrative placeholder photograph; it does not depict actual ${site.name} beneficiaries, programmes, or locations.`}
          eyebrow={`Support ${site.name}`}
          title="Make Change Possible."
          description="Your support can help sustain community-focused work towards a fairer, healthier, and more sustainable future."
        />
        <p className="bg-ivory px-6 py-3 text-right text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          AI-generated illustrative placeholder photography
        </p>

        <section
          aria-labelledby="why-support-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Why support matters
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="why-support-heading"
                className="max-w-4xl font-serif text-3xl font-medium leading-tight text-forest md:text-5xl md:leading-[1.08]"
              >
                Sustained support can make room for work that grows with community priorities.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                {site.name}'s programme areas include education, sustainable livelihoods, health and
                wellbeing, and the environment. Continued community-focused work takes time,
                listening, and care for what people value and need. Support can help sustain that
                work, without any single contribution guaranteeing a particular outcome.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="programmes-heading"
          className="bg-ivory px-6 py-16 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Areas of work
              </p>
              <h2
                id="programmes-heading"
                className="mt-3 font-serif text-4xl font-medium text-forest md:text-5xl"
              >
                Four connected programme areas.
              </h2>
            </Reveal>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program, index) => (
                <Reveal key={program.id} delay={index * 0.09}>
                  <article className="card-interactive flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl font-medium text-forest">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {program.shortDescription}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="donation-selection-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                A considered choice
              </p>
              <h2
                id="donation-selection-heading"
                className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl"
              >
                Choose an amount to explore.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Select an amount and frequency to see a summary. This is a demonstration only:
                online donations are not yet enabled, and this page will not process a payment.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-border bg-card p-6 shadow-sm sm:p-8">
                <fieldset>
                  <legend className="text-sm font-semibold text-forest">Select an amount</legend>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {donationAmounts.map((optionAmount) => {
                      const selected = selectedAmount === optionAmount;
                      const id = `donation-amount-${optionAmount}`;
                      return (
                        <label
                          key={optionAmount}
                          htmlFor={id}
                          className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border px-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:shadow-xs focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring ${
                            selected
                              ? "border-forest bg-forest text-ivory shadow-xs"
                              : "border-border bg-ivory text-forest hover:border-forest/50"
                          }`}
                        >
                          <input
                            id={id}
                            type="radio"
                            name="donation-amount"
                            value={optionAmount}
                            checked={selected}
                            onChange={() => setSelectedAmount(optionAmount)}
                            className="h-4 w-4 shrink-0 accent-[var(--forest)]"
                          />
                          {formatInr(optionAmount)}
                        </label>
                      );
                    })}
                    <label
                      htmlFor="donation-amount-custom"
                      className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border px-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:shadow-xs focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring ${
                        selectedAmount === "custom"
                          ? "border-forest bg-forest text-ivory shadow-xs"
                          : "border-border bg-ivory text-forest hover:border-forest/50"
                      }`}
                    >
                      <input
                        id="donation-amount-custom"
                        type="radio"
                        name="donation-amount"
                        value="custom"
                        checked={selectedAmount === "custom"}
                        onChange={() => setSelectedAmount("custom")}
                        className="h-4 w-4 shrink-0 accent-[var(--forest)]"
                      />
                      Custom Amount
                    </label>
                  </div>
                  {selectedAmount === "custom" ? (
                    <div className="mt-5">
                      <label
                        htmlFor="donation-custom-input"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Custom amount in Indian Rupees
                      </label>
                      <div className="flex items-center rounded-md border border-input bg-card focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring">
                        <span
                          aria-hidden="true"
                          className="pl-3.5 text-sm font-medium text-muted-foreground"
                        >
                          ₹
                        </span>
                        <input
                          id="donation-custom-input"
                          name="custom-amount"
                          type="number"
                          inputMode="numeric"
                          min="1"
                          step="1"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(event) => setCustomAmount(event.target.value)}
                          aria-invalid={Boolean(customAmountError)}
                          aria-describedby={
                            customAmountError ? "donation-custom-error" : "donation-custom-hint"
                          }
                          className="w-full rounded-md bg-transparent px-2.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none"
                        />
                      </div>
                      {customAmountError ? (
                        <p
                          id="donation-custom-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-destructive"
                        >
                          {customAmountError}
                        </p>
                      ) : (
                        <p
                          id="donation-custom-hint"
                          className="mt-1.5 text-xs text-muted-foreground"
                        >
                          Enter a whole amount of ₹1 or more.
                        </p>
                      )}
                    </div>
                  ) : null}
                </fieldset>

                <fieldset className="mt-7">
                  <legend className="text-sm font-semibold text-forest">Select a frequency</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {donationFrequencies.map((option) => {
                      const selected = frequency === option.id;
                      const id = `donation-frequency-${option.id}`;
                      return (
                        <label
                          key={option.id}
                          htmlFor={id}
                          className={`flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:shadow-xs focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring ${
                            selected
                              ? "border-forest bg-forest text-ivory shadow-xs"
                              : "border-border bg-ivory text-forest hover:border-forest/50"
                          }`}
                        >
                          <input
                            id={id}
                            type="radio"
                            name="donation-frequency"
                            value={option.id}
                            checked={selected}
                            onChange={() => setFrequency(option.id)}
                            className="h-4 w-4 shrink-0 accent-[var(--forest)]"
                          />
                          {option.label}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div
                  className="mt-8 border-y border-border py-5"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Your selection
                  </p>
                  {displayedAmount === null ? (
                    <p className="mt-2 font-serif text-2xl font-medium text-muted-foreground">
                      Enter a valid amount to see your selection.
                    </p>
                  ) : (
                    <p className="mt-2 font-serif text-3xl font-medium text-forest">
                      {formatInr(displayedAmount)}
                      {frequency === "monthly" ? " monthly" : " one-time"}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selectedFrequency?.label} demonstration selection
                  </p>
                </div>

                <div role="status" className="mt-6 border border-olive/40 bg-beige/45 p-4">
                  <p className="text-sm font-semibold text-forest">
                    Online donations are not yet enabled.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    This selection is for demonstration only. No payment will be processed, no
                    payment details are collected, and no money is transferred.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="transparency-heading"
          className="bg-ivory px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Trust and transparency
              </p>
              <h2
                id="transparency-heading"
                className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl"
              >
                Clear information matters.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                Verified programme information and financial reporting should be shared as they
                become available. We will not present unconfirmed figures or unsupported claims
                about how contributions are used as established facts.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <figure>
                <img
                  src={images.closingImpact}
                  alt={`AI-generated illustrative placeholder photograph; it does not depict an actual ${site.name} community, programme, or outcome.`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Illustrative placeholder photography
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <ClosingCta
          eyebrow="Continue exploring"
          title="Find out more before you take your next step."
          description="Learn about the programmes, the approach to impact, or other ways to participate."
          primaryCta={{ label: "Our work", to: "/work" }}
          secondaryCta={{ label: "Our impact", to: "/impact" }}
          tertiaryCta={{ label: "Get involved", to: "/get-involved" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
