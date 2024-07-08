import React from 'react'
import './About.css'
import { Testimonials } from './Testimonials/Testimonials'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'



export const About = () => {
  return (
    <div className="about">
      <h1>О нас</h1>
      <p>
        Добро пожаловать в нашу компанию, где мы берем ваши мечты и превращаем их... ну, во что-то, что напоминает реальность. Наша миссия — предоставлять вам самые смешные и в некоторой степени полезные услуги.
      </p>
      <div className="gallery">
        <div className="gallery-item">
          <img src={gallery_1} alt="Выпускница 1" />
          <p className="caption">
            "Наши специалисты обсуждают, как лучше всего сломать ваш сайт."
          </p>
        </div>
        <div className="gallery-item">
          <img src={gallery_2} alt="Выпускница 2" />
          <p className="caption">
            "Каждый день в нашем офисе начинается с поисков смысла жизни и кофе."
          </p>
        </div>
        <div className="gallery-item">
          <img src={gallery_3} alt="Выпускницы 3" />
          <p className="caption">
            "Наша компания гарантирует, что диплом, который вы получите у нас, будет столь же полезен, как этот оберточный картон. Улыбайтесь, пока можете!"
          </p>
        </div>
        <div className="gallery-item">
          <img src={gallery_4} alt="Выпускница 4" />
          <p className="caption">
            "Сурияни Деви - наш лучший пример того, что красивые фотографии с дипломом могут быть вашим главным достижением."
          </p>
        </div>
      </div>
      <footer>
        <p>Если вы всё ещё читаете, то, возможно, у вас нет ничего важнее. Но мы ценим ваше внимание!</p>
      </footer>
      <Testimonials />
      <footer>
        <p>Все отзывы подлинные и написаны под угрозой... смеха до колик.</p>
      </footer>
    </div>
    

  )
}
