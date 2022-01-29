import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],

    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    },

    debug: false,
};

export default (req, res) => NextAuth(req, res, options);
