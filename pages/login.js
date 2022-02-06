import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
    const { data: session } = useSession();
    console.log(session);
    if (session) {
        return (
            <main>
                <p data-cy="userIdDisplay">Signed in as {session.user.email}</p>
                <button onClick={() => signOut()} data-cy="logoutButton">
                    Sign out
                </button>
            </main>
        );
    }
    return (
        <main>
            <p data-cy="signedOutNotice"> Not signed in. </p>
            <button onClick={() => signIn()} data-cy="loginButton">
                Sign in
            </button>
        </main>
    );
}
