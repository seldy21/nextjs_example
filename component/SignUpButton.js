"use client";

import { useState } from "react";

export default function SignUpButton() {
  const [signUpForm, setSignUpForm] = useState({
    show: false,
    id: "",
    password: "",
    passwordAssure: "",
  });
  const showSignUpform = () => {
    setSignUpForm({
      ...signUpForm,
      show: true,
    });
  };

  const handleForm = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    if (signUpForm.password !== signUpForm.passwordAssure){
      alert("비밀번호가 동일하지 않습니다!");
      return;
    };


  }
  return (
    <>
      <button onClick={showSignUpform}>가입하기</button>
      {signUpForm.show && (
        <form className="pt-4" method="POST" action={"/api/auth/signUp"}>
          <h5 className="fw-bold">가입하기</h5>
          <div>아이디</div>
          <input type="text" onChange={handleForm} name="id" />
          <div>비밀번호</div>
          <input type="password" onChange={handleForm} name="password" />
          <div>비밀번호 확인</div>
          <input type="password" onChange={handleForm} name="passwordAssure" />
          <div className="pt-3">
            <button onClick={submitForm}>가입하기</button>
          </div>
        </form>
      )}
    </>
  );
}
