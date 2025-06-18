"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Calendar, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Club {
  id: number
  name: string
  description: string
  image: string
  members: number
  schedule: string
  category: string
}

interface ClubCardProps {
  club: Club
  viewMode: "grid" | "list"
  index: number
}

export default function ClubCard({ club, viewMode, index }: ClubCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleViewClub = () => {
    // API call to view club details
    console.log("Viewing club:", club.id)
  }

  const handleLikeClub = () => {
    setIsLiked(!isLiked)
    // API call to like/unlike club
    console.log("Toggling like for club:", club.id)
  }

  if (viewMode === "list") {
    return (
      <Card
        className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-in slide-in-from-left-5 fill-mode-both`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 h-48 sm:h-32">
            <Image
              src={club.image || "/placeholder.svg"}
              alt={club.name}
              fill
              className={`object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={handleLikeClub}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </Button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
              <Badge variant="secondary">{club.category}</Badge>
            </div>
            <p className="text-gray-600 mb-4">{club.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {club.members} members
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {club.schedule}
                </div>
              </div>
              <Button onClick={handleViewClub} className="hover:scale-105 transition-transform">
                <Eye className="w-4 h-4 mr-2" />
                View Club
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-in fade-in-50 slide-in-from-bottom-5 fill-mode-both cursor-pointer`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={club.image || "/placeholder.svg"}
            alt={club.name}
            fill
            className={`object-cover rounded-t-lg transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            onClick={handleLikeClub}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            {club.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {club.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{club.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {club.members} members
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {club.schedule}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleViewClub}
          className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105"
          variant="outline"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Club
        </Button>
      </CardFooter>
    </Card>
  )
}
