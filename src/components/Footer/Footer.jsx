import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../images/logo.svg'
import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'

const Footer = () => (
	<div>
		<section className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='logotype' />
				</Link>
			</div>
			<div className={styles.rights}>
				Developed my {''}
				<a
					href='https://www.youtube.com/channel/UC5opDzm8nTN6tr0TxmYUvtw'
					target='_blank'
					rel='noreferrer'
				>
					Akmatov
				</a>
			</div>

			<div className={styles.socials}>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
					</svg>
				</a>

				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
					</svg>
				</a>

				<a href='https://youtube.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
					</svg>
				</a>
			</div>
		</section>
	</div>
)

export default Footer
