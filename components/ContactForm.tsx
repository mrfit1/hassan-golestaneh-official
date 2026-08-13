'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { getT } from '@/lib/i18n';

export default function ContactForm({ lang }: { lang: string }) {
  const tr = getT(lang);
  const copy = tr.contactForm;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently ignore obvious bot submissions.
    if (String(data.get('_honey') || '').trim()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@hassangolestaneh.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New message from hassangolestaneh.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="language" value={lang} />
      <div className="contactHoney" aria-hidden="true">
        <label>
          Website
          <input name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="contactFieldRow">
        <label className="contactField">
          <span>{copy.name}</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="contactField">
          <span>{copy.email}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label className="contactField">
        <span>{copy.subject}</span>
        <input name="subject" type="text" required />
      </label>

      <label className="contactField">
        <span>{copy.message}</span>
        <textarea name="message" rows={7} required />
      </label>

      <div className="contactSubmitRow">
        <p>{copy.privacy}</p>
        <button className="contactSubmit" type="submit" disabled={status === 'sending'}>
          <span>{status === 'sending' ? copy.sending : copy.send}</span>
          <Send size={17} />
        </button>
      </div>

      {status === 'success' && (
        <div className="contactStatus success" role="status">
          <CheckCircle2 size={18} />
          <span>{copy.success}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="contactStatus error" role="alert">
          <span>{copy.error}</span>
        </div>
      )}
    </form>
  );
}
