"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Brush, Eye, Heart, Star, Sparkles } from "lucide-react"

import Navbar from "../Navbar/page"
import Footer from "../../Footer/page"

const artists = [
  {
    id: 1,
    name: "Pablo Picasso",
    years: "1881 - 1973",
    image: "/legacy/Pablo.JPG?height=120&width=120",
    biography:
      "Spanish painter and sculptor who co-founded the Cubist movement and is considered one of the most influential artists of the 20th century. Known for his revolutionary approach to form and perspective.",
    contributions: [
      "Co-founder Cubism movement",
      "Created over 50,000 artworks",
      "Blue and Rose periods",
      "Guernica masterpiece",
    ],
    influence:
      "Picasso's innovative approach to form and perspective revolutionized modern art. His constant reinvention helped art evolve from traditional representation to abstract artistic expression.",
  },
  {
    id: 2,
    name: "Leonardo da Vinci",
    years: "1452 - 1519",
    image: "/legacy/Leonardo.JPG?height=120&width=120",
    biography:
      "Italian polymath whose areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, paleontology, and cartography.",
    contributions: [
      "Mona Lisa and The Last Supper",
      "Scientific illustrations",
      "Engineering designs",
      "Anatomical studies",
    ],
    influence:
      "Da Vinci's interdisciplinary approach combined art with science and technology. His innovative work bridged the gap between art, science, and technology in their creative work.",
  },
  {
    id: 3,
    name: "Vincent van Gogh",
    years: "1853 - 1890",
    image: "/legacy/Vincent.JPG?height=120&width=120",
    biography:
      "Dutch post-impressionist painter known for his bold colors, dramatic brushwork, and emotional honesty. Created over 2,000 artworks in just over a decade.",
    contributions: [
      "Starry Night masterpiece",
      "Post-impressionist technique",
      "Bold color usage",
      "Emotional color theory",
    ],
    influence:
      "Van Gogh's passionate dedication and innovative use of color and brushwork influenced countless artists. His authentic and personal style in artistic expression.",
  },
  {
    id: 4,
    name: "Frida Kahlo",
    years: "1907 - 1954",
    image: "/legacy/Frida.JPG?height=120&width=120",
    biography:
      "Mexican artist known for her self-portraits and works inspired by nature. Mexican folk art, and her own physical and emotional pain and disability.",
    contributions: [
      "Surrealist self-portraits",
      "Mexican cultural themes",
      "Feminist art movement",
      "Personal narrative in art",
    ],
    influence:
      "Kahlo's courage to express personal truth and cultural identity encouraged her contemporaries to explore their own perspectives and stories.",
  },
  {
    id: 5,
    name: "Michelangelo",
    years: "1475 - 1564",
    image: "/legacy/Michelangelo.JPG?height=120&width=120",
    biography:
      "Italian Renaissance sculptor, painter, architect, and poet who exerted an unparalleled influence on the development of Western art.",
    contributions: ["Sistine Chapel ceiling", "David sculpture", "Pietà masterpiece", "St. Peter's Basilica design"],
    influence:
      "Michelangelo's pursuit of perfection and mastery across multiple disciplines inspired countless artists to strive for excellence and lifelong learning.",
  },
  {
    id: 6,
    name: "Georgia O'Keeffe",
    years: "1887 - 1986",
    image: "/legacy/Georgia.JPG?height=120&width=120",
    biography:
      "American modernist painter known for her paintings of enlarged flowers, New York skyscrapers, and New Mexico landscapes.",
    contributions: [
      "Large-scale flower paintings",
      "American modernism",
      "Desert landscapes",
      "Female artistic perspective",
    ],
    influence:
      "O'Keeffe's bold artistic vision and unique perspective helped club members to develop their distinctive artistic voice and perspective.",
  },
]

export default function ClubLegacy() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Palette className="w-32 h-32 text-[#155dfc] animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#155dfc] mb-4 relative z-10">Club Legacy</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto relative z-10">
                Celebrating the masters who shaped the world of art and continue to inspire generations
            </p>
            <div className="flex justify-center gap-2 mt-4">
                <Sparkles className="w-6 h-6 text-[#155dfc] animate-bounce" />
                <Star className="w-6 h-6 text-[#155dfc] animate-bounce delay-100" />
                <Sparkles className="w-6 h-6 text-[#155dfc] animate-bounce delay-200" />
            </div>
            </div>

            {/* Artists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artists.map((artist, index) => (
                <Card
                key={artist.id}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#155dfc]/20 cursor-pointer transform hover:-translate-y-2 ${
                    hoveredCard === artist.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(artist.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                }}
                >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#155dfc]/5 to-[#155dfc]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating icons */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex gap-1">
                    <Brush className="w-4 h-4 text-[#155dfc] animate-pulse" />
                    <Eye className="w-4 h-4 text-[#155dfc] animate-pulse delay-100" />
                    <Heart className="w-4 h-4 text-[#155dfc] animate-pulse delay-200" />
                    </div>
                </div> */}

                <CardHeader className="text-center pb-4">
                    {/* Profile Image */}
                    <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#155dfc]/20 group-hover:border-[#155dfc]/60 transition-all duration-300 transform group-hover:scale-110">
                        <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#155dfc]/30 animate-ping opacity-0 group-hover:opacity-100" />
                    </div>

                    {/* Name and Years */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 group-hover:text-[#155dfc] transition-colors duration-300">
                    {artist.name}
                    </h2>
                    <Badge variant="outline" className="text-[#155dfc] border-[#155dfc]/30 group-hover:bg-[#155dfc]/10">
                    {artist.years}
                    </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Biography */}
                    <div>
                    <h3 className="font-semibold text-[#155dfc] mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#155dfc] rounded-full animate-pulse" />
                        Biography
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{artist.biography}</p>
                    </div>

                    {/* Major Contributions */}
                    <div>
                    <h3 className="font-semibold text-[#155dfc] mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#155dfc] rounded-full animate-pulse" />
                        Major Contributions
                    </h3>
                    <ul className="space-y-1">
                        {artist.contributions.map((contribution, idx) => (
                        <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start gap-2 transform transition-all duration-300 hover:translate-x-1"
                            style={{
                            animationDelay: `${idx * 50}ms`,
                            }}
                        >
                            <span className="w-1 h-1 bg-[#155dfc] rounded-full mt-2 flex-shrink-0" />
                            {contribution}
                        </li>
                        ))}
                    </ul>
                    </div>

                    {/* Club Influence */}
                    <div>
                    <h3 className="font-semibold text-[#155dfc] mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#155dfc] rounded-full animate-pulse" />
                        Club Influence
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{artist.influence}</p>
                    </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#155dfc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
            ))}
            </div>

            {/* Footer */}
            


        </div>

        <style jsx>{`
            @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }
        `}</style>
        </div>

        <Footer/>
    </div>
  )
}
