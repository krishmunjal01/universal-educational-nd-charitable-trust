import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/components/button-link";
import { ClosingCta } from "@/components/closing-cta";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { images, programs, site } from "@/content/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: `Our Impact — ${site.name}` },
      {
        name: "description",
        content: `Explore how ${site.name} thinks about community-led, sustainable change and responsible progress.`,
      },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          image={images.heroImpact}
          imageAlt={`AI-generated illustrative placeholder photograph; not a depiction of actual ${site.name} beneficiaries, programmes, or locations.`}
          eyebrow="Our impact"
          title="Progress deserves to be understood with care."
          description="Lasting change is about more than a number. It begins with people, grows through participation, and asks us to keep learning."
        />
        <p className="bg-ivory px-6 py-3 text-right text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          AI-generated illustrative placeholder photography
        </p>

        <section
          aria-labelledby="approach-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our approach to impact
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="approach-heading"
                className="max-w-4xl font-serif text-3xl font-medium leading-tight text-forest md:text-5xl md:leading-[1.08]"
              >
                Change is meaningful when it is shaped with people and sustained over time.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                We believe impact should reflect more than what is delivered. Community
                participation, long-term support, dignity, and sustainability all matter when
                considering whether an effort is useful and how it can continue to serve people.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                This page does not publish impact figures or claim verified results. We want any
                account of progress to be accurate, responsibly presented, and grounded in
                information that has been confirmed.
              </p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="areas-heading" className="bg-ivory px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Where change can take root
                </p>
                <h2
                  id="areas-heading"
                  className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-forest md:text-6xl"
                >
                  Four connected areas of work.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                These programme descriptions express areas of intended support, not a report of
                verified outcomes.
              </p>
            </Reveal>

            <div className="mt-12 border-y border-border md:mt-16">
              {programs.map((program, index) => (
                <Reveal key={program.id} delay={index * 0.08}>
                  <article className="group grid gap-3 border-b border-border py-7 transition-colors duration-300 hover:bg-beige/35 last:border-b-0 md:grid-cols-[88px_0.8fr_1.2fr] md:gap-8 md:px-4 md:py-9">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                      0{index + 1}
                    </p>
                    <h3 className="font-serif text-3xl font-medium leading-tight text-forest transition-colors duration-200 group-hover:text-forest-deep md:text-4xl">
                      {program.title}
                    </h3>
                    <div>
                      <p className="text-sm font-medium leading-6 text-forest/85 md:text-base">
                        {program.shortDescription}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {program.longDescription}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <ButtonLink to="/work" variant="outline-dark" className="mt-8">
              Explore our programmes
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ButtonLink>
          </div>
        </section>

        <section
          aria-labelledby="measuring-heading"
          className="bg-forest-deep px-6 py-16 text-ivory md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                Measuring progress
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="measuring-heading"
                className="max-w-3xl font-serif text-4xl font-medium leading-tight md:text-6xl"
              >
                A careful account starts with good questions.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/75 md:text-base">
                A responsible framework for understanding progress could bring together what was
                done, who had the opportunity to participate, what changed over time, and how
                communities describe their experience. These are principles for measurement, not a
                claim that an audited process or verified results are currently in place.
              </p>
              <dl className="mt-9 divide-y divide-ivory/15 border-y border-ivory/15">
                <div className="group grid gap-2 py-4 transition-colors duration-200 hover:bg-ivory/5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-3">
                  <dt className="font-serif text-2xl text-ivory transition-transform duration-200 group-hover:translate-x-1">
                    Activities
                  </dt>
                  <dd className="text-sm leading-6 text-ivory/70">
                    Record what was planned and delivered.
                  </dd>
                </div>
                <div className="group grid gap-2 py-4 transition-colors duration-200 hover:bg-ivory/5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-3">
                  <dt className="font-serif text-2xl text-ivory transition-transform duration-200 group-hover:translate-x-1">
                    Participation
                  </dt>
                  <dd className="text-sm leading-6 text-ivory/70">
                    Understand who took part and how local voices shaped the work.
                  </dd>
                </div>
                <div className="group grid gap-2 py-4 transition-colors duration-200 hover:bg-ivory/5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-3">
                  <dt className="font-serif text-2xl text-ivory transition-transform duration-200 group-hover:translate-x-1">
                    Outcomes
                  </dt>
                  <dd className="text-sm leading-6 text-ivory/70">
                    Look for meaningful changes over time and interpret them with care.
                  </dd>
                </div>
                <div className="group grid gap-2 py-4 transition-colors duration-200 hover:bg-ivory/5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-3">
                  <dt className="font-serif text-2xl text-ivory transition-transform duration-200 group-hover:translate-x-1">
                    Feedback
                  </dt>
                  <dd className="text-sm leading-6 text-ivory/70">
                    Make space for community perspectives to inform what happens next.
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="stories-heading"
          className="border-b border-border bg-beige/45 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  A visual perspective
                </p>
                <h2
                  id="stories-heading"
                  className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-forest md:text-6xl"
                >
                  Images can invite reflection, not stand in for evidence.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                The photographs below are AI-generated placeholders. They are illustrative only and
                do not depict actual {site.name} beneficiaries, staff, programmes, or locations.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <Reveal>
                <figure>
                  <FramedImage
                    src={images.closingImpact}
                    alt={`AI-generated illustrative placeholder image representing community participation; it does not depict an actual ${site.name} programme or community.`}
                    aspect="aspect-[5/4]"
                  />
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Illustrative placeholder photography
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal className="md:mt-20" delay={0.08}>
                <figure>
                  <FramedImage
                    src={images.heroVolunteers}
                    alt={`AI-generated illustrative placeholder image suggesting people working together; it does not depict actual ${site.name} staff, volunteers, or activity.`}
                    aspect="aspect-[4/3]"
                  />
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Illustrative placeholder photography
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Take a next step"
          title="Learn, participate, or lend your support."
          description={site.hero.support}
          primaryCta={{ label: "Get involved", to: "/get-involved" }}
          secondaryCta={{ label: "Donate", to: "/donate" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
