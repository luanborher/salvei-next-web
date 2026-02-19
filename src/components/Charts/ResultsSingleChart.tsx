'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Tooltip,
} from 'recharts';
import type { TooltipProps } from 'recharts';

type DataItem = {
  name: string;
  value: number;
  description?: string;
};

interface ResultsChartProps {
  data: DataItem[];
  notYAxis?: boolean;
}

type CustomTooltipProps = TooltipProps<number, string> & {
  payload?: Array<{
    payload?: DataItem;
  }>;
};

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

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const entry = payload[0];
  const data = entry?.payload;
  if (!data?.description) return null;

  return (
    <div
      style={{
        background: '#FEFEFD',
        border: '1px solid #FB8840',
        borderRadius: 12,
        padding: '12px 16px',
        boxShadow: '0px 8px 24px rgba(60, 60, 61, 0.08)',
        color: '#3C3C3D',
        fontFamily: 'var(--font-figtree), sans-serif',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '20px',
        maxWidth: 320,
        textAlign: 'center',
      }}
    >
      {data.description}
    </div>
  );
};

const ResultsSingleChart = ({ data, notYAxis = false }: ResultsChartProps) => {
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
        <Tooltip
          cursor={{ fill: 'rgba(253, 195, 159, 0.16)' }}
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />
        <Bar dataKey="value" fill="#FDC39F" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="value" content={Label} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ResultsSingleChart;
