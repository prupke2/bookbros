export const coerceToString = data => typeof(data) === 'string' ? data : data.join(', ');
