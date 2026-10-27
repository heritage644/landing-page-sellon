"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, PaperPlaneTilt } from "@phosphor-icons/react";

export default function ContactFormPreview() {
  const [messageReady, setMessageReady] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageReady(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label>Phone number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+234" /></label>
        <label>Business name <span>(optional)</span><input name="business" type="text" autoComplete="organization" placeholder="Your business" /></label>
        <label className="contact-form-wide">I am a<select name="businessType" defaultValue=""><option value="" disabled>Select your role</option><option>Supplier</option><option>Retailer</option><option>Entrepreneur</option><option>Enterprise</option></select></label>
        <label className="contact-form-wide">What would you like to discuss?<select name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Supplier participation</option><option>Retailing on Sellonit</option><option>Upcoming features</option><option>Enterprise operations</option><option>Something else</option></select></label>
        <label className="contact-form-wide">Message<textarea name="message" rows={5} placeholder="Tell us a little about your question." required /></label>
      </div>
      <button className="button button-primary contact-submit" type="submit"><span>Send Message</span><PaperPlaneTilt size={17} aria-hidden="true" /></button>
      {messageReady ? <p className="contact-form-status" role="status">Your details are ready, but this preview does not send messages yet. Connect a confirmed contact endpoint before launch.</p> : <p className="contact-form-footnote"><ArrowUpRight size={13} aria-hidden="true" /> Form delivery will be connected before launch.</p>}
    </form>
  );
}
