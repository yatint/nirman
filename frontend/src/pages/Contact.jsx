import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";
import { site } from "../mock/mock";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", description: "Name, email and message are required." });
      return;
    }
    // Frontend-only: persist to localStorage as a teaser
    const all = JSON.parse(localStorage.getItem("nirman_enquiries") || "[]");
    all.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("nirman_enquiries", JSON.stringify(all));
    setSubmitted(true);
    toast({ title: "Message sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const cards = [
    { icon: MapPin, title: "Visit Us", lines: [site.location] },
    { icon: Phone, title: "Call Us", lines: [site.phone], href: site.phoneHref },
    { icon: Mail, title: "Email Us", lines: ["info@nirmanfoundation.org"] },
    { icon: Clock, title: "Office Hours", lines: ["Mon – Sat: 9:30am – 6:00pm"] },
  ];

  return (
    <div className="App bg-[#faf6ee]">
      <Navbar />
      <Toaster />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1609252509229-364936a1d1a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0f3b2e]/85" />
        <div className="relative max-w-7xl mx-auto px-5">
          <Reveal>
            <span className="inline-block bg-[#f39019] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">Contact Us</span>
            <h1 className="font-head font-extrabold text-white text-4xl lg:text-5xl mt-5">We'd love to hear from you</h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">Whether you want to donate, volunteer or partner with us — reach out and our Nashik team will connect with you.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#16714f]/10 text-[#16714f]"><c.icon size={24} /></span>
                <h3 className="font-head font-bold text-lg text-[#0f3b2e] mt-4">{c.title}</h3>
                {c.lines.map((l) => (
                  c.href
                    ? <a key={l} href={c.href} className="block text-gray-600 mt-1.5 hover:text-[#f39019]">{l}</a>
                    : <p key={l} className="text-gray-600 mt-1.5">{l}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="font-head font-extrabold text-2xl text-[#0f3b2e]">Send us a message</h2>
              <p className="text-gray-500 mt-1.5">We usually respond within 2 working days.</p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={form.name} onChange={set("name")} placeholder="Your name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={set("phone")} placeholder="Your phone" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" value={form.message} onChange={set("message")} placeholder="How would you like to help?" rows={5} className="mt-1.5" />
                </div>
                <Button type="submit" className="w-full bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full h-12 text-base font-semibold">
                  {submitted ? <><CheckCircle2 size={18} className="mr-2" /> Sent!</> : <><Send size={18} className="mr-2" /> Send Message</>}
                </Button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full flex flex-col gap-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex-1 min-h-[300px]">
                <iframe
                  title="Nirman Foundation Nashik"
                  src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
                  className="w-full h-full min-h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-[#16714f] rounded-3xl p-8 text-white">
                <Heart className="text-[#ffd9a8]" size={30} />
                <h3 className="font-head font-bold text-xl mt-3">Make a donation</h3>
                <p className="text-white/80 mt-2">Call us at <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> to contribute towards education, health and livelihoods in rural Nashik.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
