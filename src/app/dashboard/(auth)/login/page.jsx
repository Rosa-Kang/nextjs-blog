'use client'

import { useEffect, useState } from "react"
import styles from './page.module.css'
import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"


const Login = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', {email, password})
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
                <button className={styles.button}>Login</button>
      </form>
      
      <button onClick={() => signIn('google')}>
        Login with Google 
      </button>
    </div>
  )
}

export default Login