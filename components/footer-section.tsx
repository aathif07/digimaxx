"use client"

import { Twitter, Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full relative bg-gradient-to-br from-black via-red-950/30 to-black py-16 px-5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800/15 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          {/* Left Section: Logo & Description */}
          <div className="flex flex-col justify-start items-start gap-6 lg:max-w-md">
            <div className="flex gap-3 items-center">
              <div className="text-white text-3xl font-bold">
                Digi<span className="text-red-500">Maxx</span>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              AI-powered marketing solutions that drive unprecedented growth for ambitious brands. Transform your digital presence with cutting-edge strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-start items-center gap-4">
              <a 
                href="#" 
                aria-label="Twitter" 
                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-red-400" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-red-400" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-red-400" />
              </a>
              <a 
                href="#" 
                aria-label="GitHub" 
                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-red-400" />
              </a>
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Email */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-2">
                <Mail className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                <p className="text-red-400 text-sm">hello@digimaxx.co</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                <p className="text-red-400 text-sm">+91-9500009759</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                <p className="text-red-400 text-sm">Bengaluru, Mumbai<br />& New Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-red-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 DigiMaxx. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
