import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}