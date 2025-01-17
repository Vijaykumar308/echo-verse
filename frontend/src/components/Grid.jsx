import PostCard from "./PostCard";

function Grid({ content }) {
  return (
    <div className="py-20 grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10"> 
      {Array.isArray(content) ? content[0]?.authUserPosts.map((item, index) => (
        <PostCard key={index} item={item} />
      )): content}
    </div>
    
  );
}

export default Grid;