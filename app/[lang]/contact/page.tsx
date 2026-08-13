import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { getT } from '@/lib/i18n';
import { ExternalLink, Instagram, Mail } from 'lucide-react';

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const tr = getT(lang);
  const copy = tr.contactForm;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={tr.contactTitle} lead={tr.contactLead} />

      <section className="contactPage">
        <div className="contactIntro">
          <div>
            <div className="kicker">{copy.direct}</div>
            <h2>{copy.formTitle}</h2>
          </div>
          <p>{tr.contactText}</p>
        </div>

        <div className="contactLayout">
          <aside className="contactAside">
            <div className="contactEmailCard">
              <span>{copy.emailLabel}</span>
              <a href="mailto:info@hassangolestaneh.com">
                <Mail size={19} />
                <strong>info@hassangolestaneh.com</strong>
              </a>
            </div>

            <div className="contactSocialBlock">
              <span>{copy.social}</span>
              <a href="https://www.instagram.com/mrsportmodel/" target="_blank" rel="noreferrer">
                <Instagram size={18} />
                <b>Instagram</b>
                <ExternalLink size={15} />
              </a>
              <a href="https://en.wikipedia.org/wiki/Hassan_Golestaneh" target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                <b>Wikipedia</b>
                <ExternalLink size={15} />
              </a>
              <a href="https://www.imdb.com/name/nm13963676/" target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                <b>IMDb</b>
                <ExternalLink size={15} />
              </a>
            </div>
          </aside>

          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
