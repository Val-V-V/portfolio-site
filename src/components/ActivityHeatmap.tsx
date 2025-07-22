'use client';

import { Heatmap } from '@mantine/charts';
import dayjs from 'dayjs'

export default function ActivityHeatmap({ data }) {
  const dataObj = Object.fromEntries(
    data.map(item => [item.date, item.total]) 
  );

  const fullDataMap = new Map(data.map(d => [d.date, d]));

  return (
    <Heatmap
      data={dataObj}
      startDate="2024-10-30"
      colors={[
        '#2e0749ff',
        '#571089',
        '#6411AD',
        '#6D23B6',
        '#822FAF',
        '#973AA8',
        '#AC46A1',
        '#C05299',
        '#D55D92',
        '#EA698B',
        '#FFB600',
        '#FFAA00',
        '#FF9E00',
        '#FF9100',
        '#FF8500',
        '#FF7900',
        '#FF6D00',
        '#FF6000',
        '#FF5400',
        '#FF4800'
      ]}
      withTooltip
      withOutsideDates={false}
      withWeekdayLabels
      withMonthLabels
      rectRadius={3}
      rectSize={25}
      gap={3}
      getTooltipLabel={({ date, value }) => {
        const full = fullDataMap.get(date);
        if (!full || value === 0) {
          return `${dayjs(date).format('DD MMM, YYYY')} – No contributions`;
        }
        return `${dayjs(date).format('DD MMM, YYYY')} –\n GitHub contribution${full.github !== 1 ? 's' : ''}: ${full.github},\nLeetCode submission${full.leetcode !== 1 ? 's' : ''}: ${full.leetcode}`;
      }}
    />
  );
}
