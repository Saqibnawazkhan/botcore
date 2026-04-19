import InnerPage from '../components/InnerPage';

export default function Studio() {
  return (
    <InnerPage
      label="Mission control"
      title="The Studio."
      paragraphs={[
        'The Studio is where missions are planned, prototyped, and pressure-tested. A cross-disciplinary crew of designers, engineers, and strategists operates from a shared orbit.',
        'We take on a small number of active engagements per cycle so every project gets full crew attention. No subcontracted deliverables, no black-box processes.',
        'Send a transmission to launch the intake sequence: a 30-minute diagnostic followed by a scoped mission brief.',
      ]}
    />
  );
}
