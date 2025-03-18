import React from 'react';
import { motion } from 'framer-motion';
import { getThemeColor } from '@/entities/theme/model/theme-const';

interface ThemeProgressProps {
  name: string;
  percentage: number;
  themeId: string;
}

export const ThemeProgress: React.FC<ThemeProgressProps> = ({
  name,
  percentage,
  themeId,
}) => {
  // Определение цвета для тематики
  const getColorForTheme = () => {
    const themeColor = getThemeColor(themeId);
    return themeColor || '#4F46E5'; // Цвет по умолчанию, если не найден
  };

  const color = getColorForTheme();

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: color }}
          ></div>
          <span>{name}</span>
        </div>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        ></motion.div>
      </div>
    </div>
  );
};
