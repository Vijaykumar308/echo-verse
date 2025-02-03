import axios from "axios";
import { useState, useMemo, useEffect } from "react"
// import type { User } from "../types/user-share"

// const defaultUsers = [
//   { id: "1", name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholder.svg?height=40&width=40" },
//   { id: "2", name: "Bob Smith", email: "bob@example.com", avatar: "/placeholder.svg?height=40&width=40" },
//   { id: "3", name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg?height=40&width=40" },
//   { id: "4", name: "Diana Ross", email: "diana@example.com", avatar: "/placeholder.svg?height=40&width=40" },
// ]

export function useUserSearch(users) {
  const [searchTerm, setSearchTerm] = useState("")
 
  const filteredUsers = users.filter((user) => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers
  }
}

