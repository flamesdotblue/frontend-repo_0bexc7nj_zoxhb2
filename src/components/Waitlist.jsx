import React, { useEffect, useState } from 'react';

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
  const [form, setForm] = useState({ email: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const already = localStorage.getItem('aame_waitlist_submitted') === 'true';
      setSubmitted(already);
    } catch {}
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const entries = JSON.parse(localStorage.getItem('aame_waitlist') || '[]');
      entries.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('aame_waitlist', JSON.stringify(entries));
      localStorage.setItem('aame_waitlist_submitted', 'true');
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="bg-black text-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <h3 className="text-3xl font-semibold">You're on the list ✅</h3>
          <p className="mt-2 text-white/70">Thanks for joining the Aame waitlist. We'll reach out with early access and updates.</p>
          <button
            onClick={() => { localStorage.setItem('aame_waitlist_submitted', 'false'); setSubmitted(false); }}
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
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <h3 className="text-3xl font-semibold">Be first to try Aame</h3>
          <p className="mt-2 text-white/70">Sign up and we’ll reach out with early access and updates.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ email: e.target.value })} placeholder="you@domain.com" />
          <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
