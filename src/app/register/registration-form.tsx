"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
}

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
};

const INPUT_CLASSES =
  "w-full rounded-md border border-gray-300 px-4 py-3 font-sans text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans font-semibold text-gray-900">{label}</span>
      {children}
    </label>
  );
}

export function RegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(
          data?.error ?? "Something went wrong. Please try again or contact registration@nimsnigeria.org."
        );
        setSubmitting(false);
        return;
      }

      router.push("/register/confirmation");
    } catch {
      setError(
        "Something went wrong. Please try again or contact registration@nimsnigeria.org."
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-10">
      <fieldset className="border-0 p-0 m-0">
        <legend className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-6">
          Personal Information
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="First Name">
            <input
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              className={INPUT_CLASSES}
              value={form.firstName}
              onChange={update("firstName")}
            />
          </Field>
          <Field label="Last Name">
            <input
              type="text"
              name="lastName"
              required
              autoComplete="family-name"
              className={INPUT_CLASSES}
              value={form.lastName}
              onChange={update("lastName")}
            />
          </Field>
          <div className="flex flex-col gap-2">
            <Field label="Email Address">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className={INPUT_CLASSES}
                value={form.email}
                onChange={update("email")}
              />
            </Field>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Please provide a valid and regularly monitored email address. This will be the sole
              means of communication for your NIMS 2026 invitation and other event-related
              information.
            </p>
          </div>
          <Field label="Phone Number">
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              className={INPUT_CLASSES}
              value={form.phone}
              onChange={update("phone")}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="border-0 p-0 m-0">
        <legend className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-6">
          Professional Information
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Company / Organisation">
            <input
              type="text"
              name="company"
              required
              autoComplete="organization"
              className={INPUT_CLASSES}
              value={form.company}
              onChange={update("company")}
            />
          </Field>
          <Field label="Job Title / Role">
            <input
              type="text"
              name="jobTitle"
              required
              autoComplete="organization-title"
              className={INPUT_CLASSES}
              value={form.jobTitle}
              onChange={update("jobTitle")}
            />
          </Field>
        </div>
      </fieldset>

      {error && (
        <div
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 font-sans text-red-700"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto self-start bg-primary font-sans font-semibold text-lg text-white px-10 py-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Register for NIMS 2026"}
      </button>
    </form>
  );
}
