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
    if (signUpForm.password !== signUpForm.passwordAssure) {
      alert("비밀번호가 동일하지 않습니다!");
      return;
    }

    fetch("/api/signUp", {
      method: "POST",
      body: JSON.stringify({
        id: signUpForm.id,
        password: signUpForm.password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("가입되었습니다!");
        setSignUpForm({
          show:false,
          id: "",
          password: "",
          passwordAssure: "",
        })
      } else if (res.status === 403) {
        alert("이미 존재하는 아이디입니다.");
      } else {
        alert("다시 시도해주세요.");
      }
    });
  };

  return (
    <>
      <button onClick={showSignUpform}>가입하기</button>
      {signUpForm.show && (
        <div className="pt-4">
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
        </div>
      )}
    </>
  );
}
