export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Fairfield
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner for exceptional services and innovative solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-gray-600">Premium properties and investment opportunities.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-gray-600">Expert guidance for your business needs.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions for modern challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}