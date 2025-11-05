import HeroClient from '@/components/HeroClient';
import Image from 'next/image';
import Link from 'next/link';
import React, { JSX } from 'react';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: 'Изолированные организации',
    description:
      'Создавайте отдельные пространства для организаций — каждая организация имеет свои настройки, участников и историю предложений.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 12h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 6h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 18h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9.5"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: 'Конфиденциальность и шифрование',
    description:
      'Все данные зашифрованы и недоступны для хостинг-компаний — только участники организации видят результаты и предложения.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 15v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="5"
          y="8"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 8V6a4 4 0 0 1 8 0v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Гибкие параметры консенсуса',
    description:
      'Настраивайте кворум, веса голосов и применяйте изменения консенсуса через голосования — они влияют на будущие предложения.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Voterpool Home"
            className="flex items-center gap-3"
          >
            <Image
              src="./logo.png"
              width="180"
              height="56"
              alt="Voterpool"
              className="w-45 h-14 object-contain"
            />

            <div className="hidden md:block">
              <span className="sr-only">Voterpool</span>
              {/* <p className="text-xs text-slate-500">
                Collective governance, private by design
              </p> */}
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">
              Преимущества
            </a>
            <a href="#how" className="hover:text-slate-900">
              Как это работает
            </a>
            <a href="#security" className="hover:text-slate-900">
              Безопасность
            </a>
          </nav>

          <a
            href="/app"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Перейти в приложение
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6">
        <HeroClient />

        {/* Features */}
        <section id="features" className="pb-16 pt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold">Преимущества</h3>
            <p className="mt-3 text-slate-600">
              Решение для безопасного и масштабируемого голосования:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Безопасность</div>
              <div className="text-lg font-semibold">
                Блокчейн гарантирует защиту и неизменность данных голосования
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Конфиденциальность</div>
              <div className="text-lg font-semibold">
                Данные надежно хранятся в зашифрованном виде
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Масштаб</div>
              <div className="text-lg font-semibold">
                Проводите сложные голосования с тысячами участников быстро и без
                бумаг
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">Простота</div>
              <div className="text-lg font-semibold">
                Быстрая и легкая интеграция с внешними сервисами
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold">Возможности</h3>
            <p className="mt-3 text-slate-600">
              Инструменты для гибкой и приватной коллективной работы:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-600">{f.icon}</div>
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      {f.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h4 className="text-xl font-semibold">Как это работает</h4>
              <p className="mt-3 text-slate-600">
                Voterpool предоставляет инфраструктуру: создайте организацию,
                пригласите участников, настройте параметры.
              </p>
              <p className="mt-3 text-slate-600">
                Получите API key и с легкостью интегрируйте в консенсус:
                AI-агентов, сервисы и IoT устройства.
              </p>
              <p className="mt-3 text-slate-600">
                Голосуйте и применяйте результаты.
              </p>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-sm font-medium text-slate-700">
                  1. Создание организации
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  Конфигурируйте базовые параметры. Система создаёт
                  изолированную область с шифрованием данных.
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-sm font-medium text-slate-700">
                  2. Предложения и голосования
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  Участники создают предложения; голосованием можно изменить
                  параметры консенсуса или распределение сил голоса.
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-sm font-medium text-slate-700">
                  3. Исполнение и история
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  Результаты применяются автоматически к следующим предложениям;
                  весь журнал и решения доступны только участникам организации.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Безопасность и приватность
              </h4>
              <p className="mt-4 text-slate-600">
                Логика коллективных решений реализована в автономных
                смарт-контрактах, исполняемых в блокчейн сети. Транзакции не
                требуют газа, при этом данные шифруются для провайдера
                инфраструктуры и головной компании.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>🔐 End-to-end шифрование предложений и голосов;</li>
                <li>
                  🧾 Смарт-контракты на базе стандартов которые прошли аудит;
                </li>
                <li>
                  ⚡ Бесшовный опыт, быстрая финализация и безгазовые
                  транзакции;
                </li>
                <li>
                  🤖 Поддержка AI-агентов, приложений и IoT как участников.
                </li>
              </ul>
            </div>

            <div>
              <div className="rounded-xl p-6 bg-white border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-500">Архитектура</div>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-md bg-slate-50">
                    <div className="text-xs text-slate-500">Инфраструктура</div>
                    <div className="text-sm font-medium">
                      Хранит зашифрованные данные, обеспечивает RPC
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-slate-50">
                    <div className="text-xs text-slate-500">
                      Смарт-контракты
                    </div>
                    <div className="text-sm font-medium">
                      Обеспечивают автономную логику исполнения коллективных
                      решений
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-slate-50">
                    <div className="text-xs text-slate-500">Участники</div>
                    <div className="text-sm font-medium">
                      Видят только свою организацию и голосования
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-50 to-white rounded-2xl p-10 border border-slate-100">
            <h4 className="text-2xl font-semibold">
              Готовы попробовать{' '}
              <span className="font-semibold tracking-tight text-blue-600">
                Voterpool
              </span>
              ?
            </h4>
            <p className="mt-3 text-slate-600">
              Создайте организацию, пригласите участников и начните голосовать —
              просто и безопасно.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="/app"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700"
              >
                Перейти в приложение
              </a>
              {/* <a
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-200 text-slate-700"
              >
                Документация
              </a> */}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-slate-500">
          <div className="max-w-4xl mx-auto">
            © {new Date().getFullYear()} Voterpool — Приватная инфраструктура
            для коллективных решений. Все права защищены.
          </div>
        </footer>
      </main>
    </div>
  );
}
