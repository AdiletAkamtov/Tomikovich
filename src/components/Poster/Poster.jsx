import React from 'react'
import BG from '../../images/computer.png'
import styles from '../../styles/Home.module.css'

const Poster = () => (
	<section className={styles.home}>
		<div className={styles.title}>BIG SALE 20%</div>
		<div className={styles.product}>
			<div className={styles.text}>
				<div className={styles.subtitle}>the bestseller of 2023</div>
				<h1 className={styles.head}>LENNON rdr2 with NVIDIA 5090ti</h1>
				<button className={styles.button}>Shop now</button>
			</div>
			<div className={styles.image}>
				<img src={BG} alt='mainphoto' />/
			</div>
		</div>
	</section>
)

export default Poster
