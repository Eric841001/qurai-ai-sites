const stats = [
  { number: "2024", label: "Founded" },
  { number: "50+", label: "AI Models Deployed" },
  { number: "15+", label: "Countries" },
  { number: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Pioneering the <span className="gradient-text">AI Revolution</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              QURAI.AI was founded with a singular mission: to democratize artificial intelligence for businesses of all sizes. We believe that every organization deserves access to world-class AI technology.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our team of researchers, engineers, and industry experts work at the intersection of cutting-edge AI research and practical business applications, delivering solutions that drive real, measurable impact.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Learn more about our team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="gradient-border card-hover p-8 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
