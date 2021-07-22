import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../../components/ActiveLink';

import styles from './styles.module.scss';


export function Header() {
    

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src="/images/logo.svg" alt='Ignews' />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}