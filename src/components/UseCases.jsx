import React from 'react';
import { Youtube, FileText, Search, Building2, GraduationCap } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
    {children}
  </span>
);

const VideoMock = ({ label }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-black aspect-video">
    <div className="absolute inset-0 grid place-items-center">
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  </div>
);

const CaseCard = ({ title, description, bullets = [], icons = [], videoLabel }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-4">
    <div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-white/70 text-sm">{description}</p>
    </div>
    {videoLabel && <VideoMock label={videoLabel} />}
    <div className="space-y-2">
      {bullets.map((b, i) => (
        <div key={i} className="text-sm text-white/80 leading-relaxed">{b}</div>
      ))}
    </div>
    {icons.length > 0 && (
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {icons.map((ic, i) => (
          <Badge key={i}>{ic}</Badge>
        ))}
      </div>
    )}
  </div>
);

const UseCases = () => {
  return (
    <section id="use-cases" className="relative bg-[#07070A] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Use Cases</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Multi‑source AI pulls from videos, research papers, the web, and organization data to craft personalized learning.
        </p>

        {/* PROFESSIONAL UPSKILLING */}
        <div className="mt-10">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-fuchsia-500" />
            <h3 className="text-xl font-semibold tracking-tight">Professional Upskilling</h3>
          </div>
          <p className="mt-2 text-white/70 text-sm">
            Skill and job‑role tailored learning paths generated in a conversational flow.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CaseCard
              title="Data Analyst – Job‑role pathway"
              description="I analyzed your target role at ACME and drafted a 6‑week pathway with weekly projects."
              videoLabel="Video use case: skills & role‑based course creation"
              bullets={[
                'Week 1: SQL fundamentals with hands‑on queries. Week 2: Excel/Sheets analytics. Week 3: Python data wrangling...',
              ]}
              icons={[
                <span className="inline-flex items-center gap-1"><Youtube size={14}/> YouTube</span>,
                <span className="inline-flex items-center gap-1"><FileText size={14}/> Research papers</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
                <span className="inline-flex items-center gap-1"><Building2 size={14}/> Target company</span>,
              ]}
            />
            <CaseCard
              title="Frontend Engineer – Skills map"
              description="Mapped your current skills to a React + TypeScript stack and suggested three micro‑projects."
              videoLabel="Video use case: curated skills map"
              bullets={['Curated 12 videos and 5 papers with summaries to match your timeline.']}
              icons={[
                <span className="inline-flex items-center gap-1"><Youtube size={14}/> YouTube</span>,
                <span className="inline-flex items-center gap-1"><FileText size={14}/> Research papers</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
                <span className="inline-flex items-center gap-1"><Building2 size={14}/> Target company</span>,
              ]}
            />
          </div>
        </div>

        {/* STUDENT PREPARATION */}
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-500" />
            <h3 className="text-xl font-semibold tracking-tight">Student Preparation</h3>
          </div>
          <p className="mt-2 text-white/70 text-sm">
            Competitive prep courses built from videos, research, web, and past papers.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CaseCard
              title="GATE – Adaptive study plan"
              description="Generated a 10‑week plan prioritized by previous year difficulty weights."
              videoLabel="Video use case: competitive prep course creation"
              bullets={[
                'Daily practice sets with explanations and linked concept refreshers.',
              ]}
              icons={[
                <span className="inline-flex items-center gap-1"><Youtube size={14}/> YouTube</span>,
                <span className="inline-flex items-center gap-1"><FileText size={14}/> Research papers</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
                <span className="inline-flex items-center gap-1"><GraduationCap size={14}/> Exam papers</span>,
              ]}
            />
            <CaseCard
              title="SAT – Targeted revision"
              description="Focused drills for reading comprehension and algebra based on your last mock."
              videoLabel="Video use case: targeted revision"
              bullets={[
                'Auto‑assembled practice from trusted sources with step‑by‑step solutions.',
              ]}
              icons={[
                <span className="inline-flex items-center gap-1"><Youtube size={14}/> YouTube</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
                <span className="inline-flex items-center gap-1"><GraduationCap size={14}/> Exam papers</span>,
              ]}
            />
          </div>
        </div>

        {/* E‑PROFESSOR ASSISTANCE */}
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber-400" />
            <h3 className="text-xl font-semibold tracking-tight">E‑Professor Assistance</h3>
          </div>
          <p className="mt-2 text-white/70 text-sm">
            University‑ready AI presentation and course assets, built via chat.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CaseCard
              title="Lecture deck – 12 slides"
              description="Outlined a cohesive deck with objectives, key concepts, activities, and assessments."
              videoLabel="Video use case: AI presentation creation"
              bullets={[
                'Export options: PPTX, PDF, and speaker notes summary.',
              ]}
              icons={[
                <span className="inline-flex items-center gap-1"><Youtube size={14}/> YouTube</span>,
                <span className="inline-flex items-center gap-1"><FileText size={14}/> Research papers</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
              ]}
            />
            <CaseCard
              title="Syllabus augmentation"
              description="Aligned course outcomes with accreditation rubrics and added assessment matrix."
              videoLabel="Video use case: syllabus augmentation"
              bullets={[
                'Suggested open datasets and lab prompts with rubrics.',
              ]}
              icons={[
                <span className="inline-flex items-center gap-1"><FileText size={14}/> Research papers</span>,
                <span className="inline-flex items-center gap-1"><Search size={14}/> Web search</span>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
