import { FiArrowLeft, FiCpu, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    title: 'Generative Studio',
    description: 'Draft messages, refine creative visuals, and build polished AI workflows in seconds.',
  },
  {
    icon: FiTrendingUp,
    title: 'Predictive Insights',
    description: 'Turn performance data into actionable forecasts and growth signals for your product.',
  },
  {
    icon: FiCpu,
    title: 'Autonomous Workflows',
    description: 'Automate repetitive tasks across analytics, reporting, and customer support.',
  },
  {
    icon: FiShield,
    title: 'Secure AI Governance',
    description: 'Protect model outputs, audit usage, and enforce privacy across every AI interaction.',
  },
];

export default function AIFutures({ onBack }) {
  return (
    <section className="ai-page">
      <div className="background-glow" aria-hidden="true">
        <span className="float-dot dot-1" />
        <span className="float-dot dot-2" />
        <span className="float-dot dot-3" />
        <span className="float-dot dot-4" />
      </div>

      <div className="aifutures-card animate-entry">
        <div className="page-header">
          <button type="button" className="nav-back" onClick={onBack}>
            <FiArrowLeft /> Back to sign in
          </button>
          <div>
            <p className="eyebrow">AI Futures</p>
            <h2>Experience the next generation of intelligent workflow design.</h2>
            <p>Explore premium AI pages built for teams that want actionable insights, creative acceleration, and trusted automation.</p>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="aifutures-note">
          <p>
            Every AI Futures page is designed to feel premium, easy to navigate, and fast to adopt. These sections help users discover what modern AI-powered SaaS can deliver.
          </p>
        </div>
      </div>
    </section>
  );
}
