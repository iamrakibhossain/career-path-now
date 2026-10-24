import styles from './Navbar.module.css'
import Button from '../common/Button/Button'


const navlinks =[

    {title: "Home",  path: '#home'},
    {title: "About US",  path: '#about'},
    {title: "Services",  path: '#services'},
    {title: "Contact",  path: '#contact'},
]

const Navbar = () => {
  return (
    <>

    <nav className={styles.navbar}>
        <h1 className={styles.logo} >CareerPathNow</h1>

        <ul className={styles.menu}>
            {navlinks.map((link) => (
                <li key={link.title}>
                    <a href={link.path}>{link.title}</a>
                </li>
            ))}
        </ul>
        <div>
            <a href="#signin">Sign In</a>
            <Button variant="light">Free Trial</Button>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar