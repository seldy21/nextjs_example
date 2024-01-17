import SocialLogin from "@/component/social_login";

export default function Login() {
  return (
    <>
      <div>아이디</div>
      <input type="text" />

      <div>비밀번호</div>
      <input type="password" />
      <div className="pt-3">
        <SocialLogin/>
      </div>
    </>
  );
}
