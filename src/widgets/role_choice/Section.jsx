import React, { useState } from "react";
import icon1 from './images/icon1.png';

export default function Section() {
  const [context] = useState([
    {
      id: 1,
      title: "Я родитель",
      image: require("./images/image1.png"),
      description:
        "Родитель: Открывается страница для создания семьи: Придумывается код семьи. Заполняются личные данные участников (ФИО, возраст, телефон, ID паспорта для детей 18+)",
    },
    {
      id: 2,
      title: "Я ребёнок",
      image: require("./images/image2.png"),
      description:
        "Для детей младше 18 лет эту информацию заполняет родитель. Геопозиция: при первом входе запрашивается режим отслеживания местоположения (всегда, при использовании, отключить).",
    },
  ]);

  return (
    <section className="role__choice-parent">
      <div className="role__choice-parent-block">
        {context.map((content) => {
          return (
            <div key={content.id} className="role__choice-parent-block-blocks">
              <div className="role__choice-parent-block-blocks-item">
                <h2>{content.title}</h2>
                <img src={content.image} alt={content.title} />
              </div>
              <div className="role__choice-blocks-item">
                <p>{content.description}</p>
              </div>
              <img src={icon1} alt="icon" className="icon-cursor"/>
            </div>
          );
        })}
      </div>
    </section>
  );
}
