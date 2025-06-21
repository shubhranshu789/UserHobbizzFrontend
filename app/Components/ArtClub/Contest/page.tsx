"use client"

import type React from "react"
import { useState } from "react"
import { Trophy, Plus, Users, Award, Upload, Medal, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/app/Components/ArtClub/Contest/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/Components/ArtClub/Contest/card"
import { Input } from "@//app/Components/ArtClub/Contest/input"
import { Label } from "@/app/Components/ArtClub/Contest/label"
import { Textarea } from "@/app/Components/ArtClub/Contest/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/Components/ArtClub/Contest/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/Components/ArtClub/Contest/avatar"

export default function HomePage() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file drop logic here
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const winners = [
    {
      place: 1,
      name: "Sarah Johnson",
      artwork: "Neon Dreams",
      score: "95/100",
      avatar: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      badgeColor: "bg-yellow-500",
    },
    {
      place: 2,
      name: "Mike Chen",
      artwork: "Urban Harmony",
      score: "88/100",
      avatar: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      iconColor: "text-gray-600",
      badgeColor: "bg-gray-500",
    },
    {
      place: 3,
      name: "Emma Davis",
      artwork: "Digital Sunset",
      score: "85/100",
      avatar: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      badgeColor: "bg-orange-500",
    },
  ]

  const allParticipants = [
    {
      rank: 1,
      name: "Sarah Johnson",
      artwork: "Neon Dreams",
      score: "95/100",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 2,
      name: "Mike Chen",
      artwork: "Urban Harmony",
      score: "88/100",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 3,
      name: "Emma Davis",
      artwork: "Digital Sunset",
      score: "85/100",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Club Contests</h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("contests")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Active Contests
              </button>
              <button
                onClick={() => scrollToSection("submit")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Submit Entry
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Results
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Club Contests</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Showcase your creativity and compete with fellow artists in exciting challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contests")}
              className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Trophy className="w-5 h-5 mr-2" />
              View Active Contests
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("submit")}
              className="border-sky-200 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Submit Entry
            </Button>
          </div>
        </div>
      </section>

      {/* Active Contests Section */}
      <section id="contests" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active Contests</h2>
            <p className="text-lg text-gray-600">Join these exciting competitions and showcase your talent</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Featured Contest - Large Card */}
            <div className="lg:col-span-2">
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <span className="text-sm text-sky-500 font-medium">Ends in 5 days</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Digital Art Masterpiece</h3>
                  <p className="text-gray-600 mb-6">
                    Create a stunning digital artwork that represents the theme "Future of Art". Use any digital medium
                    of your choice.
                  </p>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-1">$500</div>
                      <div className="text-gray-600">Prize Pool</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-1">47</div>
                      <div className="text-gray-600">Participants</div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-gray-600 mb-3">Time Remaining</div>
                    <div className="flex justify-center gap-4 text-2xl md:text-3xl font-bold text-sky-500">
                      <div className="text-center">
                        <div>05</div>
                        <div className="text-xs text-gray-500 font-normal">Days</div>
                      </div>
                      <div className="text-center">
                        <div>14</div>
                        <div className="text-xs text-gray-500 font-normal">Hours</div>
                      </div>
                      <div className="text-center">
                        <div>32</div>
                        <div className="text-xs text-gray-500 font-normal">Minutes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-full transition-all duration-200 hover:scale-105"
                    onClick={() => scrollToSection("submit")}
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Submit Entry
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Side Contests */}
            <div className="space-y-6">
              <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Open</Badge>
                    <span className="text-sm text-gray-500">12 days left</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Photography Challenge</h3>
                  <p className="text-gray-600 text-sm mb-4">Capture the essence of campus life through your lens</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    23 participants
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded-full transition-all duration-200 hover:scale-105"
                    size="sm"
                    onClick={() => scrollToSection("submit")}
                  >
                    Join Contest
                  </Button>
                </CardFooter>
              </Card>

              <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">New</Badge>
                    <span className="text-sm text-gray-500">25 days left</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Art Revival</h3>
                  <p className="text-gray-600 text-sm mb-4">Reimagine classical techniques with modern themes</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />8 participants
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded-full transition-all duration-200 hover:scale-105"
                    size="sm"
                    onClick={() => scrollToSection("submit")}
                  >
                    Join Contest
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Pagination */}
          
        </div>
      </section>

      {/* Submit Entry Section */}
      <section id="submit" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Submit Your Entry</h2>
            <p className="text-lg text-gray-600">Upload your artwork and join the competition</p>
          </div>

          <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contest" className="text-base font-medium">
                      Contest Selection
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 transition-all duration-200 hover:border-sky-300">
                        <SelectValue placeholder="Digital Art Masterpiece" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital-art">Digital Art Masterpiece</SelectItem>
                        <SelectItem value="photography">Photography Challenge</SelectItem>
                        <SelectItem value="traditional">Traditional Art Revival</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base font-medium">
                      Entry Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Give your artwork a title"
                      className="h-12 transition-all duration-200 hover:border-sky-300 focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your artwork and inspiration"
                    className="min-h-32 resize-none transition-all duration-200 hover:border-sky-300 focus:border-sky-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-medium">Upload Artwork</Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 cursor-pointer ${
                      dragActive
                        ? "border-sky-400 bg-sky-50 scale-105"
                        : "border-gray-300 hover:border-gray-400 hover:scale-102"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                    <p className="text-sm text-gray-500">Supports: JPG, PNG, PDF (Max 10MB)</p>
                  </div>
                </div>

                

                <Button
                  type="submit"
                  className="w-full bg-sky-400 hover:bg-sky-500 text-white py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Submit Entry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contest Results Section */}
      <section id="results" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contest Results</h2>
            <p className="text-lg text-gray-600">Celebrating our talented winners and their amazing works</p>
          </div>

          {/* Winner Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {winners.map((winner) => (
              <Card
                key={winner.place}
                className={`${winner.bgColor} ${winner.borderColor} border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${winner.badgeColor} flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110`}
                  >
                    {winner.place === 1 && <Trophy className="w-8 h-8 text-white" />}
                    {winner.place === 2 && <Medal className="w-8 h-8 text-white" />}
                    {winner.place === 3 && <Award className="w-8 h-8 text-white" />}
                  </div>
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white shadow-lg transition-all duration-300 hover:scale-110">
                    <AvatarImage src={winner.avatar || "/placeholder.svg"} alt={winner.name} />
                    <AvatarFallback>
                      {winner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{winner.name}</h3>
                  <p className="text-gray-600 mb-4">"{winner.artwork}"</p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Badge
                      className={`${winner.badgeColor} text-white hover:${winner.badgeColor} transition-all duration-200 hover:scale-105`}
                    >
                      {winner.place === 1 && "1st Place"}
                      {winner.place === 2 && "2nd Place"}
                      {winner.place === 3 && "3rd Place"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sky-500 hover:text-sky-600 transition-all duration-200 hover:scale-105"
                    >
                      View Certificate
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Complete Rankings */}
          <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Complete Rankings</h3>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-2 text-gray-600 font-medium">Rank</th>
                      <th className="text-left py-4 px-2 text-gray-600 font-medium">Participant</th>
                      <th className="text-left py-4 px-2 text-gray-600 font-medium">Artwork</th>
                      <th className="text-left py-4 px-2 text-gray-600 font-medium">Score</th>
                      <th className="text-left py-4 px-2 text-gray-600 font-medium">Certificate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allParticipants.map((participant) => (
                      <tr
                        key={participant.rank}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 hover:scale-[1.01]"
                      >
                        <td className="py-4 px-2">
                          <span
                            className={`font-bold ${
                              participant.rank === 1
                                ? "text-yellow-600"
                                : participant.rank === 2
                                  ? "text-gray-600"
                                  : participant.rank === 3
                                    ? "text-orange-600"
                                    : "text-gray-900"
                            }`}
                          >
                            #{participant.rank}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 transition-all duration-200 hover:scale-110">
                              <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                              <AvatarFallback>
                                {participant.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-900">{participant.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{participant.artwork}</td>
                        <td className="py-4 px-2 font-medium text-gray-900">{participant.score}</td>
                        <td className="py-4 px-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-sky-500 hover:text-sky-600 transition-all duration-200 hover:scale-105"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
