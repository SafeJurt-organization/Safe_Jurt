import React from "react";

export default function SectionOne() {
  return (
    <section>
      <div className="code-family__parent-block">
        <div className="code-family__parent-block-item">
          <h1>Создайте код семьи!</h1>
          <div className="code-family__parent-block-item-childContent">
            <div className="code-family__parent-block-item-child-columnReal">
              <label>Придумайте пароль</label>
              <input type="text" />
            </div>
            <div className="code-family__parent-block-item-child-columnReal">
              <label>Потвердите пароль</label>
              <input type="text" />
            </div>
            <div className="code-family__parent-block-item-child-columnLogin">
              <button>Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
