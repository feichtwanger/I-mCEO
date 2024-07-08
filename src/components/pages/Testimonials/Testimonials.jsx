import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_1 from '../../../assets/user-1.png'
import user_2 from '../../../assets/user-2.png'
import user_3 from '../../../assets/user-3.png'
import user_4 from '../../../assets/user-4.png'


export const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
}

const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}



  return (
    <div className="testimonials">
        <h1>Отзывы</h1>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Эмма Шмидт</h3>
                                <span>Германия, Берлин</span>
                            </div>
                        </div>
                        <p>"Думала, что худшее, что случилось в моей жизни, - это моя работа. Потом я попробовала услуги этой компании. Моя работа теперь кажется раем."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Лукас Ковальски</h3>
                                <span>Польша, Варшава</span>
                            </div>
                        </div>
                        <p>"Если бы я мог вернуться в прошлое, я бы стер из памяти тот день, когда решил воспользоваться их услугами. Это был худший день в моей жизни, но такой смешной!"</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>София Ривера</h3>
                                <span>Испания, Барселона</span>
                            </div>
                        </div>
                        <p> "В тот момент, когда я думала, что хуже быть не может, я наткнулась на эту компанию. Теперь я знаю, что значит настоящая боль."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Томас Мёрфи</h3>
                                <span>Ирландия, Дублин</span>
                            </div>
                        </div>
                        <p>"Говорили, что смех продлевает жизнь. Теперь я не уверен, что хочу жить дольше после всех этих 'смешных' моментов. Это был адский опыт!"</p>
                    </div>
                </li>
            </ul>
        </div>    
    </div>
  )
}
