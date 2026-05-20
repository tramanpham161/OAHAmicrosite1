import React, { useState } from "react";
import {
  Download,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  ArrowDown
} from "lucide-react";

export default function App() {
  // Clean Form states
  const [contactFormName, setContactFormName] = useState<string>("");
  const [contactFormWho, setContactFormWho] = useState<"Employer" | "Charity Leader" | "Other">("Employer");
  const [contactFormEmail, setContactFormEmail] = useState<string>("");
  const [contactFormMessage, setContactFormMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Core metrics & priorities
  const STRATEGIC_PRIORITIES = [
    {
      num: "01",
      title: "Regional Pilot",
      desc: "Use Cardiff and the South East Wales Metro as an operational hub to test local realities."
    },
    {
      num: "02",
      title: "Stronger Transitions",
      desc: "Improve school-to-work and re-entry points instead of adding parallel activity."
    },
    {
      num: "03",
      title: "Youth-Led Validation",
      desc: "Test findings directly with young people before designing pilots."
    },
    {
      num: "04",
      title: "Light Backbone Function",
      desc: "Maintain momentum and coordination without creating heavy bureaucracy."
    },
    {
      num: "05",
      title: "Shared Roadmap",
      desc: "Translate evidence into clear propositions for investment and policy."
    },
    {
      num: "06",
      title: "Shared Ecosystem Map",
      desc: "Keep mapping who is doing what to uncover hidden gaps."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setContactFormName("");
    setContactFormWho("Employer");
    setContactFormEmail("");
    setContactFormMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]/95 text-[#1a2521] selection:bg-[#D48D52]/15 selection:text-[#1F362B] flex flex-col font-sans transition-colors duration-200">
      
      {/* Premium Corporate Navigation Header */}
      <header className="bg-white/80 backdrop-blur border-b border-[#e5e3dc] px-6 py-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F362B]"></span>
            <span className="font-semibold tracking-widest text-[#1F362B] text-sm uppercase">OAHA</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://oaha.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#51615a] hover:text-[#1F362B] font-semibold tracking-wider uppercase transition-colors"
            >
              Main Site
            </a>
            <button
              onClick={() => {
                const elem = document.getElementById("preview-sec-get-involved");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs bg-[#1F362B] text-white px-4 py-2 hover:opacity-90 font-medium tracking-wider uppercase transition-all cursor-pointer rounded-sm"
            >
              Get Involved
            </button>
          </nav>
        </div>
      </header>

      {/* Beautiful Page Wrapper representing the real website */}
      <main className="flex-1">

        {/* SECTION 1: HERO CONTAINER */}
        <div id="preview-sec-hero" className="relative">
          <section className="relative py-24 sm:py-32 px-6 sm:px-12 text-center bg-[#faf9f6] border-b border-[#e5e3dc] overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#1F362B] bg-[#1F362B]/10 rounded-full uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D48D52]" />
                <span>Wales Progress update</span>
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#1F362B] leading-[1.1] font-sans">
                Accelerating Social <br className="hidden sm:inline" />
                <span className="text-[#1F362B]">Mobility in Wales</span>
              </h1>
              
              <p className="text-xs uppercase tracking-widest text-[#51615a] font-semibold">
                Phase 1 Progress Update & White Paper
              </p>
              
              <p className="text-base sm:text-lg text-[#51615a] max-w-xl mx-auto leading-relaxed">
                Welcome to OAHA’s Wales progress portal. Explore real-world discoveries from our collaborative Phase 1 study, mapping learner journeys, and removing system disconnects to support young people.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="https://your-whitepaper-link-here.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#D48D52]" />
                  <span>Read the White Paper</span>
                </a>
                <button
                  onClick={() => {
                    const elem = document.getElementById("preview-sec-get-involved");
                    if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 border-2 border-[#1F362B] text-[#1F362B] text-xs font-semibold uppercase tracking-widest hover:bg-[#1F362B]/5 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Get Involved</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Backdrop Aesthetic Subtle Blur Details */}
            <div className="absolute top-[-20%] left-[20%] w-72 h-72 bg-[#1F362B]/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[20%] w-80 h-80 bg-[#D48D52]/5 rounded-full filter blur-[120px] pointer-events-none" />
          </section>
        </div>

        {/* SECTION 2: THE STORY SO FAR */}
        <div id="preview-sec-story-so-far" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#e5e3dc]">
            <div className="max-w-5xl mx-auto space-y-16">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Core story in British English */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Context Summary</span>
                  <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">
                    The Story So Far
                  </h2>
                  
                  <p className="text-base text-[#51615a] leading-relaxed">
                    Wales does not lack commitment or activity. Across the region, brilliant charities, schools, and employers are working hard to support young people. However, the system is fragmented. Young people are slipping through the gaps during cold, unclear transitions between school, training, and work.
                  </p>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    Our goal is not to create a new, parallel system. We want to act as a practical bridge—strengthening coordination, listening to youth insight, and connecting existing work to national priorities.
                  </p>
                </div>

                {/* Right Column: Key Metrics in Minimalist Spacious Layout */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#faf9f6]/85 border border-[#e5e3dc] p-7 rounded relative">
                    <span className="text-[10px] font-semibold text-[#D48D52] uppercase tracking-wider block mb-2">Coalition Metric</span>
                    <p className="text-4xl sm:text-5xl font-light text-[#1F362B] tracking-tight leading-none">
                      10 to 40+
                    </p>
                    <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                      Partner Organisations Joined to pool combined resources.
                    </p>
                  </div>

                  <div className="bg-[#faf9f6]/85 border border-[#e5e3dc] p-7 rounded relative">
                    <span className="text-[10px] font-semibold text-[#D48D52] uppercase tracking-wider block mb-2">Systems Audit Map</span>
                    <p className="text-4xl sm:text-5xl font-light text-[#1F362B] tracking-tight leading-none">
                      171 Pathway
                    </p>
                    <p className="text-xs text-[#51615a] leading-relaxed mt-3">
                      Touchpoints Mapped Across the Learner Journey in regional Wales.
                    </p>
                  </div>
                </div>

              </div>

              {/* 5-Step Progress Timeline */}
              <div className="space-y-8 border-t border-[#e5e3dc] pt-12">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D48D52]">Methodology & Framework</span>
                  <h3 className="text-2xl font-normal text-[#1F362B] tracking-tight">Our 5-Step Progress</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="space-y-3 relative">
                    <div className="text-2.5xl font-mono text-[#D48D52]">01</div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Validated context</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Used desktop research and a high-level open data scan to ground the work in the Welsh reality.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="text-2.5xl font-mono text-[#D48D52]">02</div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Mapped journey</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">From home and community through school, post-16, entry to work, in-work progression and re-entry.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="text-2.5xl font-mono text-[#D48D52]">03</div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Ecosystem map</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Started to show who is doing what, where and for whom, so we can amplify rather than duplicate.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="text-2.5xl font-mono text-[#D48D52]">04</div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Tested hypotheses</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Brought employers, educators and community partners together to challenge what we thought we were seeing.</p>
                  </div>
                  <div className="space-y-3 relative">
                    <div className="text-2.5xl font-mono text-[#D48D52]">05</div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F362B]">Shaped actions</h4>
                    <p className="text-xs text-[#51615a] leading-relaxed">Began identifying where collective effort could add value quickly, and what we should not pursue.</p>
                  </div>
                </div>
              </div>

              {/* Key Takeaway Callout */}
              <div className="bg-[#faf9f6]/95 border-l-4 border-[#1F362B] p-8 space-y-2 rounded-r">
                <span className="text-[10px] uppercase tracking-widest text-[#D48D52] font-bold">Key Takeaway</span>
                <p className="text-sm text-[#1F362B] font-normal leading-relaxed italic">
                  "What matters most here is sequencing: understand the system first, then refine the opportunities with stakeholders, then move toward pilots that are credible and collaborative."
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 3: THE WHITE PAPER PRIORITIES */}
        <div id="preview-sec-whitepaper" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#e5e3dc]">
            <div className="max-w-5xl mx-auto space-y-16">
              
              {/* Introduction & Purpose Summary with Three Aims */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left font-sans">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Strategic Document</span>
                  <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">Introduction & Purpose</h2>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    This document brings together the story of our Wales collaboration so far into a shared narrative for government, funders, and delivery partners. It acts as a foundational, neutral base that can be lightly tailored for different audiences while keeping the same core evidence and strategic logic.
                  </p>
                  <p className="text-base text-[#51615a] leading-relaxed">
                    This is not a final blueprint or an attempt to build a new system alongside existing Welsh structures. Instead, it is an enabling paper designed to better connect existing activity and intent. Our goal is systemic change achieved through practical, staged steps: build the shared picture, strengthen coordination, validate with youth voices, test ideas locally, and use those lessons to shape future policy and investment.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e5e3dc] p-8 space-y-6 rounded shadow-sm">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#1F362B] border-b border-[#e5e3dc] pb-2">Three Simple Aims:</h3>
                  <ul className="space-y-4 text-xs text-[#51615a]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                      <span>Make the case for a place-based response to social mobility in Wales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                      <span>Highlight what Phase 1 revealed about fragmented systems, weak handoffs, and hidden pathways.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D48D52] mt-1.5 shrink-0"></span>
                      <span>Propose a practical, collaborative, and proportionate next stage.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Policy Focus</span>
                  <h3 className="text-2.5xl font-normal text-[#1F362B] tracking-tight">The 6 Strategic Priorities</h3>
                </div>

                {/* Simple HTML table-like Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {STRATEGIC_PRIORITIES.map((p, idx) => (
                    <div key={idx} className="bg-white border border-[#e5e3dc] p-6 space-y-3 rounded hover:border-[#D48D52]/60 transition-colors shadow-sm">
                      <span className="text-xs font-mono font-semibold text-[#D48D52] tracking-wider block">Priority {p.num}</span>
                      <h4 className="font-semibold text-[#1F362B] text-xs uppercase tracking-wider leading-none">{p.title}</h4>
                      <p className="text-xs text-[#51615a] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centralised CTA Button */}
              <div className="text-center pt-6">
                <a
                  href="https://your-whitepaper-link-here.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#D48D52]" />
                  <span>Read the Full White Paper</span>
                </a>
              </div>

            </div>
          </section>
        </div>

        {/* SECTION 4: UPCOMING WORKSHOP */}
        <div id="preview-sec-workshop" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-white border-b border-[#e5e3dc]">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-block px-3 py-1 bg-[#D48D52] text-white text-[10px] font-semibold uppercase tracking-widest">
                Regional Focus • 27 May
              </span>
              <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">Upcoming Workshop</h2>
              <p className="text-base text-[#51615a] max-w-xl mx-auto leading-relaxed">
                As we finalise Phase 1, we are holding a youth-led workshop on <strong>27 May</strong> to test these findings directly with young people. Your insight will shape Phase 2.
              </p>
              <div className="pt-4">
                <a
                  href="https://luma.com/jhbmor51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1F362B] text-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer"
                >
                  <span>Register for the Workshop on Luma</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 5: GET INVOLVED (THE ULTRACLEAN FORM) */}
        <div id="preview-sec-get-involved" className="relative">
          <section className="py-24 px-6 sm:px-12 bg-[#faf9f6]/40 border-b border-[#e5e3dc]">
            <div className="max-w-xl mx-auto space-y-8">
              
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D48D52] block">Immediate Collaboration</span>
                <h2 className="text-3xl font-normal text-[#1F362B] tracking-tight">Get Involved</h2>
                <p className="text-sm text-[#51615a] leading-relaxed">
                  If you are an employer, funder, charity leader, policymaker, or community partner, we need your help to build practical pilots.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white border-2 border-[#1F362B] p-8 rounded text-center space-y-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#1F362B]/10 text-[#1F362B] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F362B] uppercase tracking-wider text-xs">Form Transmitted Successfully</h3>
                  <p className="text-xs text-[#51615a] leading-relaxed">
                    Thank you, <strong>{contactFormName || "Partner"}</strong>. We have logged your details as a <strong>{contactFormWho}</strong>. Our Wales team will connect with you shortly on <strong>{contactFormEmail}</strong> relative to Phase 2.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 border border-[#1F362B] text-[#1F362B] text-[10px] uppercase font-bold tracking-wider hover:bg-[#faf9f6] transition-all cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-white border border-[#e5e3dc] p-8 rounded shadow-sm">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alun Davies"
                      value={contactFormName}
                      onChange={(e) => setContactFormName(e.target.value)}
                      className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Who You Are</label>
                    <select
                      value={contactFormWho}
                      onChange={(e) => setContactFormWho(e.target.value as any)}
                      className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                    >
                      <option value="Employer">Employer</option>
                      <option value="Charity Leader">Charity Leader</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Email / Contact</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organisation.org.uk"
                      value={contactFormEmail}
                      onChange={(e) => setContactFormEmail(e.target.value)}
                      className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-[#1F362B] font-semibold select-none">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can you support or coordinate with our regional transition pilots?"
                      value={contactFormMessage}
                      onChange={(e) => setContactFormMessage(e.target.value)}
                      className="w-full bg-white border border-[#e5e3dc] p-3 text-sm focus:outline-none focus:border-[#1F362B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1F362B] text-white py-3.5 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D48D52]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </section>
        </div>

        {/* SECTION 6: ULTRA-MINIMAL FOOTNOTE */}
        <div id="preview-sec-footnote" className="relative">
          <footer className="bg-[#faf9f6]/95 py-16 px-6 border-t border-[#e5e3dc]">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
                This microsite is a simple progress space for OAHA. Return to our main site at{" "}
                <a
                  href="https://oaha.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F362B] font-semibold underline hover:text-[#D48D52] transition-colors"
                >
                  oaha.uk
                </a>{" "}
                or connect with us on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/oahasocialsustainability/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F362B] font-semibold underline hover:text-[#D48D52] transition-colors"
                >
                  LinkedIn
                </a>.
              </p>
              <div className="w-8 h-[1px] bg-[#e5e3dc] mx-auto"></div>
              <p className="text-[10px] text-[#818e87] uppercase tracking-widest">
                &copy; 2026 OAHA UK. Operational Update Initiative.
              </p>
            </div>
          </footer>
        </div>

      </main>

    </div>
  );
}
