import { useState, useMemo } from "react"
// import type { User } from "../types/user-share"

const defaultUsers = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "4", name: "Diana Ross", email: "diana@example.com", avatar: "/placeholder.svg?height=40&width=40" },
]

export function useUserSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUsers, setSelectedUsers] = useState([])

  const filteredUsers = useMemo(() => {
    return defaultUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const toggleUserSelection = (user) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.id === user.id) ? prev.filter((u) => u.id !== user.id) : [...prev, user],
    )
  }

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
    selectedUsers,
    toggleUserSelection,
  }
}

