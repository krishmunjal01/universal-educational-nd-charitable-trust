import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import {
  Field,
  SubmissionError,
  SubmitButton,
  inputClass,
} from "@/components/forms/form-controls";
import { submitContactMessage } from "@/lib/forms.functions";
import { contactSchema, fieldErrors } from "@/lib/schemas";

type Values = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyValues: Values = { name: "", email: "", phone: "", subject: "", message: "" };

export function ContactForm() {
  const submit = useServerFn(submitContactMessage);
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

    const parsed = contactSchema.safeParse(values);
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
        <p className="font-serif text-2xl font-medium text-forest">Message sent.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Your message has been received and will be read once our
          contact details are confirmed and replies can be answered.
        </p>
      </div>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="contact-name" label="Your name" required error={errors['name']}>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              className={inputClass}
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={Boolean(errors['name'])}
            />
          </Field>
          <Field id="contact-email" label="Email" required error={errors['email']}>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors['email'])}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="contact-phone" label="Phone (optional)" error={errors['phone']}>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              aria-invalid={Boolean(errors['phone'])}
            />
          </Field>
          <Field id="contact-subject" label="Subject (optional)" error={errors['subject']}>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className={inputClass}
              value={values.subject}
              onChange={(e) => set("subject", e.target.value)}
              aria-invalid={Boolean(errors['subject'])}
            />
          </Field>
        </div>

        <Field id="contact-message" label="Message" required error={errors['message']}>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            className={inputClass}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors['message'])}
          />
        </Field>

        {submissionError ? <SubmissionError message={submissionError} /> : null}

        <SubmitButton pending={pending} label="Send message" pendingLabel="Sending…" />
      </form>
    </Reveal>
  );
}
