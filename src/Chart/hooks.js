export function transformChartData(inputData) {
	if (!inputData) return [];

	const transformedData = {};
	const min = {currentMin: 10};
	const max = {currentMax: 0};

	inputData.forEach(entry => {
			if (!entry.averageRating) {
				return;
			}
			if (entry.averageRating < min.currentMin) {
				min.bookId = entry.bookId;
				min.currentMin = entry.averageRating;
				min.user = entry.user;
			}
			if (entry.averageRating > max.currentMax) {
				max.bookId = entry.bookId;
				max.currentMax = entry.averageRating;
				max.user = entry.user;
			}

			const id = entry.user;
			const date = new Date(entry.createdAt);
			const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

			if (!transformedData[id]) {
				transformedData[id] = {
					id: id,
					data: []
				};
			}

			transformedData[id].data.push({
					x: formattedDate.toString(),
					y: entry.averageRating,
					book: entry.title,
					author: entry.author,
					id: entry.bookId
			});
	});

	// Add min and max key to highest and lowest rated books
	transformedData[min.user].data.filter(entry => entry.id === min.bookId)[0].min = true;
	transformedData[max.user].data.filter(entry => entry.id === max.bookId)[0].max = true;

	return Object.values(transformedData);
}

export const findMinAndMax = (data) => {
	let min = 0;
	let max = 0;
	data.forEach(entry => {
		if (entry.y < min) {
			min = entry.y;
		}
		if (entry.y > max) {
			max = entry.y;
		}
	});
	return [min, max];
}
