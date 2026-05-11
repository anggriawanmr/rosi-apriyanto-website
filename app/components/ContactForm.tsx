"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: formData.get("subject"),
        from: formData.get("from"),
        body: formData.get("body"),
      }),
    });

    const data = await response.json();
    setMessage(data.message ?? "Something happened. Please try again.");

    if (response.ok) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("error");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Subject</span>
        <input name="subject" type="text" placeholder="e.g. Housing construction consultation" required />
      </label>

      <label>
        <span>From</span>
        <input name="from" type="email" placeholder="yourname@email.com" required />
      </label>

      <label>
        <span>Body</span>
        <textarea name="body" rows={7} placeholder="Tell us about your project, location, timeline, and budget range..." required />
      </label>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Message"}
      </button>

      {message ? <p className={`form-message ${status}`}>{message}</p> : null}
    </form>
  );
}
