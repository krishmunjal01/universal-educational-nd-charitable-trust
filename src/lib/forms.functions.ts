import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";

import { contactSchema, partnershipSchema, volunteerSchema } from "@/lib/schemas";

/**
 * Server functions that persist public form submissions. The tables are
 * anon-INSERT-only (no SELECT policies), so submissions can never be read
 * back by the public — they exist only for the organisation.
 */

/** Publishable-key client created inside the handler; never persists a session. */
function publishableClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    // Opaque sb_ keys aren't JWTs — send apikey only, never a Bearer key.
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
  return supabase;
}

const GENERIC_ERROR = "Something went wrong while sending your submission. Please try again.";

export const submitVolunteerApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => volunteerSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await publishableClient()
      .from("volunteer_applications")
      .insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null,
        interest: data.interest,
        skills: data.skills || null,
        availability: data.availability,
        consent: data.consent,
      });
    if (error) {
      console.error("volunteer_applications insert failed:", error.message);
      return { ok: false as const, error: GENERIC_ERROR };
    }
    return { ok: true as const };
  });

export const submitPartnershipInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => partnershipSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await publishableClient().from("partnership_inquiries").insert({
      organisation_name: data.organisation_name,
      contact_name: data.contact_name,
      email: data.email,
      partnership_type: data.partnership_type,
      message: data.message,
    });
    if (error) {
      console.error("partnership_inquiries insert failed:", error.message);
      return { ok: false as const, error: GENERIC_ERROR };
    }
    return { ok: true as const };
  });

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await publishableClient()
      .from("contact_messages")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message,
      });
    if (error) {
      console.error("contact_messages insert failed:", error.message);
      return { ok: false as const, error: GENERIC_ERROR };
    }
    return { ok: true as const };
  });
