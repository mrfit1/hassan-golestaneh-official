import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { getT } from '@/lib/i18n';
import { Instagram, ExternalLink, Mail } from 'lucide-react';

const copy: Record<string, any> = {
  en: {
    eyebrow: 'CONNECT',
    intro: 'For media, professional collaborations and official enquiries, use the form or contact the official email directly.',
    emailLabel: 'Official email',
    formTitle: 'Send a message',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message', sending: 'Sending…',
    links: 'Official links'
  },
  fa: {
    eyebrow: 'ارتباط',
    intro: 'برای امور رسانه‌ای، همکاری‌های حرفه‌ای و درخواست‌های رسمی، از فرم تماس استفاده کنید یا مستقیماً به ایمیل رسمی پیام بفرستید.',
    emailLabel: 'ایمیل رسمی',
    formTitle: 'ارسال پیام',
    name: 'نام', email: 'ایمیل', subject: 'موضوع', message: 'پیام', send: 'ارسال پیام', sending: 'در حال ارسال…',
    links: 'لینک‌های رسمی'
  },
  fr: {
    eyebrow: 'CONTACT',
    intro: 'Pour les médias, les collaborations professionnelles et les demandes officielles, utilisez le formulaire ou contactez directement l’adresse e-mail officielle.',
    emailLabel: 'E-mail officiel',
    formTitle: 'Envoyer un message',
    name: 'Nom', email: 'E-mail', subject: 'Objet', message: 'Message', send: 'Envoyer', sending: 'Envoi…',
    links: 'Liens officiels'
  },
  es: {
    eyebrow: 'CONTACTO',
    intro: 'Para medios, colaboraciones profesionales y consultas oficiales, utiliza el formulario o escribe directamente al correo oficial.',
    emailLabel: 'Correo oficial',
    formTitle: 'Enviar un mensaje',
    name: 'Nombre', email: 'Correo electrónico', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje', sending: 'Enviando…',
    links: 'Enlaces oficiales'
  }
};


export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{ const {lang}=await params; return pageMetadata(lang,'contact','contact'); }
export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const tr = getT(lang);
  const c = copy[lang] ?? copy.en;

  return <>
    <PageHero eyebrow={c.eyebrow} title={tr.contactTitle} lead={tr.contactLead} />
    <section className="contactPage">
      <div className="contactIntro">
        <p>{c.intro}</p>
        <a className="officialEmail" href="mailto:info@hassangolestaneh.com">
          <Mail size={20} />
          <span><small>{c.emailLabel}</small>info@hassangolestaneh.com</span>
        </a>
        <div className="contactSocials">
          <small>{c.links}</small>
          <a href="https://www.instagram.com/mrsportmodel/" target="_blank" rel="noreferrer"><Instagram size={18}/>Instagram</a>
          <a href="https://en.wikipedia.org/wiki/Hassan_Golestaneh" target="_blank" rel="noreferrer"><ExternalLink size={18}/>Wikipedia</a>
          <a href="https://www.imdb.com/name/nm13963676/" target="_blank" rel="noreferrer"><ExternalLink size={18}/>IMDb</a>
        </div>
      </div>
      <div className="contactFormWrap">
        <div className="kicker">{c.formTitle}</div>
        <ContactForm copy={c} />
      </div>
    </section>
  </>;
}
