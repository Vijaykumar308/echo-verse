import { format } from "date-fns"
import { Share2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

function UserContentCard({category, content, authorName, authorImage, createdAt, onShare }) {
    return (
      <Card className="w-full max-w-md mx-auto bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <Avatar>
            <AvatarImage src={authorImage} alt={authorName} />
            <AvatarFallback>{authorName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{authorName}</h3>
            <p className="text-sm text-muted-foreground">{format(createdAt, "MMMM d, yyyy")}</p>
          </div>
        </CardHeader>
        <div className="px-4 py-2 bg-gray-300">
            <span className="text-sm font-medium text-primary capitalize">{category}</span>
        </div>
        <CardContent className="p-4">
          <p className="text-base leading-relaxed">{content}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground">Posted {format(createdAt, "h:mm a")}</p>
          <Button variant="outline" size="sm" onClick={onShare} className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </CardFooter>
      </Card>
    )
}  

export default UserContentCard;