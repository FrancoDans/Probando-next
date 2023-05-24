export default function Post({ params }) {
    const { id } = params;

    return <h1>Esto es el ID: {id}</h1>;
}
