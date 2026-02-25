"use client";

import { useContactForm } from "@/hooks";

export default function ContactSection() {
  const { formState, isSubmitting, isSubmitted, updateField, handleSubmit, reset } = useContactForm();

  if (isSubmitted) {
    return (
      <section id="contact" className="px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <p className="mb-4">Message sent.</p>
          <button
            type="button"
            onClick={reset}
            className="rounded px-4 py-2 underline"
          >
            Send another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-4 py-16">
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            className="mt-1 block w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
            className="mt-1 block w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded border px-3 py-2"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
