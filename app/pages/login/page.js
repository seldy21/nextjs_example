"use client";

import SignUpButton from "@/component/SignUpButton";
import SocialLogin from "@/component/social_login";
import { signIn, signOut } from 'next-auth/react'

export default function Login() {
  return (
    <>
      <div>아이디</div>
      <input type="text" />
      <div>비밀번호</div>
      <input type="password" />
      <div className="pt-3 d-flex flex-column gap-2">
        <div>
          <SocialLogin />
        </div>
        <div>
          <button onClick={signIn}>로그인</button>
          <SignUpButton />
        </div>
      </div>
    </>
  );
}
