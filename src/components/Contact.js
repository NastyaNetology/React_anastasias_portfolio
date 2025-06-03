// src/components/Contact.js
import React from 'react';
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Contact() {
  return (
    <div>
      {/* Top White Section: Contact Info */}
      <section className="bg-white text-gray-900 px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p>You can reach me anytime via the details below:</p>

          <div className="text-sm space-y-3">
            <p className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <a href="mailto:kalacheva.anastasya@gmail.com" className="underline">
                kalacheva.anastasya@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-lg" />
              <a href="tel:+4917668293914" className="underline">
                +49 176 682 93 914
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-lg" />
              <a
                href="http://www.linkedin.com/in/kalacheva"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/kalacheva
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Green Section: Call to Action */}
      <section className="bg-lime-200 px-6 py-24 text-gray-900">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Shall we?</h1>
          <p className="text-lg">
            I'm always happy to connect, collaborate, or explore ideas. Let’s talk!
          </p>
          <a
            href="mailto:kalacheva.anastasya@gmail.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
          >
            <FaPaperPlane />
            Email me
          </a>
        </div>
      </section>
    </div>
  );
}


