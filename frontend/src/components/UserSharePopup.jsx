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
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share with Users</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="search"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid gap-2 max-h-[200px] overflow-y-auto">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`user-${user.id}`}
                  checked={selectedUsers.some((u) => u.id === user.id)}
                  onCheckedChange={() => toggleUserSelection(user)}
                />
                <label
                  htmlFor={`user-${user.id}`}
                  className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleShare} disabled={selectedUsers.length === 0}>
            Share with {selectedUsers.length} user{selectedUsers.length !== 1 ? "s" : ""}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

