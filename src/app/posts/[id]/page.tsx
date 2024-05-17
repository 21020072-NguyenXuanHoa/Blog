import { Post } from "../../../../types/post";
import { getPostById } from '../../../../lib/posts';
import Markdown from "markdown-to-jsx";
import { PreBlock, Heading, ArticleLink, LinkBtn } from "../../components/posts";

export default function Page({ params }: { params: { id: string } }) {
    const id: string = params.id;
    const post: Post = getPostById(id);

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-100">
            <div className="font-bold text-5xl md:mb-24">Zuanki's Blog</div>
            <div key={post.id} className="mt-8 max-w-3xl">
                <h1 className="font-bold text-3xl md:text-4xl">{post.title}</h1>
                <div className="mt-6">
                    <Markdown options={{
                        namedCodesToUnicode: { ndash: "–", minus: "−", rarr: "→" },
                        overrides: {
                            LinkBtn: { component: LinkBtn },
                            pre: { component: PreBlock },
                            a: { component: ArticleLink },
                            h2: { component: Heading, props: { level: 2 } },
                            h3: { component: Heading, props: { level: 3 } },
                            h4: { component: Heading, props: { level: 4 } },
                            h5: { component: Heading, props: { level: 5 } },
                            h6: { component: Heading, props: { level: 6 } },
                        }
                    }}>
                        {post.content}
                    </Markdown>
                </div>
            </div>
        </main>
    );
}
