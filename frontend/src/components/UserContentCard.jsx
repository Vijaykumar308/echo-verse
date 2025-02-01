import { format } from "date-fns"
import { Share2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserSharePopup } from "./UserSharePopup"
import { useState } from "react"

function UserContentCard({pkId, title, category, content, authorName, authorImage, createdAt }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Card key={pkId} className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#0c2d54]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          {content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{format(createdAt, "MMMM d, yyyy")}</span>
        <Button className="bg-[#0c2d54] hover:bg-[#183d6d] text-white" onClick={() => setIsOpen(true)}>
          <Share2 className="mr-2 h-4 w-4 text-white" /> Share
        </Button>
        {isOpen &&  <UserSharePopup setIsOpen={setIsOpen} /> }
      </CardFooter>
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