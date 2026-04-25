export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-lg font-bold gradient-text">QURAI.AI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Empowering enterprises with cutting-edge artificial intelligence solutions that drive innovation and growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2024 QURAI.AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
