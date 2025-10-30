import React, { useState } from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/30"
      required
    />
  </label>
);

const Waitlist = () => {
  const [form, setForm] = useState({ name: '', email: '', age: '', interest: '', occupation: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const entries = JSON.parse(localStorage.getItem('aame-waitlist') || '[]');
      entries.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('aame-waitlist', JSON.stringify(entries));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="bg-black text-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-semibold">You're on the list ✅</h3>
          <p className="mt-2 text-white/70">Thanks for joining the Aame waitlist. We'll reach out with early access and updates.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90"
          >
            Add another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-black text-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold">Be first to try Aame</h3>
          <p className="mt-2 text-white/70">Sign up and we’ll reach out with early access and updates.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@aame.com" />
          <Input label="Age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="24" />
          <Input label="Interested For" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} placeholder="Study prep, Upskilling..." />
          <div className="sm:col-span-2">
            <Input label="Occupation" value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} placeholder="Student, Data Analyst, Faculty..." />
          </div>

          <div className="sm:col-span-2 mt-2">
            <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
