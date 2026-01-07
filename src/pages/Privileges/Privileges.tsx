import React, { useState } from 'react';
import './Privileges.css';

type PrivilegeType = 'vip' | 'admin' | 'boss';

interface PrivilegePeriod {
  days: number;
  price: number;
  label: string;
}

interface Privilege {
  name: string;
  color: string;
  icon: string;
  periods: PrivilegePeriod[];
  features: string[];
}

interface PaymentMethod {
  name: string;
  icon: string;
  cardNumber: string;
}

const Privileges: React.FC = () => {
  const [selectedPeriods, setSelectedPeriods] = useState<Record<PrivilegeType, string>>({
    vip: '30',
    admin: '30',
    boss: '30'
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [copiedCard, setCopiedCard] = useState<string | null>(null);

  const privileges: Record<PrivilegeType, Privilege> = {
    vip: {
      name: 'VIP',
      color: '#FFD700',
      icon: '👑',
      periods: [
        { days: 7, price: 70, label: '7 дней' },
        { days: 15, price: 100, label: '15 дней' },
        { days: 30, price: 200, label: '30 дней' },
        { days: 9999, price: 350, label: 'Вечный' }
      ],
      features: [
        'Специальный VIP префикс в чате',
        'Доступ к VIP оружию и предметам',
        'Специальная VIP модель игрока',
        'Класс зомби - Ревенант FIRE',
        'Двойной прыжок',
        'Быстрые респавны',
        'Иммунитет от автоматических наказаний',
        'Приоритет при входе на сервер',
      ]
    },
    admin: {
      name: 'ADMIN',
      color: '#FF6B35',
      icon: '⚡',
      periods: [
        { days: 7, price: 180, label: '7 дней' },
        { days: 15, price: 300, label: '15 дней' },
        { days: 30, price: 400, label: '30 дней' },
        { days: 9999, price: 700, label: 'Вечный' }
      ],
      features: [
        'Все привилегии VIP',
        'Доступ к админ командам',
        'Возможность кикать и банить игроков',
        'Зомби класс Ревенант ICE',
        'Смена карты и настроек сервера',
        'Паутинка для админа',
        'Тройной прыжок',
        'Специальная админ модель',
        'Доступ к админ и зомби меню',
        'Доступ к админ чату'
      ]
    },
    boss: {
      name: 'BOSS',
      color: '#FF1744',
      icon: '🔥',
      periods: [
        { days: 7, price: 300, label: '7 дней' },
        { days: 15, price: 500, label: '15 дней' },
        { days: 30, price: 600, label: '30 дней' },
        { days: 9999, price: 1000, label: 'Вечный' }
      ],
      features: [
        'Все привилегии ADMIN и VIP',
        'Эксклюзивные BOSS предметы',
        'Уникальные BOSS способности',
        'Возможность выдавать аммо',
        'Зомби класс - Revenant POISON',
        'Полный контроль над сервером'
      ]
    }
  };

  const paymentMethods: PaymentMethod[] = [
    { name: 'MonoPay', icon: '💳', cardNumber: '4441 1110 3484 9533' },
    { name: 'Приват24', icon: '🏦', cardNumber: '5168 7451 5994 1753' },
    { name: 'Карта Visa/Mastercard', icon: '💰', cardNumber: '5355 2800 5439 0396' }
  ];

  const handlePeriodChange = (privilegeType: PrivilegeType, days: string) => {
    setSelectedPeriods(prev => ({
      ...prev,
      [privilegeType]: days
    }));
  };

  const handlePaymentClick = (methodName: string) => {
    setSelectedPaymentMethod(methodName);
  };

  const copyCardNumber = (cardNumber: string) => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
    setCopiedCard(cardNumber);
    setTimeout(() => setCopiedCard(null), 3000);
  };

  const handleBuy = (privilegeName: string, period: PrivilegePeriod) => {
    if (!selectedPaymentMethod) {
      alert('Пожалуйста, выберите способ оплаты');
      return;
    }
    
    const paymentMethod = paymentMethods.find(pm => pm.name === selectedPaymentMethod);
    alert(`Вы выбрали ${privilegeName} на ${period.label} за ${period.price} грн\n\nСпособ оплаты: ${selectedPaymentMethod}\nДля оплаты используйте карту: ${paymentMethod?.cardNumber}\nВ примечении укажите Ваш Steam ID или никнейм.`);
  };

  return (
    <div className="privileges">
      <div className="privileges-header">
        <h1>Привилегии сервера</h1>
        <p>Выберите подходящую привилегию и срок действия</p>
      </div>

      <div className="privileges-grid">
        {Object.entries(privileges).map(([key, privilege]) => {
          const privilegeKey = key as PrivilegeType;
          const selectedPeriod = privilege.periods.find(p => p.days.toString() === selectedPeriods[privilegeKey]);
          
          return (
            <div key={key} className="privilege-card">
              <div className="privilege-header" style={{ backgroundColor: privilege.color }}>
                <div className="privilege-icon">{privilege.icon}</div>
                <h2>{privilege.name}</h2>
              </div>
              
              <div className="period-selector">
                <h3>Выберите срок:</h3>
                <div className="period-buttons">
                  {privilege.periods.map((period) => (
                    <button
                      key={period.days}
                      className={`period-btn ${selectedPeriods[privilegeKey] === period.days.toString() ? 'active' : ''}`}
                      onClick={() => handlePeriodChange(privilegeKey, period.days.toString())}
                    >
                      <div className="period-label">{period.label}</div>
                      <div className="period-price">{period.price} грн</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="privilege-features">
                <h3>Возможности:</h3>
                <ul>
                  {privilege.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="price-summary">
                <div className="selected-price">
                  <span>Итого:</span>
                  <span className="final-price">{selectedPeriod?.price} грн</span>
                </div>
              </div>
              
              <button 
                className="buy-button" 
                style={{ backgroundColor: privilege.color }}
                onClick={() => handleBuy(privilege.name, selectedPeriod!)}
              >
                Купить {privilege.name}
              </button>
            </div>
          );
        })}
      </div>

      <div className="payment-section">
        <h3>Выберите способ оплаты:</h3>
        <div className="payment-methods">
          {paymentMethods.map((method) => (
            <div key={method.name} className="payment-method-card">
              <button 
                className={`payment-btn ${selectedPaymentMethod === method.name ? 'active' : ''}`}
                onClick={() => handlePaymentClick(method.name)}
              >
                <span className="payment-icon">{method.icon}</span>
                {method.name}
              </button>
              
              {selectedPaymentMethod === method.name && (
                <div className="card-details">
                  <div className="card-number">
                    <span>Номер карты: </span>
                    <strong>{method.cardNumber}</strong>
                    <button 
                      className="copy-btn"
                      onClick={() => copyCardNumber(method.cardNumber)}
                    >
                      {copiedCard === method.cardNumber ? '✓ Скопировано!' : '📋 Копировать'}
                    </button>
                  </div>
                  <div className="payment-instruction">
                    💡 Переведите точную сумму и укажите в комментарии ваш Steam ID или никнейм
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="privileges-footer">
        <div className="info-box">
          <h3>💡 Как купить привилегию?</h3>
          <ol>
            <li>Выберите привилегию и срок действия</li>
            <li>Выберите способ оплаты и скопируйте номер карты</li>
            <li>Переведите точную сумму и укажите ваш Steam ID или никнейм в комментарии</li>
            <li>Дождитесь активации привилегии (обычно 5-15 минут)</li>
          </ol>
        </div>

        <div className="warning-box">
          <h3>⚠️ Важная информация:</h3>
          <ul>
            <li>Обязательно указывайте точную сумму из расчета</li>
            <li>В комментарии к платежу укажите ваш Steam ID или никнейм</li>
            <li>Привилегия активируется после подтверждения платежа</li>
            <li>Если возникли вопросы - обращайтесь в Discord или Telegram</li>
            <li>Цены указаны в украинских гривнах (грн)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privileges;