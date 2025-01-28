import React from "react";

export default function SectionOne() {
  return (
    <section>
      <div className="forgot-password__parent-block">
        <div className="forgot-password__parent-block-item">
          <h1>Забыли пароль?</h1>
          <div className="forgot-password__parent-block-item-childOne">
            <h4>Введите ваш email или номер телефона, и мы вышлем вам инструкцию по получение новго пароля.</h4>
            <a href="#">Войти</a>
          </div>
          <div className="forgot-password__parent-block-item-childContent">
            <div className="forgot-password__parent-block-item-child-columnReal">
              <label>Электронная почта</label>
              <input type="text" />
            </div>
            <div className="forgot-password__parent-block-item-child-columnLogin">
              <button className="forgot-password__parent-block-item-child-columnLogin-complete">Продолжить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
