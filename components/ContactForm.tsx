'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

type Copy = {
  name: string;
  email: string;
  subject: string;
  message: string;
  send: string;
  sending: string;
};

export default function ContactForm({ copy }: { copy: Copy }) {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="contactForm"
      action="https://formsubmit.co/info@hassangolestaneh.com"
      method="POST"
      onSubmit={() => setSending(true)}
    >
      <input type="hidden" name="_subject" value="New enquiry from hassangolestaneh.com" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="contactFormRow">
        <label>
          <span>{copy.name}</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          <span>{copy.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <label>
        <span>{copy.subject}</span>
        <input name="subject" type="text" required />
      </label>

      <label>
        <span>{copy.message}</span>
        <textarea name="message" rows={7} required />
      </label>

      <button className="contactSubmit" type="submit" disabled={sending}>
        {sending ? copy.sending : copy.send}
        <Send size={17} />
      </button>
    </form>
  );
}
