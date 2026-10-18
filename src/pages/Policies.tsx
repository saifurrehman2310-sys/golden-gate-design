import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { clientJourney, previewNote } from "@/data/clientJourney";
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
      <Block heading="How a project works">
        <ol className="space-y-3">
          {clientJourney.map((j, n) => (
            <li key={j.title}>
              <span className="font-medium text-foreground">
                {n + 1}. {j.title}.
              </span>{" "}
              {j.text}
            </li>
          ))}
        </ol>
        <p>{previewNote}</p>
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
      <Block heading="What the contact form collects">
        <p>
          The form on the contact page asks for your name, email address, business name (optional),
          the package you're interested in, and your project details. There is no phone number field.
        </p>
      </Block>
      <Block heading="Why we ask for it">
        <p>
          We use these details to respond to your enquiry and to discuss your project with you. Your
          name and email address tell us who to reply to, and the rest helps us understand what you
          need.
        </p>
      </Block>
      <Block heading="How the form works">
        <p>
          The form does not send your details to a server and this website does not store them. When
          you press "Send Enquiry", it opens a pre-filled email in your own email app, addressed to
          Saif Studio. Nothing is sent until you send that email yourself. If you contact us on
          WhatsApp or by email instead, we receive the contact details and messages you choose to
          send.
        </p>
      </Block>
      <Block heading="Third-party services">
        <p>
          This site is hosted on Cloudflare. It loads fonts from Google Fonts, and the music player
          loads content from Spotify. These services may receive technical information such as your
          IP address when your browser loads them, and are governed by their own policies.
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
