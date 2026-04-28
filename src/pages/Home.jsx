import React from 'react';
import ticher from '../assets/ticher.jpg'
function Home() {
  return (
    <div className="home">
      <section id="center">
        <div className="image-ticher">
          <img src={ticher} className="base" alt="teacher" />

          <div className="info">
            <h1 className="name_ticher">
              Нигматуллина Лилия Ильдаровна
            </h1>
            <p className="txt">
              Дорогие ребята и уважаемые родители, лето - это время отдыха и открытий.
              Этот сайт поможет вам сделать каникулы безопасными, интересными и продуктивными.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;