import { useSession, signIn, signOut } from 'next-auth/react';

const RequireAuth = ({ children }) => {
    const { data: session } = useSession();
    if (session) {
        return <>{children}</>;
    } else {
        return <></>;
    }
};

export default RequireAuth;
