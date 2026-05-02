import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import MotionReveal from '../components/MotionReveal';

const iconProps = { viewBox: '0 0 24 24', width: 16, height: 16, 'aria-hidden': true };

const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const InstagramIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.66 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.95c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.81-2.67 3.67V23H7.88V8z" />
  </svg>
);

const projectTypes = [
  'Branding',
  'Website',
  'Photo / Video',
  'Content & Social',
  'Performance Ads',
  'Strategy',
  'Full launch',
  'Other',
];

const expectations = [
  {
    id: '01',
    title: 'A human reply, fast',
    body: 'Every message gets a real response from a senior operator within two business days.',
  },
  {
    id: '02',
    title: 'A short intro call',
    body: 'A 30-minute conversation to hear your project, ask honest questions, and figure out if we are the right fit.',
  },
  {
    id: '03',
    title: 'A clear plan in a week',
    body: 'A short follow-up plan — scope, timeline, and investment range — usually within five working days.',
  },
];

export default function Studio() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Wire this up to Formspree / Resend / a serverless function for production.
    console.log('Contact submission', form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(0,255,0,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-36 md:px-10 md:pb-16 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">Get in touch</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Ready to build your{' '}
              <span className="text-botcore-green">brand?</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Tell us about your project. Whether you have a clear brief or
              just a rough idea, we will get on a call, listen properly, and
              tell you honestly how we can help. Most projects start with a
              short conversation and a follow-up plan within a week.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <MotionReveal>
              <div className="eyebrow accent-rule">Reach the team</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Three ways to start a project.
              </h2>

              <ul className="mt-10 space-y-6">
                <InfoRow
                  Icon={Mail}
                  label="Email"
                  value="support@botcore.technology"
                  href="mailto:support@botcore.technology"
                />
                <InfoRow
                  Icon={MapPin}
                  label="Office"
                  value="I8/2, Islamabad"
                />
                <InfoRow
                  Icon={Clock}
                  label="Hours"
                  value="Mon – Fri · 9am – 6pm"
                />
              </ul>

              <div className="mt-10">
                <p className="eyebrow !text-botcore-green">Follow us</p>
                <ul className="mt-4 flex gap-3">
                  {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        aria-label="Social link"
                        className="flex h-10 w-10 items-center justify-center border border-white/15 text-botcore-greyLight/70 transition-colors hover:border-botcore-green hover:text-botcore-green"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="card flex flex-col gap-6 p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow !text-botcore-green">// Project brief</span>
                  <span className="eyebrow">Confidential</span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                  />
                </div>

                <Field
                  label="Company"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Optional"
                />

                <div className="flex flex-col gap-2">
                  <label className="eyebrow !text-botcore-greyLight/70">
                    Project type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => {
                      const active = form.projectType === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, projectType: t }))}
                          className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors ${
                            active
                              ? 'border-botcore-green bg-botcore-green text-botcore-black'
                              : 'border-white/15 text-botcore-greyLight/70 hover:border-botcore-green hover:text-botcore-green'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="eyebrow !text-botcore-greyLight/70" htmlFor="msg">
                    Tell us about your project{' '}
                    <span className="text-botcore-green">*</span>
                  </label>
                  <textarea
                    id="msg"
                    required
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="A rough idea is fine. Goals, timeline, and what success looks like for you."
                    className="resize-none border border-white/15 bg-transparent px-4 py-3 text-sm text-botcore-greyLight placeholder:text-botcore-greyLight/30 focus:border-botcore-green focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow max-w-xs !tracking-[0.2em]">
                    We reply to every message within 48 hours.
                  </p>
                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn-primary disabled:opacity-70"
                  >
                    {submitted ? (
                      <>
                        Sent <Check size={14} strokeWidth={2.5} />
                      </>
                    ) : (
                      <>
                        Send brief <Send size={14} strokeWidth={2} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="eyebrow accent-rule">What to expect</div>
          <h2 className="h-section mt-5 max-w-2xl font-semibold text-botcore-greyLight">
            From your first message to a follow-up plan.
          </h2>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {expectations.map((e, i) => (
              <MotionReveal key={e.id} delay={i * 0.06}>
                <li className="card flex h-full flex-col gap-4 p-6">
                  <span className="eyebrow !text-botcore-green">{e.id}</span>
                  <h3 className="h-card font-semibold text-botcore-greyLight">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                    {e.body}
                  </p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function InfoRow({ Icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};
  return (
    <li>
      <Wrapper
        {...wrapperProps}
        className="group flex items-start gap-4 border-b border-white/5 pb-6 last:border-0"
      >
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green">
          <Icon size={16} strokeWidth={1.5} />
        </span>
        <div>
          <p className="eyebrow">{label}</p>
          <p className="mt-2 text-base text-botcore-greyLight transition-colors group-hover:text-botcore-green">
            {value}
          </p>
        </div>
      </Wrapper>
    </li>
  );
}

function Field({ label, required, type = 'text', ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow !text-botcore-greyLight/70">
        {label} {required && <span className="text-botcore-green">*</span>}
      </label>
      <input
        type={type}
        required={required}
        {...rest}
        className="border border-white/15 bg-transparent px-4 py-3 text-sm text-botcore-greyLight placeholder:text-botcore-greyLight/30 focus:border-botcore-green focus:outline-none"
      />
    </div>
  );
}
