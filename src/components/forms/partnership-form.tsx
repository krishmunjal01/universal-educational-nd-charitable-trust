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
import { submitPartnershipInquiry } from "@/lib/forms.functions";
import { site } from "@/content/site";
import { fieldErrors, partnershipSchema } from "@/lib/schemas";

const typeOptions = [
  { value: "corporate", label: "Corporate / CSR" },
  { value: "foundation", label: "Foundation" },
  { value: "ngo", label: "NGO / implementing partner" },
  { value: "individual", label: "Individual supporter" },
  { value: "other", label: "Other" },
] as const;

type Values = {
  organisation_name: string;
  contact_name: string;
  email: string;
  partnership_type: string;
  message: string;
};

const emptyValues: Values = {
  organisation_name: "",
  contact_name: "",
  email: "",
  partnership_type: "",
  message: "",
};

export function PartnershipForm() {
  const submit = useServerFn(submitPartnershipInquiry);
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

    const parsed = partnershipSchema.safeParse(values);
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
        <p className="font-serif text-2xl font-medium text-forest">Inquiry received.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for your interest in partnering with {site.name}. We've logged your inquiry and
          will respond by email once our partnerships contact details are confirmed.
        </p>
      </div>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="partner-org" label="Organisation" required error={errors["organisation_name"]}>
            <input
              id="partner-org"
              name="organisation_name"
              type="text"
              autoComplete="organization"
              className={inputClass}
              value={values.organisation_name}
              onChange={(e) => set("organisation_name", e.target.value)}
              aria-invalid={Boolean(errors["organisation_name"])}
            />
          </Field>
          <Field id="partner-name" label="Your name" required error={errors["contact_name"]}>
            <input
              id="partner-name"
              name="contact_name"
              type="text"
              autoComplete="name"
              className={inputClass}
              value={values.contact_name}
              onChange={(e) => set("contact_name", e.target.value)}
              aria-invalid={Boolean(errors["contact_name"])}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="partner-email" label="Email" required error={errors["email"]}>
            <input
              id="partner-email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors["email"])}
            />
          </Field>
          <Field
            id="partner-type"
            label="Partnership type"
            required
            error={errors["partnership_type"]}
          >
            <select
              id="partner-type"
              name="partnership_type"
              className={selectClass}
              value={values.partnership_type}
              onChange={(e) => set("partnership_type", e.target.value)}
              aria-invalid={Boolean(errors["partnership_type"])}
            >
              <option value="" disabled>
                How would you like to work together?
              </option>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field
          id="partner-message"
          label="Your proposal"
          required
          error={errors["message"]}
          hint="Tell us briefly what you have in mind and how you'd like to contribute."
        >
          <textarea
            id="partner-message"
            name="message"
            rows={5}
            className={inputClass}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors["message"])}
          />
        </Field>

        {submissionError ? <SubmissionError message={submissionError} /> : null}

        <SubmitButton pending={pending} label="Send inquiry" pendingLabel="Sending…" />
      </form>
    </Reveal>
  );
}
