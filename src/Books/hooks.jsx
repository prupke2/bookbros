import Parse from 'parse';

/* Parse tl;dr:

	const {
		isLive, // Indicates that Parse Live Query is connected
		isLoading, // Indicates that the initial load is being processed
		isSyncing, // Indicates that the library is getting the latest data from Parse Server
		results, // Stores the current results in an array of Parse Objects
		count, // Stores the current results count
		error, // Stores any error
		reload // Function that can be used to reload the data
	} = useParseQuery(
		parseQuery, // The Parse Query to be used
		{
			enabled: true, // Enables the parse query (default: true)
			enableLocalDatastore: true, // Enables cache in local datastore (default: true)
			enableLiveQuery: true // Enables live query for real-time update (default: true)
		}

--------------------------

Sample results:
	[
		{
				"createdAt": "2023-04-23T17:15:02.183Z",
				"updatedAt": "2023-04-23T17:15:02.183Z",
				"book_id": "QfbS_rl5VsoC",
				"title": "Strangers on a Train",
				"author": "Patricia Highsmith",
				"club": "BRIjNbcPR9",
				"user": "Andrew",
				"objectId": "7XMpAeXYVi"
		},
		{
				"createdAt": "2023-04-23T17:15:02.183Z",
				"updatedAt": "2023-04-23T17:15:02.183Z",
				"book_id": "4ZQnDwAAQBAJ",
				"title": "Conversations with Friends",
				"author": "Sally Rooney",
				"club": "BRIjNbcPR9",
				"user": "Mike",
				"objectId": "kEi4Um89JY"
		}
	]
*/

export const getBooks = async () => {
  const query = new Parse.Query('Books');
	const results = await query.find();
	return results
};

export const getBook = async (objectId) => {
  const query = new Parse.Query('Books').equalTo('objectId', objectId);
	const results = await query.find();
	return results
};
