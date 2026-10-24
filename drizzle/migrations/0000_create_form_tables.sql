-- Public-facing form submissions. Insert-only for the public: no SELECT
-- policies exist, so submitted rows can only be read by the organisation
-- (service_role / authenticated admins later).

CREATE TABLE public.volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  interest text NOT NULL,
  skills text,
  availability text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'new'
);
COMMENT ON TABLE public.volunteer_applications IS 'Public volunteer sign-ups from /get-involved. Insert-only for anon/authenticated; no public reads.';

GRANT INSERT ON public.volunteer_applications TO anon, authenticated;
GRANT ALL ON public.volunteer_applications TO service_role;

ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public can submit volunteer applications"
  ON public.volunteer_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  organisation_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  partnership_type text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);
COMMENT ON TABLE public.partnership_inquiries IS 'Public partnership enquiries from /get-involved. Insert-only for anon/authenticated; no public reads.';

GRANT INSERT ON public.partnership_inquiries TO anon, authenticated;
GRANT ALL ON public.partnership_inquiries TO service_role;

ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public can submit partnership inquiries"
  ON public.partnership_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);
COMMENT ON TABLE public.contact_messages IS 'Public messages from /contact. Insert-only for anon/authenticated; no public reads.';

GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public can submit contact messages"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);