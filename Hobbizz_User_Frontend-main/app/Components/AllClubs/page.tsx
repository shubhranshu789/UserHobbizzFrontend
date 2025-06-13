import Header from "../AllClubs/files/header"

import HeroSection from "../AllClubs/files/hero-section"



import ClubsSection from "../AllClubs/files/clubs-section"


import Footer from "../AllClubs/files/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <ClubsSection />
      </main>
      <Footer />
    </div>
  )
}
