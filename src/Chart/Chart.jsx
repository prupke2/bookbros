import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import './Chart.scss';
import Tooltip from './Tooltip/Tooltip';
import { transformChartData } from './hooks';

const Chart = ({ data }) => {
	const transformedData = data && transformChartData(data);
	
	return (
		<div id='chart-wrapper'>
			<ResponsiveScatterPlot
				data={transformedData}
				margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
				nodeSize={18}
				colors={{"scheme": "set1"}}
				animate={true}
				useMesh={true}
				xScale={{
					type: 'time',
					format: '%Y-%m-%d',
					precision: 'day',
					useUTC: false,
				}}
				xFormat=">-.2f"
				yScale={{ type: 'linear', min: 0, max: 10 }}
				yFormat=">-.2f"
				blendMode="multiply"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					format: '%b %Y',
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Date',
					legendPosition: 'middle',
					legendOffset: 46
				}}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Average Rating',
					legendPosition: 'middle',
					legendOffset: -60
				}}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 130,
						translateY: 0,
						itemWidth: 100,
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
							}
						]
					}
				]}
				tooltip={point => {
					return <Tooltip slice={point.node} />;
				}}
			/>
		</div>
	);
}

export default Chart;
