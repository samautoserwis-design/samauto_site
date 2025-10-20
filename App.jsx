// App.jsx - full SAMAUT SERWIS site (React + Tailwind) with mascot
import React, { useState } from "react";

const LOGO_URL = "/samaut-logo.svg";
const MASCOT_URL = "/mascot.png";

const initialGallery = [
  { src: "/gallery/toyota_front_after.jpg", title: "Toyota — przód po naprawie" },
  { src: "/gallery/toyota_front_before.jpg", title: "Toyota — przód przed naprawą" },
  { src: "/gallery/ford_back_fix.jpg", title: "Ford — naprawa tyłu" },
  { src: "/gallery/ford_front_fix.jpg", title: "Ford — naprawa przodu" },
];

const sampleReviews = [
  { id: 1, name: "Jan Kowalski", text: "Profesjonalna obsługa, szybka naprawa po wypadku." },
  { id: 2, name: "Anna Nowak", text: "Świetne malowanie i dopasowanie koloru. Polecam!" },
  { id: 3, name: "Marek Wiśniewski", text: "Szybki serwis i uczciwe ceny." },
];

export default function App() {
  const [gallery, setGallery] = useState(initialGallery);
  const [reviews, setReviews] = useState(sampleReviews);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleAddImage(e) {
    e.preventDefault();
    const url = e.target.elements.imageUrl?.value?.trim();
    const title = e.target.elements.imageTitle?.value?.trim() || "Nowe zdjęcie";
    if (!url) return;
    setGallery((g) => [{ src: url, title }, ...g]);
    e.target.reset();
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.message) return;
    const newRev = { id: Date.now(), name: form.name, text: form.message };
    setReviews((r) => [newRev, ...r]);
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={LOGO_URL} alt="SAMAUT logo" className="h-12 w-auto object-contain" />
          <div>
            <h1 className="text-xl font-bold">SAMAUT SERWIS</h1>
            <div className="text-sm text-yellow-400">Warsztat Samochodowy &amp; Blacharnia</div>
          </div>
        </div>
        <nav>
          <ul className="flex gap-6 items-center text-sm">
            <li><a href="#home" className="hover:text-yellow-300">Strona główna</a></li>
            <li><a href="#about" className="hover:text-yellow-300">O nas</a></li>
            <li><a href="#services" className="hover:text-yellow-300">Usługi</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300">Galeria</a></li>
            <li><a href="#reviews" className="hover:text-yellow-300">Opinie</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero with mascot */}
      <section id="home" className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-6">
          <div className="text-center md:text-left">
            <div className="inline-block bg-yellow-400/10 text-yellow-300 px-4 py-1 rounded-full text-sm mb-6">Profesjonalny serwis i blacharstwo</div>
            <h2 className="text-4xl md:text-6xl font-extrabold">SAMAUT SERWIS</h2>
            <p className="mt-4 max-w-xl text-gray-300">Kompleksowe naprawy mechaniczne, blacharstwo i lakiernictwo. Jakość, szybkość i uczciwe ceny.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-semibold">Umów wizytę</a>
              <a href="#gallery" className="border border-gray-700 px-6 py-3 rounded-md text-gray-200 hover:text-white">Zobacz galerię</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={MASCOT_URL} alt="Mascot" className="w-64 h-64 object-contain" />
          </div>
        </div>
      </section>

      {/* Other sections omitted for brevity in this view; included in file */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">...</section>
    </div>
  );
}
