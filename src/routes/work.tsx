import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/closing-cta";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { images, programs, site } from "@/content/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: `Our Work — ${site.name}` },
      {
        name: "description",
        content: `Explore ${site.name}'s programmes in education, livelihoods, health, and environment.`,
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          image={images.heroWork}
          imageAlt={`Illustrative placeholder photograph representing ${site.name}'s community-oriented work.`}
          eyebrow="Our work"
          title="Change shaped with communities."
          description="Across education, livelihoods, health, and the environment, we work towards a fairer, healthier, and more sustainable future."
        />
        <p className="bg-ivory px-6 py-3 text-right text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          Illustrative photography
        </p>

        <section
          aria-labelledby="approach-heading"
          className="border-y border-border/70 bg-beige/55 px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                How we work
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="approach-heading"
                className="max-w-4xl font-serif text-3xl font-medium leading-tight text-forest md:text-5xl md:leading-[1.08]"
              >
                Good work begins by listening.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                We believe meaningful, lasting progress is shaped with communities, not simply
                delivered to them. Listening to local priorities, making room for participation, and
                learning together can help ensure that efforts respond to what people value and
                need.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                Our programmes bring this community-oriented perspective to learning, livelihoods,
                health and wellbeing, and care for the environment.
              </p>
            </Reveal>
          </div>
        </section>

        <div aria-label={`${site.name} programmes`}>
          {programs.map((program, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <section
                key={program.id}
                id={`program-${program.id}`}
                aria-labelledby={`${program.id}-heading`}
                className={
                  index % 2 === 0
                    ? "bg-ivory px-6 py-16 md:px-10 md:py-24"
                    : "border-y border-border/70 bg-beige/45 px-6 py-16 md:px-10 md:py-24"
                }
              >
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
                  <Reveal className={imageFirst ? "" : "md:order-2"}>
                    <figure>
                      <FramedImage
                        src={program.image}
                        alt={program.imageAlt}
                        aspect="aspect-[5/4]"
                        className="mr-3 mb-3"
                      />
                      <figcaption className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        AI-generated illustrative placeholder photography — not a depiction of{" "}
                        {site.name} beneficiaries, staff, projects, or locations.
                      </figcaption>
                    </figure>
                  </Reveal>

                  <Reveal className={imageFirst ? "" : "md:order-1"} delay={0.08}>
                    <article>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                        Programme 0{index + 1}
                      </p>
                      <h2
                        id={`${program.id}-heading`}
                        className="mt-3 font-serif text-4xl font-medium leading-tight text-forest md:text-5xl"
                      >
                        {program.title}
                      </h2>
                      <p className="mt-4 text-base font-medium leading-7 text-forest/85">
                        {program.shortDescription}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                        {program.longDescription}
                      </p>
                      <div className="mt-7 border-t border-border pt-5">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                          Areas of focus
                        </h3>
                        <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                          {program.keyActivities.map((activity) => (
                            <li
                              key={activity}
                              className="border-l-2 border-olive/60 pl-3 text-sm leading-6 text-muted-foreground"
                            >
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>

        <ClosingCta
          eyebrow="Be part of the work"
          title="Small actions can move us forward."
          description={site.hero.support}
          primaryCta={{ label: "Get involved", to: "/get-involved" }}
          secondaryCta={{ label: "Donate", to: "/donate" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
