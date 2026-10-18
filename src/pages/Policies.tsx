import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { domainOptions, firstYearNote, hostingNote, renewalNote } from "@/data/domainHosting";

function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pt-44 pb-24 lg:pt-52 lg:pb-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Saif Studio</p>
        <h1 className="mt-6 text-[clamp(2.2rem,6vw,4rem)] leading-[1] font-semibold">{title}</h1>
      </Reveal>
      <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

export function Terms() {
  return (
    <PolicyLayout title="Terms of Service">
      <Block heading="Packages and prices">
        <p>
          Saif Studio offers three website packages, priced in Canadian dollars: Essential Website (CA$389),
          Lead Generation Website (CA$589) and Smart Website (CA$989). See the{" "}
          <Link to="/pricing" className="lux-link text-[var(--champagne)]">
            pricing page
          </Link>{" "}
          for what each package includes.
        </p>
      </Block>
      <Block heading="Payment">
        <p>
          Scope and payment arrangements are agreed with you first, after any private concept
          preview has been presented and approved. The agreed payment is received before the
          development phase begins.
        </p>
      </Block>
      <Block heading="Domain and hosting">
        {domainOptions.map((o) => (
          <p key={o.id}>
            <span className="font-medium text-foreground">{o.title}.</span> {o.points.join(" ")}
          </p>
        ))}
        <p>{hostingNote}</p>
        <p>
          {firstYearNote} {renewalNote}
        </p>
      </Block>
      <Block heading="Care & Optimization">
        <p>Optional ongoing care is available from CA$59 to CA$149 per month. How Care &amp; Optimization applies to domain renewals is set out in the finalised service terms.</p>
      </Block>
      <Block heading="Questions before you pay">
        <p>
          If you want to know more about scope, delivery or anything else before paying, please{" "}
          <Link to="/contact" className="lux-link text-[var(--champagne)]">
            contact us
          </Link>
          .
        </p>
      </Block>
    </PolicyLayout>
  );
}

export function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <Block heading="Enquiries">
        <p>
          The contact form on this site doesn't send your details to a server. When you submit it, it
          opens a pre-filled email in your own email app, addressed to Saif Studio. What you send is
          whatever you choose to include in that email.
        </p>
      </Block>
      <Block heading="Third-party content">
        <p>
          This site is hosted on Cloudflare. The music player on the site loads content from Spotify,
          which may set its own cookies and collect its own data under its own policy.
        </p>
      </Block>
      <Block heading="Questions">
        <p>
          For questions about your information, write to us through the{" "}
          <Link to="/contact" className="lux-link text-[var(--champagne)]">
            contact page
          </Link>
          .
        </p>
      </Block>
    </PolicyLayout>
  );
}
