import React from "react";
import './Services.css'
import service1 from '../../assets/coffee.jpg'
import service2 from '../../assets/advice1.jpg'
import service3 from '../../assets/Anti-consultation.png'
import service4 from '../../assets/break-code.gif'
import service5 from '../../assets/bugs.gif'
import service6 from '../../assets/startup.gif'


export const Services = () => {
  return (
    <div className="services">
      <h1>Наши услуги</h1>
      <div className="service-cards">
        <div className="service-card">
          <img src={service1} alt="Кофе за миллион" />
          <h2>Кофе за миллион</h2>
          <p>
            Самый дорогой и абсолютно бесполезный кофе. Почувствуйте себя истинным транжирой!
          </p>
        </div>
        <div className="service-card">
          <img src={service2} alt="Бесполезный совет" />
          <h2>Бесполезный совет</h2>
          <p>
            Нужен совет, который ни к чему не приведет? Мы предоставим самые нелепые советы!
          </p>
        </div>
        <div className="service-card">
          <img src={service3} alt="Антиконсультация" />
          <h2>Рекомендации</h2>
          <p>
            Узнайте, что именно НЕ нужно делать в вашей ситуации. Полное отсутствие полезной информации гарантировано.
          </p>
        </div>
        <div className="service-card">
          <img src={service4} alt="Сломанный код" />
          <h2>Сломанный код</h2>
          <p>
            Мы создадим для вас код, который никогда не заработает. Идеально для тех, кто любит вызовы!
          </p>
        </div>
        <div className="service-card">
          <img src={service5} alt="Ложные баги" />
          <h2>Ложные баги</h2>
          <p>
            Хотите испытать свою команду на прочность? Мы вставим ложные баги в ваш проект, чтобы они мучались!
          </p>
        </div>
        <div className="service-card">
          <img src={service6} alt="Фейковый стартап" />
          <h2>Фейковый стартап</h2>
          <p>
            Мы поможем создать стартап, который не имеет шансов на успех. Зачем выигрывать, когда можно проигрывать с размахом?
          </p>
        </div>
      </div>
      <footer>
        <p>Смейтесь или плачьте, но наши услуги всегда на высоте... вашей безнадежности.</p>
      </footer>
    </div>
  );
};