"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalizedEmail) {
      setHasError(true);
      setMessage("Enter your email address to continue.");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setHasError(true);
      setMessage("Enter a valid email address, such as you@example.com.");
      return;
    }

    setHasError(false);
    setMessage("Your email looks good. Signup is not connected in this preview, so it has not been sent.");
  };

  return (
    <div className="signup-form-wrap">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <label className="visually-hidden" htmlFor="signup-email">
          Email address
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
            setHasError(false);
          }}
          aria-invalid={hasError}
          aria-describedby="signup-help signup-feedback"
          required
        />
        <button className="button button-primary signup-submit" type="submit">
          <span>Get started free</span>
          <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
        </button>
      </form>
      <p id="signup-help" className="signup-help">
        No card needed. This preview does not send or store email addresses.
      </p>
      <p
        id="signup-feedback"
        className={`signup-feedback${hasError ? " is-error" : ""}`}
        aria-live={hasError ? "assertive" : "polite"}
        role={hasError ? "alert" : "status"}
      >
        {message}
      </p>
    </div>
  );
}
