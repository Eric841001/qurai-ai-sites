const features = [
  {
    icon: "🧠",
    title: "Advanced Neural Networks",
    description: "State-of-the-art deep learning models custom-trained for your specific business needs and data patterns.",
  },
  {
    icon: "⚡",
    title: "Real-Time Processing",
    description: "Process millions of data points in milliseconds with our optimized inference engine and edge computing support.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, role-based access control, and full audit logging.",
  },
  {
    icon: "📊",
    title: "Intelligent Analytics",
    description: "Transform raw data into actionable insights with automated reporting, anomaly detection, and predictive modeling.",
  },
  {
    icon: "🔗",
    title: "Seamless Integration",
    description: "Connect with your existing tools via REST APIs, webhooks, SDKs, and pre-built integrations for 200+ platforms.",
  },
  {
    icon: "🚀",
    title: "Auto-Scaling Infrastructure",
    description: "Automatically scale from prototype to production with zero downtime, handling any workload with ease.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to <span className="gradient-text">Build with AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive AI platform designed for enterprises that demand performance, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="gradient-border card-hover p-8 rounded-2xl">
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
