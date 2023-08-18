This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Concepts that I learned through this PROJECT
[1] Date fetching test with json placeholder.
https://jsonplaceholder.typicode.com/posts

[2] useContext to toggle Dark Mode.
https://react.dev/reference/react/useContext

[3] Data Fetching
- On Client Side : Fetch in useEffect() --- no recommended because it comes with error and isLoading out of the box & you will be able to mutate your data.
                 : Use s fetching library (React Query, SWR)  -- recommended!
- Server Side   : Fetch the data directly from the server Asynchronously.
                : in Next.js it automatically set the Static Data Fetching, and in this application I used {cache : 'no-store' } syntax to make it dynamic fetching.
```
async function getData() {
    const res = await fetch('url', {
        cache: 'force-cache' | --- Static Data Fetching
        next: {revalidate:10} | -- Revalidating Data
        cache : 'no-store --- Dynamic Data Fetching
    });

    return res.json();
}

const Page = async ()=> {
    const data = await getData();

    return <main></main>;
};
```
[3.1] Client Side Fetching - SWR
- npm i swr
https://swr.vercel.app/
```
import useSWR from 'swr'
 
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

[4] Real Data Connection : using Mongoose
npm i mongoose
https://mongoosejs.com/docs/connections.html

[5] Within the Next.js, we can create Dynamic Meta Data for pages
https://nextjs.org/docs/app/building-your-application/optimizing/metadata

[6] Authentication
npn i next-auth
https://authjs.dev/

[7] For image upload
npm i next-cloudinary
https://next.cloudinary.dev/
