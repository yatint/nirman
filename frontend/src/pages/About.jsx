import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Target, Eye, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal, CountUp } from "../components/Reveal";
import { Button } from "../components/ui/button";
import { mission, values, timeline, team, stats } from "../mock/mock";

const PageHero = ({ eyebrow, title, subtitle, image }) => (
  <section className="relative pt-40 pb-24 overflow-hidden">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[#0f3b2e]/80" />
    <div className="relative max-w-7xl mx-auto px-5">
      <Reveal>
        <span className="inline-block bg-[#f39019] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">{eyebrow}</span>
        <h1 className="font-head font-extrabold text-white text-4xl lg:text-5xl mt-5 max-w-3xl leading-tight">{title}</h1>
        <p className="text-white/80 text-lg mt-4 max-w-2xl">{subtitle}</p>
      </Reveal>
    </div>
  </section>
);

const About = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const v/*icons*/ = [Eye, Target, HeartHandshake];
  return (
    <div className="App bg-[#faf6ee]">
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="We rebuild villages, and the lives within them"
        subtitle="Since 2012, Nirman Foundation has partnered with tribal and rural communities across Nashik to create lasting, dignified change."
        image="https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
      />

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={mission.image} alt="Our story" className="w-full h-[440px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Our story</span>
            <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">From one classroom to a movement</h2>
            <p className="text-gray-600 mt-5 leading-relaxed text-lg">
              What began as a single learning centre in a Nashik village has grown into a full 360° model of village transformation. We work where the need is greatest — with tribal hamlets and remote farming communities that mainstream development often forgets.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our belief is simple: communities know their own needs best. We listen, co-create, and then step back so the change we spark keeps growing on its own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-24 bg-[#0f3b2e]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: Eye, title: "Our Vision", desc: "A rural India where every family lives with dignity, opportunity and self-reliance." },
              { icon: Target, title: "Our Mission", desc: "To empower under-served communities through integrated education, health and livelihood programs." },
              { icon: HeartHandshake, title: "Our Promise", desc: "Transparent, community-led work that creates measurable, lasting impact." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                  <span className="grid place-items-center w-14 h-14 rounded-xl bg-[#f39019] text-white"><c.icon size={26} /></span>
                  <h3 className="font-head font-bold text-xl text-white mt-5">{c.title}</h3>
                  <p className="text-white/70 mt-3 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center bg-white rounded-2xl py-8 shadow-sm border border-gray-100">
              <div className="font-head font-extrabold text-3xl lg:text-4xl text-[#16714f]"><CountUp value={s.value} suffix={s.suffix} /></div>
              <div className="text-sm text-gray-500 mt-1.5">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values list */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">What drives us</span>
            <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">Our core values</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-7 mt-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <CheckCircle2 className="text-[#16714f]" size={30} />
                  <h3 className="font-head font-bold text-xl text-[#0f3b2e] mt-4">{v.title}</h3>
                  <p className="text-gray-600 mt-2.5 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal className="text-center">
            <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Our journey</span>
            <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">Milestones over the years</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#16714f]/20" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className={`relative pl-14 md:pl-0 md:w-1/2 mb-10 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
                <div className={`absolute top-1.5 w-4 h-4 rounded-full bg-[#f39019] ring-4 ring-[#f39019]/20 left-2.5 ${i % 2 ? "md:-left-2" : "md:-right-2 md:left-auto"}`} />
                <div className="font-head font-extrabold text-2xl text-[#16714f]">{t.year}</div>
                <p className="text-gray-600 mt-1.5">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#faf1e2]">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[#f39019] font-semibold uppercase tracking-wider text-sm">Our people</span>
            <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-[#0f3b2e] mt-3">Meet the team</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 h-full">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#16714f] text-white grid place-items-center font-head font-bold text-2xl">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-head font-bold text-lg text-[#0f3b2e] mt-4">{m.name}</h3>
                  <p className="text-[#f39019] text-sm font-medium mt-1">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16714f]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-head font-extrabold text-3xl lg:text-4xl text-white">Partner with us</h2>
            <p className="text-white/80 mt-4 text-lg">Together we can reach the next 100 villages. Let's build lasting change.</p>
            <Button onClick={() => navigate("/contact")} className="mt-7 bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full h-12 px-8 text-base font-semibold">Get in touch <ArrowRight size={18} className="ml-2" /></Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
