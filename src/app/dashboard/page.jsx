'use client';
import { useSession } from 'next-auth/react';
import styles from './page.module.css'
import useSWR from 'swr'
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const fetcher = (...args) => fetch(...args).then(res => res.jason());
  const { data, error, isLoading } = useSWR(url, fetcher);
  
  const session = useSession();
  const router = useRouter();
  if (session.status === 'loading') {
    return <p>Loading..</p>
  }
  if(session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }
  if (session.status === 'authenticated') {
    return <div className={styles.container}>Dashboard</div>
  }


  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard