import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">Contact SEEF</h1>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            We welcome collaboration with government institutions, NGOs, private sector organizations, and communities seeking sustainable and evidence-based solutions.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Office Location</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 text-blue-600" />
                <p>Dembel City Center, Addis Ababa, Ethiopia</p>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 mt-1 h-5 w-5 text-blue-600" />
                <p>Phone details available on request</p>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 mt-1 h-5 w-5 text-blue-600" />
                <p>Email details available on request</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Partnership and Project Inquiries</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Share your project goals, sector focus, and expected support areas. Our team will respond with a tailored engagement approach aligned to your needs.
            </p>
            <div className="space-y-3 text-gray-700">
              <p>- Consulting and technical advisory requests</p>
              <p>- Research, assessment, and evaluation partnerships</p>
              <p>- Training and capacity-building program coordination</p>
              <p>- Joint initiatives for sustainable development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
