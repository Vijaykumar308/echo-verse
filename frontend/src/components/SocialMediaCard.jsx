import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

import { Heart, Share, Bookmark } from "lucide-react"

function SocialMediaCard({ username, profilePic, postImage, likes, caption }) {
    const [isFollowing, setIsFollowing] = useState(false)
    const [likeCount, setLikeCount] = useState(likes)
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const handleFollow = () => setIsFollowing(!isFollowing)
    
    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    }

    const handleSave = () => setIsSaved(!isSaved)

  return (
    <Card className="w-full max-w-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={profilePic} alt={username} />
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-bold">{username}</span>
      </div>
      <Button variant={isFollowing ? "secondary" : "default"} size="sm" onClick={handleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </CardHeader>
    <CardContent className="p-0">
      <img src={postImage || "/placeholder.svg"} alt="Post content" className="w-full h-auto" />
    </CardContent>
    <CardFooter className="flex flex-col items-start space-y-2">
      <div className="flex justify-between w-full">
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={handleLike}>
            <Heart className={isLiked ? "fill-current text-red-500" : ""} />
          </Button>
          <Button variant="ghost" size="icon">
            <Share />
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={handleSave}>
          <Bookmark className={isSaved ? "fill-current" : ""} />
        </Button>
      </div>
      <p className="font-semibold">{likeCount} likes</p>
      <p>
        <span className="font-semibold">{username}</span> {caption}
      </p>
    </CardFooter>
  </Card>

  )
}

export default SocialMediaCard