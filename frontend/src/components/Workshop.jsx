import React from 'react'
import computer from '../assets/images/computer.png'

const Workshop = () => {
  return (
    <section id="workshop" className="bg-gray-50 py-16 px-6 md:px-20">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h3 className="border border-[#bebebe] py-2 px-4 rounded-2xl text-sm inline-block font-normal mb-3">
      <i className="ri-sparkling-fill text-primary"></i> Skincare Training
    </h3>
    <h2 className="text-3xl md:text-4xl font-semibold text-black-100 mb-4">
      Intensive Skincare Workshop
    </h2>
    <p className="md:text-lg text-gray-600">
      Learn, practice, and master professional skincare techniques in our
      3-day intensive training designed for beginner skin experts.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Workshop Topics */}
    <div className="bg-white shadow-md rounded-2xl p-8 text-left">
      <h3 className="text-xl font-semibold text-primary mb-4">
        Workshop Topics
      </h3>

      <div className="space-y-4 text-gray-700">
        <div>
          <h4 className="font-semibold text-black-100 mb-1">Cosmetic Treatments:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Facials</li>
            <li>Microneedling</li>
            <li>Peeling</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black-100 mb-1">All About Facial:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Protocols</li>
            <li>Brands</li>
            <li>Deep Cleaning Steps</li>
            <li>Hydrafacial Techniques</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black-100 mb-1">Microneedling:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Pre and Post-Care</li>
            <li>Meso Brands</li>
            <li>Protocols</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black-100 mb-1">Combination Treatments</h4>
        </div>
      </div>
    </div>

    {/* Training Details */}
    <div className="bg-white shadow-md rounded-2xl p-8 text-left">
      <h3 className="text-xl font-semibold text-primary mb-4">
        Training Details
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>3 full days of in-depth explanation and hands-on training</li>
        <li>Practice with 9 live models</li>
        <li>Printed PDF with all workshop notes</li>
        <li>Certificate of Attendance (24 hours of training)</li>
      </ul>

      <div className="mt-6 rounded-xl p-5 space-y-4">
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-line text-primary text-lg"></i>
          <p className="text-gray-700 text-sm leading-snug">
            <strong>Location:</strong> Chiah, Asaad l Asaad Street, Kanj – 1st floor, بناية النصر, clinic
          </p>
        </div>

        <div className="flex items-center gap-3">
          <i className="ri-phone-line text-primary text-lg"></i>
          <p className="text-gray-700 text-sm">
            <strong>Phone:</strong> 76 873 779
          </p>
        </div>

        <a
          href="https://wa.me/96176873779"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95"
        >
          <i className="ri-whatsapp-line text-lg"></i>
          <span>Book via WhatsApp</span>
        </a>
      </div>

    </div>
  </div>
</section>
  )
}

export default Workshop
