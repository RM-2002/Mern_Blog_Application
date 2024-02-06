import "./posts.css";
import Post from "../post/Postname";

export default function posts({posts}) {
  return (
    <div className="posts">
    {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}

    </div>
  )
}
