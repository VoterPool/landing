'use client';
import React, { JSX, useState } from 'react';

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert('Пожалуйста, заполните обязательные поля: Имя и Email.');
      return;
    }

    const subject = encodeURIComponent('Новое сообщение с сайта Voterpool');
    const body = encodeURIComponent(
      `Имя: ${form.name}\nEmail: ${form.email}\nТелефон: ${form.phone}\nКомпания: ${form.company}\nКомментарий: ${form.message}`
    );

    window.location.href = `mailto:g810bAKO@yandex.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Левый CTA-блок */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-10 border border-slate-100 shadow-lg">
            <h4 className="text-3xl font-semibold">
              Готовы попробовать{' '}
              <span className="text-blue-600">Voterpool?</span>
            </h4>
            <p className="mt-4 text-slate-600">
              Создайте организацию, пригласите участников и начните голосовать —
              быстро, безопасно и без лишних усилий.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/app"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition pointer-events-none"
              >
                Перейти в приложение
              </a>
            </div>
          </div>

          {/* Правая форма */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 space-y-6"
          >
            <h4 className="text-2xl font-semibold text-slate-900">
              Свяжитесь с нами
            </h4>
            <p className="text-slate-600 text-sm">
              Оставьте ваш вопрос и мы свяжемся с вами.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-white mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-white mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="bg-white mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Ваш вопрос
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="bg-white mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
