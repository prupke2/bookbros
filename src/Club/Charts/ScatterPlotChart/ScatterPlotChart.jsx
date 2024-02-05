import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import './ScatterPlotChart.scss';
import Tooltip from './Tooltip/Tooltip';

const ScatterPlotChart = ({ data, mean }) => (
	<div className='scatterplot-chart-wrapper'>
		<ResponsiveScatterPlot
			data={data}
			margin={{ top: 70, right: 80, bottom: 70, left: 80 }}
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
			// annotations={{
      //   text: {
			// 		fontSize: 13,
			// 		fill: "#333333",
			// 		outlineWidth: 2,
			// 		outlineColor: "#ffffff",
			// 		outlineOpacity: 1
      //   },
      //   // link: {
      //   //   stroke: "#000000",
      //   //   strokeWidth: 1,
      //   //   outlineWidth: 2,
      //   //   outlineColor: "#ffffff",
      //   //   outlineOpacity: 1
      //   // },
    	// }}
			legends={[
				{
					anchor: 'top-left',
					direction: 'row',
					justify: false,
					translateX: -20,
					translateY: -50,
					itemWidth: 80,
					itemHeight: 25,
					itemsSpacing: 5,
					itemDirection: 'left-to-right',
					symbolSize: 18,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemOpacity: 1
							}
						},
					]
				}
			]}
			tooltip={point => {
				return <Tooltip slice={point.node} />;
			}}
		/>
	</div>
);

export default ScatterPlotChart;
