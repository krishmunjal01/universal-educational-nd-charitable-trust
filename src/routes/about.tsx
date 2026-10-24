import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/closing-cta";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { images, site, values } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aashray — Small Actions. Real Change." },
      {
        name: "description",
        content: "Learn about Aashray's mission, vision, values, and community-centred approach.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          image={images.heroAbout}
          imageAlt="Illustrative placeholder photograph for Aashray's About page."
          eyebrow="About Aashray"
          title="Working together for a fairer future."
          description="We work with communities to build a fairer, healthier, and more sustainable future for everyone."
        />
        <p className="bg-ivory px-6 py-3 text-right text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          Illustrative photography
        </p>

        <section
          aria-labelledby="mission-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our mission
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="mission-heading"
                className="max-w-4xl font-serif text-3xl font-medium leading-tight text-forest md:text-5xl md:leading-[1.08]"
              >
                {site.mission}
              </h2>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="vision-heading"
          className="bg-forest-deep px-6 py-16 text-ivory md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/65">
                Our vision
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="vision-heading"
                className="max-w-4xl font-serif text-3xl font-medium leading-tight md:text-5xl md:leading-[1.08]"
              >
                A future shaped by fairness, good health, and care for the world we share.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/75 md:text-base">
                We aspire to a future where everyone can live with dignity and opportunity, and
                where progress considers generations to come.
              </p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="values-heading" className="bg-ivory px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                What guides us
              </p>
              <h2
                id="values-heading"
                className="mt-3 font-serif text-4xl font-medium text-forest md:text-6xl"
              >
                Our values
              </h2>
            </Reveal>
            <div className="mt-10 grid border-y border-border md:mt-14 md:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.06}>
                  <article className="border-b border-border py-7 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-medium text-forest md:text-4xl">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="approach-heading"
          className="border-t border-border bg-beige/55 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <Reveal>
              <figure>
                <FramedImage
                  src={images.heroVolunteers}
                  alt="Illustrative placeholder photograph of people working together in a community setting."
                  aspect="aspect-[4/3]"
                  className="mr-3 mb-3"
                />
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Illustrative photography
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                How we work
              </p>
              <h2
                id="approach-heading"
                className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl"
              >
                Progress is a shared effort.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                We believe lasting progress is strongest when the people most affected help shape
                it. A community-centred approach starts with listening to local priorities, making
                space for people to take part, and learning together as needs evolve.
              </p>
            </Reveal>
          </div>
        </section>

        <ClosingCta
          eyebrow="Take the next step"
          title="Be part of what comes next."
          description="Explore Aashray's work or find a way to get involved."
          primaryCta={{ label: "Explore our work", to: "/work" }}
          secondaryCta={{ label: "Get involved", to: "/get-involved" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
