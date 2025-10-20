import Image from 'next/image';
import { Target, Zap, Users, Heart, Package, DollarSign, Clock, Truck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Orange Gradient */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-orange-700 opacity-20 transform rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white opacity-10 rounded-full"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            DARAZ IS A MALL, A MARKETPLACE
            <br />
            AND A COMMUNITY
          </h1>
          <p className="text-lg md:text-xl text-white opacity-95 max-w-3xl mx-auto">
            Daraz is leading the e-commerce revolution in South Asia, empowering thousands of sellers to connect with millions of customers.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Who we are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-base leading-relaxed">
                Daraz is a 100% Bangladeshi mall that delivers to more than 1 million customers every month. It is a university of entrepreneurs, and a community of more than 50,000 sellers.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                To overcome every logistics challenge in our markets, Daraz has built its own logistics company specifically tailored for e-commerce. It is the first of its kind in South Asia.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Founded in 2012, Daraz Group is backed by Alibaba and brings to the table its expertise in providing new retail solutions to existing sellers, as well as driving business growth in e-commerce, mobile and logistics.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-[2px] overflow-hidden shadow-lg">
                <Image
                  src="/assets/img/about/01.webp"
                  alt="Daraz team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Make it easy to do business anywhere in the digital economy
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Ownership */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Ownership</h3>
            </div>

            {/* Create Change */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Create Change</h3>
            </div>

            {/* Teamwork */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Teamwork</h3>
            </div>

            {/* Customer Commitment */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Customer Commitment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise to Customers Section */}
      <section className="relative bg-primary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-700 transform rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our promise to customers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Biggest Variety */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <Package className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white">Biggest Variety</h3>
            </div>

            {/* Best Prices */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white">Best Prices</h3>
            </div>

            {/* Ease & Speed */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white">Ease & Speed</h3>
            </div>

            {/* Fast Delivery */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white">Fast Delivery</h3>
            </div>
          </div>

          <p className="text-center text-white text-sm md:text-base mt-8 font-medium opacity-90">
            100% Purchase Protected
          </p>
        </div>
      </section>
    </div>
  );
}