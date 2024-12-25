import React from 'react'
import Image from 'next/image';

function ReadNext() {

    const posts = [
        {
            id: 1,
            img: '/home/img1.jpeg',
            date: 'Aug 23, 2021',
            author: 'John Doe',
            title: 'A UX Case Study Creating a Studious Environment for Students',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        },
        {
            id: 2,
            img: '/home/img2.jpeg',
            date: 'Sep 10, 2021',
            author: 'Jane Smith',
            title: 'How to Optimize Your Workflow for Productivity',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            id: 3,
            img: '/home/img1.jpeg',
            date: 'Oct 5, 2021',
            author: 'Emily Davis',
            title: '10 Tips for Writing Engaging Blog Posts',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        },
    ];

    // Reusable Card Component for "What to Read Next"
function ReadNextCard({ imageSrc, date, author, title, description }: any) {
    return (
        <div className="flex flex-col gap-4 bg-white shadow-md p-4 rounded-lg">
            <Image src={imageSrc} alt={title} className="rounded-md h-[318px] w-[405px] object-cover" width={405} height={318} />
            <p className="text-sm text-gray-500">{`By ${author} | ${date}`}</p>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

  return (
    <div>
         <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">What to Read Next</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <ReadNextCard
                                key={post.id}
                                imageSrc={post.img}
                                date={post.date}
                                author={post.author}
                                title={post.title}
                                description={post.description}
                            />
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default ReadNext