import Image from "next/image";
import Link from "next/link";
import { CTA, FOOTER, IMAGES, LINKS, SITE } from "@/lib/content";
import Button from "@/components/Button";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/Icons";

const SOCIALS = [
  { label: "Instagram", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="inline-block rounded-2xl bg-white p-3">
            <Image src={IMAGES.logo} alt={`${SITE.name}. ${SITE.tagline}`} width={1600} height={480} className="h-10 w-auto" />
          </span>
          <p className="mt-6 text-sm text-white/80">{SITE.copyright}</p>
          <p className="mt-1 text-sm font-medium">{SITE.ownerLegal}</p>
          <p className="text-sm text-white/80">{SITE.credential}</p>
          <div className="mt-6">
            <Button href="/contact" variant="green">{CTA.bookShort}</Button>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-3">
            {FOOTER.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 transition hover:text-white hover:underline hover:decoration-brand-copper hover:underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Connect</p>
          <a href={`mailto:${SITE.email}`} className="mt-4 block text-sm text-white/85 hover:text-white hover:underline hover:decoration-brand-copper hover:underline-offset-4">
            {SITE.email}
          </a>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-brand-copper"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm italic text-white/70">{SITE.philosophy}</p>
        </div>
      </div>
    </footer>
  );
}
