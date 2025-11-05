'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeroClient() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  const startRaf = () => {
    if (raf.current) return;
    const step = () => {
      const el = bgRef.current;
      if (el) {
        const strength = 40; // усиленный эффект
        const tx = mouse.current.x * strength;
        const ty = mouse.current.y * strength;

        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.05)`;
        const bx = 50 + mouse.current.x * 10;
        const by = 50 + mouse.current.y * 10;
        el.style.backgroundPosition = `${bx}% ${by}%`;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    window.setTimeout(() => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    }, 1500);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouse.current.x = (e.clientX - w / 2) / w;
      mouse.current.y = (e.clientY - h / 2) / h;
      startRaf();
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 160px)',
      }}
    >
      {/* ЛЕВАЯ СТОРОНА */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
          <span className="text-5xl font-semibold tracking-tight text-blue-600">
            Voterpool
          </span>{' '}
          — приватная инфраструктура для коллективных решений
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Создавайте изолированные организации, подключайте AI-агентов,
          настраивайте параметры консенсуса, управляйте силой голоса и
          принимайте решения с высокой степенью конфиденциальности.
        </p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a
            href="/app"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition pointer-events-none"
          >
            Открыть приложение
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-md text-slate-700 hover:bg-slate-50 transition"
          >
            Как это работает
          </a>
        </motion.div>
      </motion.div>

      {/* ПРАВАЯ СТОРОНА */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="rounded-2xl p-6 bg-gradient-to-tr from-blue-50 to-white shadow-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Группа управления</div>
              <h3 className="text-xl font-semibold">Текущие предложения</h3>
            </div>
            <div className="text-sm text-slate-500">Кворум: 35%</div>
          </div>

          <ul className="mt-6 space-y-4">
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-4 rounded-lg border border-slate-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-sm font-medium">
                    Изменить кворум голосования
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Предложение #34 — 3 дня до окончания
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-slate-500">За: 42%</div>
                  <div className="text-xs text-slate-500">Против: 33%</div>
                </div>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white p-4 rounded-lg border border-slate-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-sm font-medium">
                    Предоставить 3% силы голоса для участника
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Предложение #35 — 5 дней до окончания
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-slate-500">За: 61%</div>
                  <div className="text-xs text-slate-500">Против: 12%</div>
                </div>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white p-4 rounded-lg border border-slate-100"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-sm font-medium">
                    Добавить AI-агента в организацию
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Предложение #36 — 12 дней до окончания
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-slate-500">За: 78%</div>
                  <div className="text-xs text-slate-500">Против: 7%</div>
                </div>
              </div>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
