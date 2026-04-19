import InnerPage from '../components/InnerPage';

export default function Labs() {
  return (
    <InnerPage
      label="R&D bay"
      title="The Labs."
      paragraphs={[
        'BOTCORE Labs is the experimental wing — an open-ended sandbox for generative systems, spatial interfaces, agentic tooling, and whatever frontier tech we decide to reverse-engineer this quarter.',
        'Lab outputs occasionally graduate into client deliverables. More often they live on as open tools, case studies, and provocations for the rest of the industry to catch up to.',
        'If you’d like early access to in-flight experiments, enlist via the contact signal.',
      ]}
    />
  );
}
