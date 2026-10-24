import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import {
  Field,
  SubmissionError,
  SubmitButton,
  inputClass,
  selectClass,
} from "@/components/forms/form-controls";
import { submitVolunteerApplication } from "@/lib/forms.functions";
import { fieldErrors, volunteerSchema } from "@/lib/schemas";

const interestOptions = [
  { value: "education", label: "Education" },
  { value: "livelihoods", label: "Sustainable Livelihoods" },
  { value: "health", label: "Health & Wellbeing" },
  { value: "environment", label: "Environment" },
  { value: "general", label: "Wherever I'm most needed" },
] as const;

const availabilityOptions = [
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "evenings", label: "Evenings" },
  { value: "flexible", label: "Flexible" },
] as const;

type Values = {
  full_name: string;
  email: string;
  phone: string;
  interest: string;
  skills: string;
  availability: string;
  consent: boolean;
};

const emptyValues: Values = {
  full_name: "",
  email: "",
  phone: "",
  interest: "",
  skills: "",
  availability: "",
  consent: false,
};

export function VolunteerForm() {
  const submit = useServerFn(submitVolunteerApplication);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionError(null);

    const parsed = volunteerSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }
    setErrors({});
    setPending(true);
    const result = await submit({ data: parsed.data });
    setPending(false);
    if (result.ok) {
      setSucceeded(true);
    } else {
      setSubmissionError(result.error);
    }
  }

  if (succeeded) {
    return (
      <div className="rounded-lg border border-olive/40 bg-card p-8 text-center" role="status">
        <p className="font-serif text-2xl font-medium text-forest">Thank you for volunteering.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your registration has been received. We'll be in touch at the email address you provided —
          contact details on this site are still placeholders, so a confirmation will follow once
          those are live.
        </p>
      </div>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="volunteer-name" label="Full name" required error={errors['full_name']}>
            <input
              id="volunteer-name"
              name="full_name"
              type="text"
              autoComplete="name"
              className={inputClass}
              value={values.full_name}
              onChange={(e) => set("full_name", e.target.value)}
              aria-invalid={Boolean(errors['full_name'])}
              aria-describedby={errors['full_name'] ? "volunteer-name-error" : undefined}
            />
          </Field>
          <Field id="volunteer-email" label="Email" required error={errors['email']}>
            <input
              id="volunteer-email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors['email'])}
              aria-describedby={errors['email'] ? "volunteer-email-error" : undefined}
            />
          </Field>
        </div>

        <Field
          id="volunteer-phone"
          label="Phone (optional)"
          error={errors['phone']}
          hint="Only if you're happy to be called."
        >
          <input
            id="volunteer-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors['phone'])}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="volunteer-interest" label="Area of interest" required error={errors['interest']}>
            <select
              id="volunteer-interest"
              name="interest"
              className={selectClass}
              value={values.interest}
              onChange={(e) => set("interest", e.target.value)}
              aria-invalid={Boolean(errors['interest'])}
            >
              <option value="" disabled>
                Choose an area…
              </option>
              {interestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
          <Field
            id="volunteer-availability"
            label="Availability"
            required
            error={errors['availability']}
          >
            <select
              id="volunteer-availability"
              name="availability"
              className={selectClass}
              value={values.availability}
              onChange={(e) => set("availability", e.target.value)}
              aria-invalid={Boolean(errors['availability'])}
            >
              <option value="" disabled>
                When are you usually free?
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
          id="volunteer-skills"
          label="Skills or experience (optional)"
          error={errors['skills']}
          hint="Teaching, healthcare, trades, languages, design — anything you'd like to contribute."
        >
          <textarea
            id="volunteer-skills"
            name="skills"
            rows={4}
            className={inputClass}
            value={values.skills}
            onChange={(e) => set("skills", e.target.value)}
            aria-invalid={Boolean(errors['skills'])}
          />
        </Field>

        <div>
          <label className="flex items-start gap-3 text-sm text-foreground" htmlFor="volunteer-consent">
            <input
              id="volunteer-consent"
              name="consent"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-[var(--forest)]"
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              aria-invalid={Boolean(errors['consent'])}
            />
            <span>
              I'm happy for Aashray to contact me about volunteering opportunities.
            </span>
          </label>
          {errors['consent'] ? (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors['consent']}
            </p>
          ) : null}
        </div>

        {submissionError ? <SubmissionError message={submissionError} /> : null}

        <SubmitButton pending={pending} label="Register as a volunteer" pendingLabel="Sending…" />
      </form>
    </Reveal>
  );
}
