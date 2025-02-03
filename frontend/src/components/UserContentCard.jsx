import { format } from "date-fns"
import { Share2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserSharePopup } from "./UserSharePopup"
import { useState } from "react"
import { Edit2, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpen } from 'lucide-react';
import { Captions } from 'lucide-react';

function UserContentCard({pkId, title, category, content, authorName, authorImage, createdAt }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Card key={pkId} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#0c2d54] to-[#183d6d] text-white">
        <CardTitle className="text-xl font-semibold flex gap-1"> <Captions size={20} /> {title}</CardTitle>
        <p className="capitalize flex items-center gap-2"> <BookOpen size={16}/> {category}</p>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center gap-4 bg-gray-50 px-6 py-4">
        <span className="text-sm text-gray-500 font-medium">{format(createdAt, "MMMM d, yyyy")}</span>
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="bg-[#0c2d54] hover:bg-[#183d6d] text-white"   onClick={() => setIsOpen(true)}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      {isOpen && <UserSharePopup setIsOpen={setIsOpen} />}
    </Card>
      // <Card className="w-full max-w-md mx-auto bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
      //   <CardHeader className="flex flex-row items-center gap-4 p-4">
      //     <Avatar>
      //       <AvatarImage src={authorImage} alt={authorName} />
      //       <AvatarFallback>{authorName.slice(0, 2).toUpperCase()}</AvatarFallback>
      //     </Avatar>
      //     <div>
      //       <h3 className="text-lg font-semibold">{authorName}</h3>
      //       <p className="text-sm text-muted-foreground">{format(createdAt, "MMMM d, yyyy")}</p>
      //     </div>
      //   </CardHeader>
      //   <div className="px-4 py-2 bg-gray-300">
      //       <span className="text-sm font-medium text-primary capitalize">{category}</span>
      //   </div>
      //   <CardContent className="p-4">
      //     <p className="text-base leading-relaxed">{content}</p>
      //   </CardContent>
      //   <CardFooter className="flex justify-between items-center p-4 bg-muted/50">
      //     <p className="text-sm text-muted-foreground">Posted {format(createdAt, "h:mm a")}</p>
      //     <Button variant="outline" size="sm" onClick={() => setIsOpen(true)} className="flex items-center gap-2">
      //       <Share2 className="w-4 h-4" />
      //       Share
      //       {isOpen &&  <UserSharePopup setIsOpen={setIsOpen} /> }
      //     </Button>
      //   </CardFooter>
      // </Card>
    )
}  

export default UserContentCard;