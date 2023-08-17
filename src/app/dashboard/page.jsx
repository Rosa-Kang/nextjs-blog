'use client';
import { useState, useEffect } from "react";
import styles from './'

const Dashboard = async () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const url = 'https://jsonplaceholder.typicode.com/posts';
  //     const res = await fetch(url, {
  //       cache: 'no-store'
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();
  // },[])


  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard