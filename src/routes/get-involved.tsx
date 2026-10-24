import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

import { ButtonLink } from "@/components/button-link";
import { ClosingCta } from "@/components/closing-cta";
import { FramedImage } from "@/components/framed-image";
import { Field, SubmitButton, inputClass, selectClass } from "@/components/forms/form-controls";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { helpPaths, images, site } from "@/content/site";
import { submitVolunteerApplication } from "@/lib/forms.functions";
import { fieldErrors, volunteerSchema } from "@/lib/schemas";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: `Get Involved — ${site.name}` },
      {
        name: "description",
        content: `Contribute your time, skills, or resources to ${site.name}'s community-focused work.`,
      },
    ],
  }),
  component: GetInvolved,
});

const interestOptions = [
  { value: "education", label: "Education" },
  { value: "livelihoods", label: "Sustainable Livelihoods" },
  { value: "health", label: "Health & Wellbeing" },
  { value: "environment", label: "Environment" },
  { value: "general", label: "General Volunteering" },
] as const;

const availabilityOptions = [
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "flexible", label: "Flexible" },
] as const;

function GetInvolved() {
  const volunteerPath = helpPaths.find((path) => path.title === "Volunteer");
  const partnerPath = helpPaths.find((path) => path.title === "Partner");
  const donatePath = helpPaths.find((path) => path.title === "Donate");

  if (!volunteerPath || !partnerPath || !donatePath) {
    throw new Error("Get involved pathways are missing from src/content/site.ts.");
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          image={images.heroVolunteers}
          imageAlt={`AI-generated illustrative placeholder photograph suggesting people working together; it does not depict actual ${site.name} volunteers or activities.`}
          eyebrow="Get involved"
          title="Be Part of the Change."
          description="Contribute your time, skills, or resources to work shaped with communities."
        />
        <p className="bg-ivory px-6 py-3 text-right text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          AI-generated illustrative placeholder photography
        </p>

        <section
          aria-labelledby="pathways-heading"
          className="bg-ivory px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Find your way to contribute
                </p>
                <h2
                  id="pathways-heading"
                  className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-forest md:text-6xl"
                >
                  Many ways to make a difference.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                Choose a starting point that fits your interests and what you can offer.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 border-y border-border py-9 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-12">
              <Reveal delay={0}>
                <article className="card-interactive flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-xs">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                      01 / Give your time
                    </p>
                    <h3 className="mt-4 font-serif text-4xl font-medium text-forest md:text-5xl">
                      Volunteer
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                      {volunteerPath.description} Share your interests through the
                      expression-of-interest form below.
                    </p>
                  </div>
                  <a
                    href="#volunteer-interest"
                    className="group mt-7 inline-flex self-start items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Share your interest
                    <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                  </a>
                </article>
              </Reveal>

              <div className="grid gap-6">
                <Reveal delay={0.09}>
                  <article className="card-interactive flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-xs">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                        02 / Work together
                      </p>
                      <h3 className="mt-3 font-serif text-3xl font-medium text-forest md:text-4xl">
                        Partner with Us
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {partnerPath.description} Institutional collaborations and skills-based
                        support can help bring complementary perspectives to community-focused work.
                      </p>
                    </div>
                  </article>
                </Reveal>
                <Reveal delay={0.18}>
                  <article className="card-interactive flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-xs">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                        03 / Support the work
                      </p>
                      <h3 className="mt-3 font-serif text-3xl font-medium text-forest md:text-4xl">
                        {donatePath.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {donatePath.description} A contribution can support programmes and community
                        initiatives.
                      </p>
                    </div>
                    <ButtonLink
                      to={donatePath.to}
                      variant="outline-dark"
                      className="mt-5 self-start"
                    >
                      Visit the Donate page
                      <ArrowRight className="size-4" />
                    </ButtonLink>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section
          id="volunteer-interest"
          aria-labelledby="form-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <figure>
                <FramedImage
                  src={images.heroChild}
                  alt={`AI-generated illustrative placeholder image; it does not depict an actual ${site.name} participant, volunteer, programme, or location.`}
                  aspect="aspect-[4/5]"
                  className="mr-3 mb-3"
                />
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Illustrative placeholder photography
                </figcaption>
              </figure>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Volunteer expression of interest
              </p>
              <h2
                id="form-heading"
                className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl"
              >
                Tell us what you would like to contribute.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Sharing this form is an expression of interest, not confirmation of acceptance.
                Information is submitted to {site.name} for consideration; submitting does not
                guarantee a response or placement.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <VolunteerInterestForm />
            </Reveal>
          </div>
        </section>

        <ClosingCta
          eyebrow="Small actions. Real change."
          title="Find the next step that feels right."
          description="Explore the work, learn about the approach, or support community initiatives."
          primaryCta={{ label: "Explore our work", to: "/work" }}
          secondaryCta={{ label: "Our impact", to: "/impact" }}
          tertiaryCta={{ label: "Donate", to: "/donate" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}

function VolunteerInterestForm() {
  const submit = useServerFn(submitVolunteerApplication);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionError(null);

    const formData = new FormData(event.currentTarget);
    const parsed = volunteerSchema.safeParse({
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      availability: formData.get("availability"),
      skills: formData.get("skills"),
      consent: formData.get("consent") === "on",
    });

    if (!parsed.success) {
      const nextErrors = fieldErrors(parsed.error);
      if (nextErrors.consent) {
        nextErrors.consent = "Please acknowledge that this is an expression of interest.";
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setPending(true);
    try {
      const result = await submit({ data: parsed.data });
      if (result.ok) {
        setSubmitted(true);
      } else {
        setSubmissionError(result.error);
      }
    } catch (error) {
      console.error("Volunteer expression-of-interest submission failed:", error);
      setSubmissionError(
        "We could not complete the submission. Your information may not have been sent; please try again later.",
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-olive/40 bg-card p-7 md:p-9" role="status">
        <p className="font-serif text-3xl font-medium text-forest">
          Your expression of interest was submitted.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          This confirms submission only. It is not confirmation of acceptance or a promise of
          follow-up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 border-y border-border py-7 md:py-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="interest-name" label="Full name" required error={errors.full_name}>
          <input
            id="interest-name"
            name="full_name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            aria-invalid={Boolean(errors.full_name)}
            aria-describedby={errors.full_name ? "interest-name-error" : undefined}
          />
        </Field>
        <Field id="interest-email" label="Email address" required error={errors.email}>
          <input
            id="interest-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "interest-email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="interest-area" label="Area of interest" required error={errors.interest}>
          <select
            id="interest-area"
            name="interest"
            required
            defaultValue=""
            className={selectClass}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-area-error" : undefined}
          >
            <option value="" disabled>
              Choose an area
            </option>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="interest-availability" label="Availability" required error={errors.availability}>
          <select
            id="interest-availability"
            name="availability"
            required
            defaultValue=""
            className={selectClass}
            aria-invalid={Boolean(errors.availability)}
            aria-describedby={errors.availability ? "interest-availability-error" : undefined}
          >
            <option value="" disabled>
              Choose availability
            </option>
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="interest-skills"
        label="Skills or message (optional)"
        error={errors.skills}
        hint="Share any skills, experience, or context you would like us to know."
      >
        <textarea
          id="interest-skills"
          name="skills"
          rows={4}
          maxLength={500}
          className={inputClass}
          aria-invalid={Boolean(errors.skills)}
          aria-describedby={errors.skills ? "interest-skills-error" : undefined}
        />
      </Field>

      <div>
        <label
          htmlFor="interest-consent"
          className="flex items-start gap-3 text-sm leading-6 text-foreground"
        >
          <input
            id="interest-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--forest)]"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "interest-consent-error" : undefined}
          />
          <span>
            I understand this information will be submitted as an expression of interest and is not
            confirmation of volunteer acceptance.
            <span aria-hidden="true" className="text-destructive">
              {" "}
              *
            </span>
          </span>
        </label>
        {errors.consent ? (
          <p
            id="interest-consent-error"
            role="alert"
            className="mt-1.5 text-xs font-medium text-destructive"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>

      {submissionError ? (
        <p
          role="alert"
          className="border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive"
        >
          {submissionError}
        </p>
      ) : null}

      <SubmitButton
        pending={pending}
        label="Submit expression of interest"
        pendingLabel="Submitting…"
      />
      <p className="text-xs leading-5 text-muted-foreground">
        Your information is not stored in this browser. Submission uses {site.name}'s existing
        volunteer application service.
      </p>
    </form>
  );
}
