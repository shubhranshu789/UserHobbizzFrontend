import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden p-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 relative mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="rounded-full object-cover" />
        </div>

        <h3 className="text-lg font-medium text-center">{name}</h3>

        <span className="inline-block bg-sky-200 text-sky-700 px-3 py-1 rounded-full text-sm my-2">{role}</span>

        <p className="text-center text-gray-600 text-sm mt-2">{description}</p>

        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-sky-500">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-sky-500">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-sky-500">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
