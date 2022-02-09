import { useUser } from '@auth0/nextjs-auth0';

const AuthProtector = ({ children }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return <>{children}</>;
    }

    return (
        <main>
            <a href="/api/auth/login">Login</a>
        </main>
    );
};
export default AuthProtector;
