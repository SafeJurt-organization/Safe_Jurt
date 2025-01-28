import React from "react";

export default function Section() {
  return (
    <section>
      <div className="create-account__parent-block">
        <div className="create-account__parent-block-item">
          <h1>Создайть новый аккаунт.</h1>
          <div className="create-account__parent-block-item-childOne">
            <h4>Уже зарегистрированы?</h4>
            <a href="#">Войдите</a>
          </div>
          <div className="create-account__parent-block-item-child">
            <div className="create-account__parent-block-item-child-column">
              <label>Фамилия</label>
              <input type="text" />
            </div>
            <div className="create-account__parent-block-item-child-column">
              <label>Имя</label>
              <input type="text" />
            </div>
          </div>
          <div className="create-account__parent-block-item-child">
            <div className="create-account__parent-block-item-child-column">
              <label>Отчество</label>
              <input type="text" />
            </div>
            <div className="create-account__parent-block-item-child-column">
              <label>iD /AN</label>
              <input type="text" placeholder="ID" />
            </div>
          </div>
          <div className="create-account__parent-block-item-childContent">
            <div className="create-account__parent-block-item-child-columnReal">
              <label>Электронная почта</label>
              <input type="text" />
            </div>
            <div className="create-account__parent-block-item-child-columnReal">
              <label>Придумайте пароль</label>
              <input type="text" />
            </div>
            <div className="create-account__parent-block-item-child-columnReal">
              <label>Потвердите пароль</label>
              <input type="text" />
            </div>
            <div className="create-account__parent-block-item-child-columnConfirm">
              <input type="radio" />
              <p>
                Я согласен создать учетную запись в Единой системе идентификации
              </p>
            </div>
            <div className="create-account__parent-block-item-child-columnLogin">
              <button>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
