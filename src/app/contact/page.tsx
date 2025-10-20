import { Package, Gift, XCircle, MessageCircle } from 'lucide-react';

export default function ContactPage() {

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            {/* Main Help Section */}
            <div className="max-w-5xl mx-auto bg-white p-8 mb-6">
                {/* Greeting */}
                <h1 className="text-gray-900 mb-2">Hi, how can we help you?</h1>

                {/* Three Main Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Track Order */}
                    <div className="bg-white rounded-[2px] shadow-sm p-6 border border-slate-400 hover:border-primary transition-colors">
                        <div className="flex items-start mb-2">
                            <Package className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" />
                            <h2 className="text-base text-cyan-500 uppercase tracking-wide">I want to know where my order is</h2>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Get status updates about your order with our Tracking Tool</p>
                    </div>

                    {/* Return Item */}
                    <div className="bg-white rounded-[2px] shadow-sm p-6 border border-slate-400 hover:border-primary transition-colors">
                        <div className="flex items-start mb-2">
                            <Gift className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" />
                            <h2 className="text-base text-cyan-500 uppercase tracking-wide">I want to return an item</h2>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Use our Online Return Form to start your return</p>
                    </div>

                    {/* Cancel Order */}
                    <div className="bg-white rounded-[2px] shadow-sm p-6 border border-slate-400 hover:border-primary transition-colors">
                        <div className="flex items-start mb-2">
                            <XCircle className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" />
                            <h2 className="text-base text-cyan-500 uppercase tracking-wide">I want to cancel an order</h2>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">Use our Online Cancellation Form to start your order cancellation</p>
                    </div>
                </div>

                {/* Search & Browse - Simple Layout */}
                <div className="">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-base text-gray-900">I have another question</h3>
                            <div className="flex items-center gap-2">
                                <button className="text-green-600 hover:text-green-700 text-sm uppercase tracking-wide">
                                    Search →
                                </button>
                            </div>

                            <div className="flex items-center">
                                <button className="text-green-600 hover:text-green-700 text-sm uppercase tracking-wide">
                                    Browse Help Center →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white p-8">
                    <h2 className="text-gray-900 mb-6">Contact us</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Chat Icon/Logo */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-orange-500 rounded-[2px] flex items-center justify-center shadow-md">
                                <MessageCircle className="w-16 h-16 text-white" strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col">
                            {/* Text Content */}
                            <div className="text-center md:text-left mb-2 text-sm">
                                <p className="text-gray-700 mb-2">Can&apos;t find the answer you are looking for?</p>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold">Daz</span>, your friendly automated chat assistant is here to assist you{' '}
                                    <span className="text-primary font-semibold">24 hours</span> a day!
                                </p>
                                <p className="text-primary font-semibold">
                                    Live Chat Service is available from 9:00 AM to 6:00 PM
                                </p>
                            </div>

                            {/* Button */}
                            <div className="flex-shrink-0 flex items-center">
                                <button className="bg-primary text-white py-3 px-8 rounded-[2px] hover:bg-orange-600 transition-colors font-semibold text-base">
                                    Chat With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}