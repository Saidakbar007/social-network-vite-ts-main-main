import React, { useState } from 'react';
import './ResetPasswordPage.scss';

const ResetPasswordPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setError(''); // Сбрасываем ошибку при вводе
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Простейшая валидация номера телефона
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Введите корректный номер телефона');
      return;
    }

    // Здесь логика отправки данных для сброса пароля
    console.log('Отправлено на номер телефона:', phoneNumber);

    // Дополнительная логика обработки успешной отправки
    alert('Код для сброса пароля был отправлен на ваш номер телефона.');
  };

  return (
    <div className="container">
      <div className="formWrapper">
        <h2 className="title">Забыли пароль?</h2>
        <p className="subtitle">
          Укажите свой номер телефона, чтобы <br />получить код для сброса пароля.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Номер телефона"
            className="input"
          />
          {error && <p className="error">{error}</p>} {/* Отображаем ошибку */}
          <button type="submit" className="button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
