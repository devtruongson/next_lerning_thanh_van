export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/posts", {
        next: {
            tags: ["post"],
        },
    });
    const data: { id: string; title: string; body: string }[] =
        await res.json();

    const slugMaping = data.map((post) => ({
        slug: post.id,
    }));

    console.log(slugMaping);
    return slugMaping;
}

export default async function Detail({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    console.log(params.slug);
    const res = await fetch(`http://localhost:5000/posts/${params.slug}`);
    const data: { id: number; title: string; body: string }[] =
        await res.json();

    console.log(data);

    return <div>{JSON.stringify(data)}</div>;
}
