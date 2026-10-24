import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { ClosingCta } from "@/components/closing-cta";
import { FramedImage } from "@/components/framed-image";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { helpPaths, images, programs, site, values } from "@/content/site";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-ivory">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-12 md:grid-cols-[1fr_0.9fr] md:gap-14 md:px-10 md:pb-24 md:pt-20">
            <Reveal className="order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Aashray
              </p>
              <h1 className="mt-5 font-serif text-6xl font-medium leading-[0.9] text-forest md:text-7xl lg:text-8xl">
                {site.hero.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {site.hero.support}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to={site.hero.primaryCta.to} size="lg">
                  {site.hero.primaryCta.label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  to={site.hero.secondaryCta.to}
                  variant="outline-dark"
                  size="lg"
                >
                  {site.hero.secondaryCta.label}
                </ButtonLink>
              </div>
              <a
                href="#introduction"
                className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Discover Aashray
                <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal className="order-1 md:order-2" delay={0.12}>
              <figure className="mx-auto max-w-lg md:ml-auto">
                <FramedImage
                  src={images.heroChild}
                  alt=""
                  aspect="aspect-[4/4.5]"
                  loading="eager"
                  className="mr-3 mb-3"
                  imgClassName="object-[center_40%]"
                />
                <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>Illustrative photography</span>
                  <span aria-hidden="true">01 / 04</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section id="introduction" className="scroll-mt-20 border-y border-border/70 bg-beige/55">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.65fr_1.35fr] md:gap-16 md:px-10 md:py-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our purpose
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-4xl font-serif text-3xl font-medium leading-tight text-forest md:text-5xl md:leading-[1.08]">
                {site.mission}
              </h2>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Our work
                </p>
                <h2 className="mt-3 font-serif text-4xl font-medium text-forest md:text-6xl">
                  Work rooted in possibility.
                </h2>
              </div>
              <ButtonLink to="/work" variant="outline-dark" className="self-start md:self-auto">
                Explore all programmes
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
            </Reveal>

            <div className="mt-12 grid gap-12 border-t border-border pt-10 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-12">
              {programs.slice(0, 1).map((program) => (
                <Reveal key={program.id}>
                  <figure>
                    <FramedImage
                      src={program.image}
                      alt=""
                      aspect="aspect-[5/4]"
                      className="mr-3 mb-3"
                    />
                    <figcaption className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Illustrative photography
                    </figcaption>
                  </figure>
                  <div className="mt-6 flex items-start gap-5">
                    <span className="pt-1 text-xs font-semibold text-olive">01</span>
                    <div>
                      <h3 className="font-serif text-3xl font-medium text-forest md:text-4xl">
                        {program.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
                        {program.shortDescription}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="divide-y divide-border border-y border-border md:mt-2">
                {programs.slice(1).map((program, index) => (
                  <Reveal key={program.id} delay={index * 0.06}>
                    <article className="grid grid-cols-[88px_1fr] items-center gap-5 py-5 md:grid-cols-[112px_1fr] md:gap-6 md:py-6">
                      <figure>
                        <div className="aspect-square overflow-hidden rounded-md bg-beige">
                          <img
                            src={program.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="sr-only">Illustrative photography</figcaption>
                      </figure>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-olive">
                          0{index + 2}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl font-medium leading-tight text-forest md:text-3xl">
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
          </div>
        </section>

        <section className="bg-forest-deep text-ivory">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10 md:py-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                Impact, with integrity
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-3xl font-serif text-4xl font-medium leading-tight md:text-6xl">
                Progress deserves to be measured with care.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/75 md:text-base">
                We are not publishing figures here until they have been verified. Our focus is on
                clear, accountable reporting that reflects the work accurately.
              </p>
              <ButtonLink
                to="/impact"
                variant="outline-light"
                className="mt-8"
              >
                Explore our approach to impact
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                What guides us
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-forest md:text-6xl">
                Principles before promises.
              </h2>
            </Reveal>
            <div className="mt-10 grid border-y border-border md:mt-14 md:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.06}>
                  <article className="border-b border-border py-7 md:border-b-0 md:border-r md:px-8 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
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

        <section className="border-t border-border bg-beige/55 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Get involved
                </p>
                <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium text-forest md:text-6xl">
                  There are many ways to begin.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Choose a path that feels right for you.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-0 border-y border-border md:mt-14 md:grid-cols-3">
              {helpPaths.map((path, index) => (
                <Reveal key={path.title} delay={index * 0.06}>
                  <article className="flex h-full flex-col border-b border-border py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl font-medium text-forest">
                      {path.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                      {path.description}
                    </p>
                    <ButtonLink
                      to={path.to}
                      variant="outline-dark"
                      className="mt-6 self-start"
                    >
                      {path.title === "Donate" ? "Make a contribution" : `Explore ${path.title.toLowerCase()}`}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </ButtonLink>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Small actions. Real change."
          title="Take the next step with Aashray."
          description={site.hero.support}
          primaryCta={{ label: "Get Involved", to: "/get-involved" }}
          secondaryCta={site.hero.primaryCta}
        />
      </main>
      <SiteFooter />
    </>
  );
}
