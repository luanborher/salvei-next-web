'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

type DataItem = {
  name: string;
  individual: number;
  turma: number;
};

interface ResultsChartProps {
  data: DataItem[];
  notYAxis?: boolean;
}

const YAxisTick = ({ x, y, payload }: any) => {
  return (
    <text
      x={x}
      y={y}
      dx={0}
      dy={4}
      textAnchor="start"
      fontFamily="var(--font-figtree), sans-serif"
      fontWeight={400}
      fontSize={14}
      fill="#6D6D6D"
    >
      {payload.value}
    </text>
  );
};

const Label = ({ x, y, width, value }: any) => {
  if (x == null || y == null || width == null) return null;
  const text = typeof value === 'number' ? value.toFixed(1) : value;
  return (
    <text
      x={x + width / 2}
      y={y - 12}
      textAnchor="middle"
      fontFamily="var(--font-figtree), sans-serif"
      fontWeight={400}
      fontSize={14}
      fill="#6D6D6D"
    >
      {text}
    </text>
  );
};

const ResultsChart = ({ data, notYAxis = false }: ResultsChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={417}>
      <BarChart
        data={data}
        margin={{ top: 16, right: -24, left: -24, bottom: 0 }}
        barSize={27}
        barCategoryGap={0}
      >
        <CartesianGrid stroke="#DDE3F7" strokeWidth={1} vertical={false} />
        <XAxis
          dataKey="name"
          tick={{
            fill: '#6D6D6D',
            fontFamily: 'var(--font-figtree), sans-serif',
            fontWeight: 400,
            fontSize: 14,
          }}
          tickMargin={8}
          tickLine={false}
          axisLine={false}
          interval={0}
          padding={{ left: 0, right: 0 }}
        />
        <YAxis
          domain={[0, 10]}
          hide={notYAxis}
          tick={notYAxis ? undefined : <YAxisTick />}
          tickLine={false}
          axisLine={false}
          tickMargin={-6}
          width={28}
          tickCount={11}
          interval={0}
        />
        <Bar dataKey="individual" fill="#A6AEDE" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="individual" content={Label} />
        </Bar>
        <Bar dataKey="turma" fill="#FDC39F" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="turma" content={Label} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ResultsChart;
