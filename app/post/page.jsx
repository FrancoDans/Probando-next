import { ListOfPost } from "./listOfPost.jsx";
const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
};

export default async function PostPage({ params }) {
    const posts = await fetchPost();
    return (
        <section>
            <ListOfPost />
        </section>
    );
}
