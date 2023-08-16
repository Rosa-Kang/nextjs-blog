import Image from "next/image"
import logo from '../../../public/logo.png'
import styles from './footer.module.css'

const Footer = () => {

  return (
    <div>
      <div> ©️2023 Rosia. All rights reserved.</div>
      <div>
        <Image src={logo} alt='logo' width={50} />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer