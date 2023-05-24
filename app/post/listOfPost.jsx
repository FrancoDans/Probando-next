import { LikeButton } from "./LikeButton";
import Link from "next/link";
const fetchPost = () => {
    console.log("Entro al fetch");
    return fetch("https://jsonplaceholder.typicode.com/albums/1/photos", {
        next: {
            revalidate: 60,
        },
    }).then((res) => res.json());
};
export async function ListOfPost({ params }) {
    const posts = await fetchPost();
    return posts.slice(0, 9).map((post) => (
        <div key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <h2
                    style={{
                        color: "#09f",
                        fontFamily: "fantasy",
                    }}
                >
                    {post.title}
                </h2>
                <p style={{ color: "#c8e9ff", fontFamily: "cursive" }}>
                    {post.thumbnailUrl}
                </p>
            </Link>
            <LikeButton id={post.id} />
        </div>
    ));
}
