import React from 'react';

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-white/75 text-sm leading-relaxed">{children}</p>
  </div>
);

const UseCases = () => {
  return (
    <section id="use-cases" className="relative bg-[#07070A] text-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Use cases</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Three ways Aame helps you move faster.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Professional upskilling">
            Create job‑aligned learning paths with curated videos and papers, plus weekly projects and skill checks.
          </Card>
          <Card title="Student preparation">
            Build adaptive study plans for competitive exams with targeted practice and explainer refreshers.
          </Card>
          <Card title="E-Professor assistance">
            Draft lecture decks, syllabi, and assessments in minutes, exportable to PPTX or PDF.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
