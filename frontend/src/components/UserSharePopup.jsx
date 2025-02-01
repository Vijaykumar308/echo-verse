import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import type { UserSharePopupProps } from "../types/user-share"
import { useUserSearch } from "../hooks/useUserSearch";

export function UserSharePopup({ isOpen = true, setIsOpen, onShare }) {
  const { searchTerm, setSearchTerm, filteredUsers, selectedUsers, toggleUserSelection } = useUserSearch();

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
              <div key={user.id} className="flex items-center space-x-2 p-2 hover:bg-[#f0f4f8] rounded-md">
                <Checkbox
                  id={`user-${user.id}`}
                  checked={selectedUsers.some((u) => u.id === user.id)}
                  onCheckedChange={() => toggleUserSelection(user)}
                  className="border-[#0c2d54] text-[#0c2d54] focus:ring-[#0c2d54]"
                />
                <label
                  htmlFor={`user-${user.id}`}
                  className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                >
                  <Avatar className="h-8 w-8 border border-[#0c2d54]">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-[#0c2d54] text-white">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#0c2d54]">{user.name}</div>
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

