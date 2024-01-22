import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@/util/database";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: 'Github에서 발급받은ID',
    //   clientSecret: 'Github에서 발급받은Secret',
    // }),
    CredentialsProvider({
      name:"credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
    },
    async authorize(credentials) {
      let db = (await connectDB).db('forum');
      let user = await db.collection('users').findOne({id : credentials.id})
      if (!user) {
        console.log('해당 이메일은 없음');
        return null
      }
      const pwcheck = await bcrypt.compare(credentials.password, user.password);
      if (!pwcheck) {
        console.log('비번틀림');
        return null
      }
      return user
    }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일
  },

  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.id = user.id
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },
  adapter: MongoDBAdapter(connectDB),
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 