import styles from './Hero.module.scss'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src='/images/site/profile-image.png' alt='profile-image' height={300} width={300} />
      </div>
      <h1>{`Hi, I'm Krešimir`}</h1>
      <p>I blog about web development - especially frontend frameworks liek AngularJS, VueJS and ReactJS</p>
    </section>
  )
}

export default Hero
