import { getSortedPostsData } from '../../lib/posts'
import { Post } from '../../types/post'
import Image from 'next/image';

export default function Home() {
  const allPostsData: Post[] = getSortedPostsData()

  // Time now
  console.log(new Date().toLocaleString())

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-100">
      <div className="font-bold text-5xl mb-8 md:mb-24">Zuanki's Blog</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {allPostsData.map((post) => (
          <div key={post.id} className="max-w-sm bg-gray-100 border-gray-200 rounded-2xl ">

            <Image className="rounded-2xl" src={post.image} alt="" width={400} height={300} />

            <div className="p-4 md:p-5">
              <a href={`/posts/${post.id}`}>
                <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight ">{post.title}</h5>
              </a>
              <div className='flex font-bold'>
                <p className="text-sm md:text-base text-gray-600 ">
                  {post.location}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
