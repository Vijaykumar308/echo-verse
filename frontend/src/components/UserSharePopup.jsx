import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import type { UserSharePopupProps } from "../types/user-share"
import { useUserSearch } from "../hooks/useUserSearch";
import { useEffect, useState } from "react"
import axios from "axios"

export function UserSharePopup({ isOpen = true, setIsOpen, onShare }) {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([])
    
  const fetchAllUsers = async() => {
    try {
      const usersData = await axios(`${import.meta.env.VITE_BACKEND_BASE_URL}/getAllUsers`);
      console.log('userData: ',usersData);
      return usersData.data.users;
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllUsers()
    .then((res) => {setUsers((prevUsers) => [...prevUsers, ...res])})
    .catch((err) => {console.log(err)})
  }, []);

  const { searchTerm, setSearchTerm, filteredUsers} = useUserSearch(users);
  
  const toggleUserSelection = (user) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u._id === user._id) ? prev.filter((u) => u._id !== user._id) : [...prev, user],
    )
  }

  const handleShare = () => {
    console.log('post shared..');
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[425px] border-[#0c2d54] border-2">
        <DialogHeader>
          <DialogTitle className="text-[#0c2d54] text-xl font-bold">Share with Users</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="search"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-[#0c2d54] focus:ring-[#0c2d54] focus:border-[#0c2d54]"
            />
          </div>
          <div className="grid gap-2 max-h-[200px] overflow-y-auto">
            {filteredUsers.map((user) => (
              <div key={user._id} className="flex items-center space-x-2 p-2 hover:bg-[#f0f4f8] rounded-md">
                <Checkbox
                  id={`user-${user._id}`}
                  checked={selectedUsers.some((u) => u._id === user._id)}
                  onCheckedChange={() => toggleUserSelection(user)}
                  className="border-[#0c2d54] text-[#0c2d54] focus:ring-[#0c2d54]"
                />
                <label
                  htmlFor={`user-${user._id}`}
                  className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                >
                  <Avatar className="h-8 w-8 border border-[#0c2d54]">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-[#0c2d54] uppercase text-white">{user.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#0c2d54]">{user.username}</div>
                    <div className="text-xs text-[#183d6d]">{user.email}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleShare}
            disabled={selectedUsers.length === 0}
            className="bg-[#0c2d54] hover:bg-[#183d6d] text-white"
          >
            Share with {selectedUsers.length} user{selectedUsers.length !== 1 ? "s" : ""}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

