import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight, ArrowUpRight, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal, CountUp } from "./Reveal";
import { hero, heroVideos, stats, mission, programs, approach, stories, gallery, news, partners } from "../mock/mock";

export const Hero = () => {
  const navigate = useNavigate();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster={heroVideos.poster}
      >
        <source src={heroVideos.primary} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative max-w-7xl mx-auto px-5 w-full pt-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-[#f39019] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-head font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mt-5 text-shadow-strong">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-white/90 text-lg mt-5 leading-relaxed max-w-xl text-shadow-strong">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => navigate("/contact")} className="bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full h-12 px-7 text-base font-semibold shadow-lg">
                {hero.ctaPrimary} <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button onClick={() => scrollTo("programs")} variant="outline" className="rounded-full h-12 px-7 text-base font-semibold bg-white/10 border-white/60 text-white hover:bg-white hover:text-[#16714f] backdrop-blur">
                <Play size={18} className="mr-2" /> {hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf6ee] to-transparent" />
    </section>
  );
};

export const Stats = () => (
  <section className="relative -mt-4 z-10">
    <div className="max-w-6xl mx-auto px-5">
      <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="p-7 text-center">
            <div className="font-head font-extrabold text-3xl lg:text-4xl text-[#16714f]">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm text-gray-500 mt-1.5 font-medium">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Mission = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src={mission.image} alt="Our mission" className="w-full h-[440px] object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#16714f] text-white rounded-2xl px-7 py-5 shadow-xl">
          <div className="font-head font-extrabold text-3xl">12+</div>
          <div className="text-sm text-white/80">Years of service</div>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Who we are</span>
        <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3 leading-tight">{mission.heading}</h2>
        <p className="text-gray-600 mt-5 leading-relaxed text-lg">{mission.body}</p>
        <ul className="mt-7 space-y-3">
          {mission.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[#1f2a28] font-medium">
              <CheckCircle2 className="text-[#16714f] shrink-0" size={22} /> {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export const Programs = () => {
  const navigate = useNavigate();
  return (
    <section id="programs" className="py-24 bg-[#0f3b2e]">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">What we do</span>
          <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-white mt-3">Our core programs</h2>
          <p className="text-white/70 mt-4 text-lg">Four interconnected pillars that transform a village end to end.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer" onClick={() => navigate("/contact")}>
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="font-head font-bold text-xl">{p.title}</h3>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#f39019] text-sm font-semibold mt-3">Learn more <ArrowUpRight size={16} /></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Approach = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-5">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">How we work</span>
        <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">Our approach to change</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {approach.map((a, i) => (
          <Reveal key={a.step} delay={i * 100}>
            <div className="h-full bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="font-head font-extrabold text-5xl text-[#f39019]/25">{a.step}</div>
              <h3 className="font-head font-bold text-xl text-[#0f3b2e] mt-2">{a.title}</h3>
              <p className="text-gray-600 mt-2.5 leading-relaxed">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Stories = () => {
  const [i, setI] = useState(0);
  const s = stories[i];
  const prev = () => setI((i - 1 + stories.length) % stories.length);
  const next = () => setI((i + 1) % stories.length);
  return (
    <section id="stories" className="py-24 bg-[#faf1e2]">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Stories of change</span>
          <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">Real people, real impact</h2>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-5 overflow-hidden">
            <div className="md:col-span-2 h-72 md:h-auto">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-9 flex flex-col justify-center">
              <Quote className="text-[#f39019]" size={40} />
              <p className="text-xl lg:text-2xl text-[#1f2a28] font-head font-medium leading-relaxed mt-4">“{s.quote}”</p>
              <div className="mt-6">
                <div className="font-bold text-[#16714f] text-lg">{s.name}</div>
                <div className="text-gray-500 text-sm">{s.place}</div>
              </div>
              <div className="flex gap-3 mt-7">
                <button onClick={prev} className="grid place-items-center w-11 h-11 rounded-full border-2 border-[#16714f] text-[#16714f] hover:bg-[#16714f] hover:text-white transition-colors"><ChevronLeft size={20} /></button>
                <button onClick={next} className="grid place-items-center w-11 h-11 rounded-full border-2 border-[#16714f] text-[#16714f] hover:bg-[#16714f] hover:text-white transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const Gallery = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-5">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Moments</span>
        <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">From the field</h2>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 100} className={i % 5 === 0 ? "md:row-span-2" : ""}>
            <div className="h-full rounded-2xl overflow-hidden group">
              <img src={g} alt="Field work" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 5 === 0 ? "h-full min-h-[300px]" : "h-52"}`} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const NewsSection = () => (
  <section className="py-24 bg-[#f2f6f3]">
    <div className="max-w-7xl mx-auto px-5">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Latest updates</span>
          <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">News &amp; stories</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-7 mt-12">
        {news.map((n, i) => (
          <Reveal key={i} delay={i * 100}>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
              <div className="h-52 overflow-hidden">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-[#16714f]/10 text-[#16714f] font-semibold px-2.5 py-1 rounded-full">{n.tag}</span>
                  <span className="text-gray-400">{n.date}</span>
                </div>
                <h3 className="font-head font-bold text-lg text-[#1f2a28] mt-3 leading-snug group-hover:text-[#16714f] transition-colors">{n.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-[#f39019] text-sm font-semibold mt-4">Read more <ArrowRight size={15} /></span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 overflow-hidden">
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">Our partners</p>
        <div className="flex gap-14 whitespace-nowrap marquee w-max">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="font-head font-bold text-2xl text-gray-300">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const CtaBand = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-[#16714f]">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <Reveal>
          <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-white">Your support builds futures</h2>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto">Every contribution helps a child learn, a mother heal, and a family earn with dignity. Join us in rebuilding rural Maharashtra.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button onClick={() => navigate("/contact")} className="bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full h-12 px-8 text-base font-semibold">Donate Now</Button>
            <Button onClick={() => navigate("/contact")} variant="outline" className="rounded-full h-12 px-8 text-base font-semibold border-white/70 text-white bg-transparent hover:bg-white hover:text-[#16714f]">Become a Volunteer</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
