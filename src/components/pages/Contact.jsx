import React from "react";
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

export const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "33262367-b6a8-4ac8-b2a3-fc137c6dc3d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Отправь нам сообщение <img src={msg_icon} alt="" /></h3>
        <p>  Нужна помощь? Ну, удачи тебе. Мы доступны 24/7, но это не значит, что мы действительно будем отвечать. Пиши нам свои мысли, вопросы или просто бессмысленные бредни. Чем абсурднее, тем лучше.</p>
        <ul>
          <li><img src={mail_icon} alt=""/>feichtwanger7@gmail.com</li>
          <li><img src={phone_icon} alt=""/>89964013779</li>
          <li><img src={location_icon} alt=""/>Если твое сообщение действительно важно, попробуй отправить его на Луну. Шанс, что его там прочитают, немного выше, чем у нас. А если вдруг мы ответим, считай это чудом. </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Твое имя</label>
          <input type="text" name="name" placeholder="Напиши свое имя" required/>
          <label>Номер телефончика, лучше тг</label>
          <input type="tel" name="phone" placeholder="свой номерок малая 😼" required/>
          <label htmlFor="">Твое сообщение здесь</label>
          <textarea name="message" rows='6' placeholder="Сообщение" required></textarea>
          <button type="submit" className="btn dark-btn">Отправить сейчас<img src={white_arrow} alt="" /></button>
          
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};