'use client'
import Link from 'next/link'
import {useState}from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [error, setError] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

        try {
            const res = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });
       res.status === 201 && router.push('dashboard/login?success=Account had been created')
       setError(false) 
    } 
    catch{
        setError(true)
    }
}

    return (
      <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='full name'
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder='email'
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder='password'
                    className={styles.input}
                    required
                />
                <button className={styles.button}>Register</button>
            </form>
            {error && <h3>Something went wrong..</h3>}
            <Link href='/dashboard/login'>Login with an existing account</Link>
      </div>
  )
}

export default Register