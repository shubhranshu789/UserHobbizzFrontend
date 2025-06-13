"use client"

import { useState } from "react"
import { Filter, SortAsc, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import ClubCard from "@/components/club-card"
import ClubCard from "./club-card"
import Pagination from "./pagination"

// Mock data - replace with API call
const clubsData = [
  {
    id: 1,
    name: "Art Club",
    description: "Express yourself through colors and canvas",
    image: "/placeholder.svg?height=200&width=300",
    members: 120,
    schedule: "Tue, Thu",
    category: "Creative",
  },
  {
    id: 2,
    name: "Music Club",
    description: "Create melodies that move hearts",
    image: "/placeholder.svg?height=200&width=300",
    members: 85,
    schedule: "Mon, Wed, Fri",
    category: "Creative",
  },
  {
    id: 3,
    name: "Photography Club",
    description: "Capture moments, create memories",
    image: "/placeholder.svg?height=200&width=300",
    members: 64,
    schedule: "Sat, Sun",
    category: "Creative",
  },
  {
    id: 4,
    name: "Dance Club",
    description: "Move to the rhythm of your heart",
    image: "/placeholder.svg?height=200&width=300",
    members: 92,
    schedule: "Tue, Thu, Sat",
    category: "Sports",
  },
  {
    id: 5,
    name: "Robotics Club",
    description: "Build the future with innovation",
    image: "/placeholder.svg?height=200&width=300",
    members: 76,
    schedule: "Wed, Fri",
    category: "Technology",
  },
  {
    id: 6,
    name: "Debate Club",
    description: "Voice your thoughts, shape opinions",
    image: "/placeholder.svg?height=200&width=300",
    members: 58,
    schedule: "Mon, Thu",
    category: "Academic",
  },
]

export default function ClubsSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("name")
  const [filterBy, setFilterBy] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredClubs = clubsData.filter(
    (club) => filterBy === "all" || club.category.toLowerCase() === filterBy.toLowerCase(),
  )

  const sortedClubs = [...filteredClubs].sort((a, b) => {
    switch (sortBy) {
      case "members":
        return b.members - a.members
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(sortedClubs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedClubs = sortedClubs.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Clubs</h2>
            <p className="text-gray-600">Find your perfect hobby community</p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterBy("all")}>All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("creative")}>Creative</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("sports")}>Sports</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("technology")}>Technology</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("academic")}>Academic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                  <SortAsc className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("name")}>Name</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("members")}>Members</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Mode */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none hover:scale-105 transition-transform"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none hover:scale-105 transition-transform"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div
          className={`grid gap-6 mb-8 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {paginatedClubs.map((club, index) => (
            <ClubCard key={club.id} club={club} viewMode={viewMode} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  )
}
