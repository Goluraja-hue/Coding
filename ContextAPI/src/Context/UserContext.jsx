import React, { createContext } from 'react'

export const UserDataContext = createContext();


const UserContext = (props) => {

    
     const user =   [
  {
    "id": 1,
    "title": "Getting Started with React in 2026",
    "body": "React continues to evolve with server components and optimized streaming. Here is what you need to know to build modern web apps.",
    "tags": ["React", "JavaScript", "Frontend"],
    "likes": 142,
    "userId": 101
  },
  {
    "id": 2,
    "title": "Mastering the Context API",
    "body": "Prop drilling driving you crazy? Learn how to efficiently broadcast global state across your entire component tree without extra libraries.",
    "tags": ["React", "State Management"],
    "likes": 98,
    "userId": 102
  },
  {
    "id": 3,
    "title": "Why I Switched to Tailwind CSS",
    "body": "Inline utility classes might look messy at first glance, but the speed of development and lack of naming conflicts make it worth it.",
    "tags": ["CSS", "Design", "Tailwind"],
    "likes": 215,
    "userId": 101
  },
  {
    "id": 4,
    "title": "Understanding JavaScript Closures",
    "body": "A closure is the combination of a function bundled together with references to its surrounding state. Let's break down how it works under the hood.",
    "tags": ["JavaScript", "Programming"],
    "likes": 87,
    "userId": 105
  },
  {
    "id": 5,
    "title": "A Guide to Clean Code in TypeScript",
    "body": "Strong typing is just the beginning. Writing readable, maintainable TypeScript requires leveraging advanced interfaces and generics properly.",
    "tags": ["TypeScript", "Backend", "Frontend"],
    "likes": 174,
    "userId": 103
  },
  {
    "id": 6,
    "title": "The Rise of Edge Computing",
    "body": "Moving computational power closer to the user reduces latency drastically. Explore how Next.js and Cloudflare Workers leverage edge runtime.",
    "tags": ["WebDev", "Cloud", "NextJS"],
    "likes": 133,
    "userId": 104
  },
  {
    "id": 7,
    "title": "Designing Better UI/UX Transitions",
    "body": "Micro-interactions and smooth transitions can make an ordinary application feel premium. Always prioritize user feedback in animation.",
    "tags": ["UIUX", "Design", "CSS"],
    "likes": 290,
    "userId": 102
  },
  {
    "id": 8,
    "title": "How to Optimize React Re-renders",
    "body": "Before reaching for useMemo or useCallback, check if your component structure is causing unnecessary updates. Lift state down when possible.",
    "tags": ["React", "Performance"],
    "likes": 112,
    "userId": 105
  },
  {
    "id": 9,
    "title": "Async/Await vs Promises in Node.js",
    "body": "While async/await is syntactic sugar over Promises, it makes asynchronous flow synchronous-looking, readable, and much easier to debug.",
    "tags": ["NodeJS", "JavaScript", "Backend"],
    "likes": 95,
    "userId": 103
  },
  {
    "id": 10,
    "title": "Building Your First REST API",
    "body": "An introductory guide to setting up Express.js, handling routing, and returning clean JSON structures to your frontend client application.",
    "tags": ["Express", "Backend", "API"],
    "likes": 180,
    "userId": 104
  }
]
  return (
    <UserDataContext.Provider value={user}>
        {props.children}
    </UserDataContext.Provider>
   
  )
}

export default UserContext