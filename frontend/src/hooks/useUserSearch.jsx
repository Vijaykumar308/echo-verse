import { useState} from "react";
export function useUserSearch(users) {
  const [searchTerm, setSearchTerm] = useState("")
 
  const filteredUsers = users.filter((user) => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return { searchTerm, setSearchTerm, filteredUsers }
}

