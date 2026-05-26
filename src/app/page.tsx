"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#1f2937]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm z-50 transition-all duration-500">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.webp"
              alt="KANISHK CARPETS"
              className="h-12 w-auto"
            />

            <h1 className="text-lg md:text-xl font-bold tracking-[0.2em]">
              KANISHK CARPETS
            </h1>

          </div>

          <div className="hidden md:flex gap-8 font-medium">

            <a href="#home">
              Home
            </a>

            <a href="#collections">
              Collections
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 text-white overflow-hidden"
      >

        <div className="absolute inset-0">

          <img
            src="/hero-bg.png"
            alt="Luxury Carpet Interior"
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/50"></div>

        </div>

        <motion.h1
          className="relative z-10 text-4xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          KANISHK CARPETS
        </motion.h1>

        <motion.p
          className="relative z-10 mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Luxury Handmade Rugs & Custom Carpets
        </motion.p>

        <motion.p
          className="relative z-10 mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Crafted in Mirzapur for Homes, Hotels & Modern Spaces
        </motion.p>

        <motion.div
          className="relative z-10 mt-10 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >

          <button className="bg-[#d4a017] px-6 md:px-8 py-4 rounded-full text-white font-semibold hover:bg-[#b68b12] transition">
            Explore Collection
          </button>

          <button className="border border-white px-6 md:px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
            Custom Orders
          </button>

        </motion.div>

      </section>

      {/* FEATURED COLLECTIONS */}
      <motion.section
        id="collections"
        className="py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Collections
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Luxury Tufted Rugs",
              image: "/rug5.jpeg",
              desc: "Premium handcrafted rugs designed for elegant interiors.",
            },

            {
              title: "Custom Design Carpets",
              image: "/rug2.png",
              desc: "Tailor-made carpets crafted to match your vision.",
            },

            {
              title: "Banquet & Hotel Carpets",
              image: "/rug3.png",
              desc: "Luxury carpets for hotels, banquets & premium venues.",
            },

            {
              title: "Modern Abstract Rugs",
              image: "/rug4.png",
              desc: "Contemporary designer rugs for sophisticated spaces.",
            },

          ].map((item) => (

            <div
              key={item.title}
              className="group relative rounded-3xl overflow-hidden shadow-2xl h-[360px] md:h-[420px] hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition duration-700"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">

                <h3 className="text-3xl font-bold text-white translate-y-6 group-hover:translate-y-0 transition duration-500">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-200 leading-7 opacity-0 group-hover:opacity-100 transition duration-700">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-20 bg-white">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose KANISHK CARPETS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Handmade Craftsmanship",
              desc: "Expertly crafted carpets made with premium attention to detail.",
            },

            {
              title: "Custom Sizes & Designs",
              desc: "Tailor-made rugs designed to perfectly suit your space and style.",
            },

            {
              title: "Bulk & B2B Orders",
              desc: "Trusted carpet solutions for hotels, banquets, cafés and projects.",
            },

            {
              title: "Pan India Delivery",
              desc: "Secure and reliable carpet delivery across India.",
            },

          ].map((item) => (

            <div
              key={item.title}
              className="bg-[#f8f5ef] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="py-24 px-6 md:px-20 bg-[#f8f5ef]">

        <h2 className="text-4xl font-bold text-center mb-6">
          Latest Designs
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Explore premium handcrafted rugs and custom carpet creations by KANISHK CARPETS.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "/rug5.jpeg",
            "/rug2.png",
            "/rug3.png",
            "/rug4.png",
            "/rug5.jpeg",
            "/rug2.png",
          ].map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >

              <img
                src={image}
                alt="KANISHK CARPETS"
                className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-125 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-700"></div>

              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-700">

                <h3 className="text-2xl font-bold">
                  KANISHK CARPETS
                </h3>

                <p className="text-gray-200 mt-2">
                  Luxury Handmade Rugs
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

     {/* CONTACT SECTION */}
<section
  id="contact"
  className="py-24 px-6 md:px-20 bg-white"
>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>

      <h2 className="text-5xl font-bold leading-tight">
        Let’s Create Your Perfect Carpet
      </h2>

      <p className="mt-6 text-gray-600 leading-8 text-lg">
        From luxury homes to banquet halls and custom projects,
        KANISHK CARPETS delivers premium handcrafted carpet solutions
        tailored to your space.
      </p>

      <div className="mt-10 flex flex-col gap-4">

        <a
          href="https://wa.me/918887587631"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-4 rounded-full w-fit transition"
        >
          Chat on WhatsApp
        </a>

        <a
          href="https://instagram.com/kanishk.carpets"
          target="_blank"
          className="border border-black px-6 md:px-8 py-4 rounded-full w-fit hover:bg-black hover:text-white transition"
        >
          Visit Instagram
        </a>

      </div>

    </div>

    <div className="bg-[#f8f5ef] rounded-3xl p-10 shadow-2xl">

      <h3 className="text-3xl font-bold mb-8">
        Inquiry Form
      </h3>

      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.currentTarget;

          const name = form.name.value;
          const phone = form.phone.value;
          const message = form.message.value;

          const text =
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Requirement: ${message}`;

          window.open(
            `https://wa.me/918887587631?text=${text}`,
            "_blank"
          );
        }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded-2xl px-6 py-4 outline-none"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-2xl px-6 py-4 outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your carpet requirement..."
          rows={5}
          className="border border-gray-300 rounded-2xl px-6 py-4 outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white py-4 rounded-2xl hover:bg-[#222] transition"
        >
          Send Inquiry
        </button>

      </form>

    </div>

  </div>

</section>
      {/* FLOATING BUTTONS */}
      <a
        href="https://wa.me/918887587631"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition"
      >
        WhatsApp
      </a>

      <a
        href="https://instagram.com/kanishk.carpets"
        target="_blank"
        className="fixed bottom-24 right-6 bg-pink-500 hover:bg-pink-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition"
      >
        Instagram
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-16 px-6 md:px-20">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <div className="flex items-center gap-3 mb-6">

              <img
                src="/logo.webp"
                alt="KANISHK CARPETS"
                className="h-12 w-auto"
              />

              <h2 className="text-2xl font-bold text-white">
                KANISHK CARPETS
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Premium handmade rugs and luxury carpets crafted in Mirzapur
              for elegant homes, hotels, banquet halls and modern interiors.
            </p>

          </div>

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#home">
                Home
              </a>

              <a href="#collections">
                Collections
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="https://instagram.com/kanishk.carpets"
                target="_blank"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/918887587631"
                target="_blank"
              >
                WhatsApp
              </a>

              <p>
                Mirzapur, Uttar Pradesh
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 KANISHK CARPETS • Luxury Handmade Rugs
        </div>

      </footer>

    </main>
  );
}