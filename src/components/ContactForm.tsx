import { Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100 dark:from-amber-900/30 to-transparent rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">Call us directly for immediate assistance</p>
                  <div className="space-y-3 w-full">
                    <a 
                      href="tel:+917867805001" 
                      className="block text-base font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors bg-amber-50 dark:bg-amber-900/20 py-2 px-3 rounded-lg"
                    >
                      +91 7867805001
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Landline:</p>
                    <a 
                      href="tel:+914626915283" 
                      className="block text-base font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors bg-amber-50 dark:bg-amber-900/20 py-2 px-3 rounded-lg"
                    >
                      +91 4626915283
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100 dark:from-green-900/30 to-transparent rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">Message us for quick responses</p>
                  <a 
                    href="https://wa.me/918888095594?text=Hello,%20I%20would%20like%20to%20enquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg group-hover:shadow-xl w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Message Now
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 dark:from-blue-900/30 to-transparent rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">Visit our store</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 w-full">
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">
                      Tenkasi New Bus stand near, ullavar santhai Shop No:2, landmark housing board
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;