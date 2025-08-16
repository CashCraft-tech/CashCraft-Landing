import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Reveal from "./Reveal";

const ContactMe: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        created: Timestamp.now()
      });
      setStatus("Thank you for reaching out. We will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-app py-20">
      <div className="mx-auto max-w-xl px-4">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink md:text-4xl mb-2 text-center">Contact Us</h2>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="mb-8 text-center text-ink/70 text-lg">
            Interested in partnering, have a business inquiry, or want to learn more about CashCraft? Fill out the form below and our team will respond promptly.
          </p>
          <div className="rounded-2xl glass shadow-soft border border-line-light p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Full Name</label>
                <input
                  className="w-full rounded-lg border border-line-light bg-card p-3 text-ink placeholder:text-ink/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">Email Address</label>
                <input
                  className="w-full rounded-lg border border-line-light bg-card p-3 text-ink placeholder:text-ink/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your business email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message</label>
                <textarea
                  className="w-full rounded-lg border border-line-light bg-card p-3 text-ink placeholder:text-ink/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  name="message"
                  id="message"
                  placeholder="How can we assist you? Please provide details about your inquiry."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-dark transition"
              >
                Submit
              </button>
            </form>
            {status && <p className="mt-4 text-center text-ink/70">{status}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactMe;
