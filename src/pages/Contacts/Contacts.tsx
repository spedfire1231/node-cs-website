import React, { useState } from 'react';
import './Contacts.css';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      type: 'Discord',
      value: 'Наш Discord сервер',
      icon: '💬',
      link: 'https://discord.gg/6ZdbBSaQ77'
    },
    {
      type: 'Telegram',
      value: '@node_admin',
      icon: '📱',
      link: 'https://t.me/alexthunder121',
    },
    {
      type: 'Email',
      value: 'pablosidels@gmail.com',
      icon: '📧',
      link: 'mailto:pablosidels@gmail.com'
    },
    {
      type: 'Steam',
      value: 'NODE Community',
      icon: '🎮',
      link: 'https://steamcommunity.com/groups/node-cs'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Сообщение отправлено! Мы ответим вам в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contacts">
      <div className="contacts-header">
        <h1>Свяжитесь с нами</h1>
        <p>Есть вопросы или предложения? Мы всегда рады помочь!</p>
      </div>

      <div className="contacts-content">
        <div className="contact-info">
          <h2>Контактная информация</h2>
          <div className="contact-methods">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-method">
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-details">
                  <h3>{contact.type}</h3>
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-schedule">
            <h3>🕐 Режим работы администрации</h3>
            <div className="schedule-item">
              <span>Понедельник - Пятница:</span>
              <span>16:00 - 22:00</span>
            </div>
            <div className="schedule-item">
              <span>Суббота - Воскресенье:</span>
              <span>12:00 - 24:00</span>
            </div>
            <div className="schedule-note">
              <p>В другое время мы тоже можем быть онлайн, но не гарантируем мгновенный ответ</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Форма обратной связи</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Тема сообщения:</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Выберите тему</option>
                <option value="support">Техническая поддержка</option>
                <option value="donation">Покупка привилегии</option>
                <option value="complaint">Жалоба на игрока</option>
                <option value="suggestion">Предложение</option>
                <option value="partnership">Сотрудничество</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Опишите ваш вопрос или предложение..."
                rows={6}
              />
            </div>

            <button type="submit" className="submit-button">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h3>Как подключиться к серверу?</h3>
            <p>Откройте консоль в CS 1.6 (клавиша ~) и введите: connect 91.211.118.49:27029</p>
          </div>
          <div className="faq-item">
            <h3>Сколько стоит привилегия?</h3>
            <p>Стоимость привилегий указана на странице "Привилегии".</p>
          </div>
          <div className="faq-item">
            <h3>Как быстро отвечают администраторы?</h3>
            <p>В рабочее время мы стараемся отвечать в течение 15-30 минут. В другое время ответ может занять до 24 часов.</p>
          </div>
        </div>
      </div>

      <div className="emergency-contacts">
        <h2>🚨 Экстренные контакты</h2>
        <p>
          Если вы столкнулись с серьезной проблемой (читеры, массовые нарушения, 
          технические сбои), пишите сразу в Discord с пометкой "СРОЧНО".
        </p>
      </div>
    </div>
  );
};

export default Contacts;