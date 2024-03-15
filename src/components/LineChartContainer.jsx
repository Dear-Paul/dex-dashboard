import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Mar',
    uv: 40
  },
  {
    name: 'Apr',
    uv: 60
  },
  {
    name: 'May',
    uv: 100
  },
  {
    name: 'Jun',
    uv: 400
  },
  {
    name: 'Jul',
    uv: 600
  },
  {
    name: 'Aug',
    uv: 800
  }
];
const LineChartContainer = () => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 16 }}>
        <CartesianGrid />
        <XAxis
          stroke="#F7B32B"
          dataKey="name"
          angle={-45}
          tickMargin={15}
          fontSize={14}
          tick={{ fill: '#999999' }}
        />
        <YAxis
          tickSize={1}
          tickCount={6}
          stroke=""
          fontSize={10}
          tickMargin={4}
          tick={{ fill: '#999999' }}
        />
        <Line type="monotone" dataKey="uv" stroke="#3A5743" strokeLinecap="round" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineChartContainer;
