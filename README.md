This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Resources
[1] Date fetching test with json placeholder.
https://jsonplaceholder.typicode.com/posts

[2] useContext to toggle Dark Mode.
https://react.dev/reference/react/useContext

[3] Data Fetching
- On Client Side : Fetch in useEffect() 
                 : Use s fetching library (React Query, SWR)
- Server Side   : Fetch the data directly from the server Asynchronously.
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