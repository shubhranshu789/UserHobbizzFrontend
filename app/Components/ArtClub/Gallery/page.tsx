"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { id: "all", label: "All" },
    { id: "ancient", label: "Ancient Sites" },
    { id: "modern", label: "Modern Art" },
    { id: "others", label: "Others" },
    { id: "vintage", label: "Vintage Art" },
  ]

  // Gallery items with their categories
  const galleryItems = [
    {
      id: 1,
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d6/e9/d7/artclub-gallery-est-une.jpg?height=800&width=600",
      alt: "Museum Interior",
      title: "Natural History Museum",
      category: "ancient",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 2,
      src: "https://sdg-migration-id.s3.amazonaws.com/thumbs_Interior-Design-American-Kennel-Club-Museum-of-the-Dog-New-York-04-0319.770x0_q95.jpg?height=1000&width=600",
      alt: "Museum Architecture",
      title: "Museum Interior",
      category: "ancient",
      height: "h-[500px] md:row-span-2",
    },
    {
      id: 3,
      src: "https://www.holidify.com/images/cmsuploads/compressed/The_Arts_House_at_the_Old_Parliament_-_panoramio_20180524181301.jpg?height=800&width=600",
      alt: "London Parliament",
      title: "Houses of Parliament",
      category: "vintage",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 4,
      src: "https://photos.hotelbeds.com/giata/bigger/99/992314/992314a_hb_a_002.jpg?height=800&width=600",
      alt: "Colosseum",
      title: "Colosseum",
      category: "ancient",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 5,
      src: "https://cdn.sanity.io/images/cctd4ker/production/fc460c2783c573bd0904b742d433178a4cc8856d-5120x2880.jpg?height=800&width=600",
      alt: "Sculpture",
      title: "Classical Sculpture",
      category: "ancient",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_VyVn--cYv-_dWn1OkWsdt_YhHLxpociwvHBdZHGemco3n5IGmm9CuFAbzWW8A325Jc&usqp=CAU?height=800&width=600",
      alt: "City Street",
      title: "Paris Street",
      category: "others",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 7,
      src: "https://rinewstoday.com/wp-content/uploads/2023/10/Screen-Shot-2023-10-30-at-11.18.14-AM-1024x975.png?height=800&width=600",
      alt: "Museum Hall",
      title: "Museum Hall",
      category: "vintage",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 8,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjivae0hfOfM9ASNHlhggqIGpVz8Wtz-H7LDW3XLpKJry-vlGIptE3Mc2TnmvaMBAlqJiwA_qaoaEGvT9BvHZKZ9JHzrcE0yj5GeRxVbZuyPcPHDZcsDT743jsmLWwDTXRoNSravvRhBVyKRs8/s1600/PalladioChiswickLondon.jpg?height=800&width=600",
      alt: "Classical Architecture",
      title: "Classical Architecture",
      category: "ancient",
      height: "h-[300px] md:h-[400px]",
    },
    {
      id: 9,
      src: "https://media.architecturaldigest.com/photos/55e76762cd709ad62e8e8d4e/master/pass/dam-images-architecture-2015-09-university-art-museums-university-art-museums-01.jpg?height=800&width=600",
      alt: "Art Gallery",
      title: "Modern Gallery",
      category: "modern",
      height: "h-[300px] md:h-[400px]",
    },
  ]

  // Filter items based on active tab
  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.prod.website-files.com/644064e781b532845d5d8cec/652581987e77601a480d137c_DSC04635.JPG?height=800&width=1920"
            alt="Gallery Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm text-blue-600 mb-2">Our Great Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">From Our Gallery</h2>
        </div>

        {/* Filter Tabs */}
        <div className="w-full mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab.id ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-800 hover:bg-blue-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className={`relative overflow-hidden rounded-md cursor-pointer group ${item.height}`}>
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/60 transition-all duration-300 flex items-end opacity-0 group-hover:opacity-100">
                  <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-lg font-medium">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
