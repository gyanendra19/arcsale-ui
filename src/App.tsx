function App() {
  return (
    <>
      <main className="p-4">
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="w-full px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">L</span>
              <span className="ml-1">Arcsale AI</span>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                View demo
              </button>
              <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="container mx-auto relative px-20 py-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute w-80 h-80 bg-gradient-to-bl from-red-200 via-white to-blue-200 rounded-full -left-64 top-10 translate-y-1/2"></div>

            {/* Small Black Semicircle */}

            {/* Left Section */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold leading-10">
                Virtual Assistant For Superior In-Person Customer Experiences
                And World-Class Software
              </h1>
              <p className="text-gray-600 text-lg">
                Our Virtual Assistants Collaborate With Your Human Workforce On
                Our Versatile, All-In-One Platform, Delivering A Premier
                Customer Experience Starting With Retail Stores.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-gradient-to-bl from-red-200 via-white to-blue-200 text-black transition-colors">
                  View Demo
                </button>
                <button className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Section - Images */}
            <div className="flex-1 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-bl-full opacity-20 -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-tr-full opacity-20 -z-10" />

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/6689ee39013a3dee5905bb1d/669e0e42d41779e7fce202f0_Frame%2066-p-500.png"
                    alt="Drive-thru sign"
                    className="w-full h-90 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-10">
                  <img
                    src="https://cdn.prod.website-files.com/6689ee39013a3dee5905bb1d/669e0e514cf6f041aceff378_Frame%2065-p-500.png"
                    alt="Person at drive-thru"
                    className="w-full h-90 object-cover"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>

        <section className="flex mx-28 px-20 overflow-hidden relative z-[1000] rounded-2xl py-16 flex-col items-center text-center">
          <img
            className="absolute inset-0 -z-10 w-full h-full"
            src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
            alt=""
          />
          <h1 className="text-3xl font-bold text-black max-w-3xl">
            Virtual Assistant Offers 3-Way Comprehensive Solution
          </h1>
          <p className="text-gray-600 max-w-2xl mt-4">
            There is no upfront investment or crazy initial build-out fee. Super
            easy to enable. It seamlessly integrates with your existing tech.
            Transform your operations with minimal friction and maximum value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h2 className="text-xl font-semibold">No Hardware Purchase.</h2>
              <p className="text-gray-600 mt-2">
                Lilac Voice integrates seamlessly with your existing drive-thru
                communication system and POS system. No extra hardware needed.
              </p>
              <div className="mt-4 text-blue-500 text-2xl">📱</div>
            </div>

            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h2 className="text-xl font-semibold">
                No AI Model Build Out Fee.
              </h2>
              <p className="text-gray-600 mt-2">
                Lilac Voice is trained to understand your menu, ingredients, and
                dietary information. No extra costs for AI model setup.
              </p>
              <div className="mt-4 text-purple-500 text-2xl">🔊</div>
            </div>

            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h2 className="text-xl font-semibold">One-Click Activation</h2>
              <p className="text-gray-600 mt-2">
                Activate Lilac Voice in your drive-thru with a simple click.
                Start benefiting from advanced AI technology immediately.
              </p>
              <div className="mt-4 text-yellow-500 text-2xl">💬</div>
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
            View Demo
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
