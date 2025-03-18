import React, { useState } from 'react';
import { useAppSelector } from '@/app/store/store';
import {
  selectMainThemes,
  selectCompletedThemes,
  selectTransferredThemes,
  selectStatisticsLoading,
} from '@/entities/statistic/model/statistics-selectors';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProgress } from './theme-progress';

export const ThemesStatistics: React.FC = () => {
  const mainThemes = useAppSelector(selectMainThemes);
  const completedThemes = useAppSelector(selectCompletedThemes);
  const transferredThemes = useAppSelector(selectTransferredThemes);
  const isLoading = useAppSelector(selectStatisticsLoading);

  const [activeTab, setActiveTab] = useState<
    'main' | 'completed' | 'transferred'
  >('main');

  // Определение активных тематик на основе выбранной вкладки
  const getActiveThemes = () => {
    switch (activeTab) {
      case 'main':
        return mainThemes;
      case 'completed':
        return completedThemes;
      case 'transferred':
        return transferredThemes;
      default:
        return mainThemes;
    }
  };

  // Заголовок для разных вкладок
  const getTabTitle = () => {
    switch (activeTab) {
      case 'main':
        return 'Топ 3 тематики по обращениям Albek:';
      case 'completed':
        return 'Топ 3 тематики, завершенные Albek:';
      case 'transferred':
        return 'Топ 3 тематики трансфера от Albek:';
      default:
        return 'Топ 3 тематики:';
    }
  };

  // Скелетон для загрузки
  if (isLoading) {
    return (
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-56 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-8 bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div className="flex gap-4 mb-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-8 flex-1 bg-gray-700 rounded animate-pulse"
            ></div>
          ))}
        </div>

        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-5 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">{getTabTitle()}</h3>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Вкладки */}
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'main' ? 'bg-yellow-400 text-black font-medium' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setActiveTab('main')}
        >
          Основные
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'completed' ? 'bg-yellow-400 text-black font-medium' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setActiveTab('completed')}
        >
          Завершенные
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'transferred' ? 'bg-yellow-400 text-black font-medium' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          onClick={() => setActiveTab('transferred')}
        >
          Перевод
        </button>
      </div>

      {/* Список тематик */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {getActiveThemes().map((theme, index) => (
            <ThemeProgress
              key={index}
              name={theme.name}
              percentage={theme.percentage}
              themeId={index.toString()} // Для демонстрации, обычно здесь должен быть реальный ID тематики
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
