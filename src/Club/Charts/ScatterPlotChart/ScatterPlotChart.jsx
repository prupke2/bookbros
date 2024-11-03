import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import './ScatterPlotChart.scss';
import ChartTooltip from './ChartTooltip/ChartTooltip';
import { getLegends, mobileUser } from '../utils';

const sideMargin = mobileUser ? 40 : 80;

const ScatterPlotChart = ({ data, mean }) => (
	<div className='scatterplot-chart-wrapper'>
		<ResponsiveScatterPlot
			data={data}
			margin={{ top: 70, right: sideMargin, bottom: 70, left: sideMargin }}
			nodeSize={18}
			colors={{"scheme": "set1"}}
			animate={true}
			useMesh={true}
			xScale={{
				type: 'time',
				format: '%Y-%m-%d',
				precision: 'month',
				useUTC: false,
			}}
			xFormat=">-.2f"
			yScale={{ type: 'linear', min: 0, max: 10 }}
			yFormat=">-.2f"
			blendMode="multiply"
			axisRight={null}
			axisLeft={{
				legend: 'Rating',
				legendPosition: 'middle',
				legendOffset: -50,
			}}
			axisBottom={{
				format: '%b %Y',
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				// tickValues: 'every month', 
				tickRotation: -45,
			}}
			markers={[
				{
					axis: 'y',
					value: mean,
					lineStyle: { stroke: 'rgba(0, 0, 0, 30)', strokeWidth: 1, strokeDasharray: '10' },
					legend: `Mean: ${mean}`,
					legendPosition: 'top-right',
					legendOrientation: 'horizontal',
					textStyle: { fontSize: 12 },
				}
			]}
			legends={getLegends(data)}
			tooltip={point => <ChartTooltip slice={point.node} />}
		/>
	</div>
);

export default ScatterPlotChart;
