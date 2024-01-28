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

*/

export const mockBooks = [
	{
			"objectId": "4LGRr6mBeA",
			"createdAt": "2023-12-05T15:54:23.974Z",
			"updatedAt": "2023-12-05T15:54:23.974Z",
			"book_id": "FcXRCbHlCtgC",
			"title": "Travels With My Aunt",
			"author": "Graham Greene",
			"created_at": "2023-12-05T15:54:23.882Z",
			"updated_at": "2023-12-05T15:54:23.882Z",
			"club": "test",
			"user": "User 1",
			"average_rating": 5
	},
	{
			"objectId": "Xg7Gs0pBxQ",
			"createdAt": "2023-08-14T14:55:47.120Z",
			"updatedAt": "2023-11-30T04:37:58.922Z",
			"book_id": "EID4smWDEIgC",
			"title": "The Land of Green Plums",
			"author": "Herta Müller",
			"created_at": "2023-08-14T14:55:46.940Z",
			"updated_at": "2023-08-14T14:55:46.940Z",
			"club": "test",
			"user": "User 2",
			"average_rating": 5.7
	},
	{
			"objectId": "zmrHNht1RH",
			"createdAt": "2023-07-21T01:46:49.665Z",
			"updatedAt": "2023-08-14T14:42:20.804Z",
			"book_id": "t_xBzAEACAAJ",
			"title": "Twelve Days of Winter",
			"author": "Stuart MacBride",
			"created_at": "2023-07-21T01:46:47.837Z",
			"updated_at": "2023-07-21T01:46:47.837Z",
			"club": "test",
			"user": "User 3",
			"average_rating": 4.7
	}
];

export const mockRatings = [
	{
		"objectId": "R91H96OqKU",
		"createdAt": "2023-11-30T04:24:04.584Z",
		"updatedAt": "2023-11-30T04:24:04.584Z",
		"book_id": "FcXRCbHlCtgC",
		"name": "User 2",
		"rating": 2.5,
		"club": "test"
	},
	{
		"objectId": "R91H96OqKU",
		"createdAt": "2023-11-30T04:24:04.584Z",
		"updatedAt": "2023-11-30T04:24:04.584Z",
		"book_id": "FcXRCbHlCtgC",
		"name": "User 3",
		"rating": 7.5,
		"club": "test"
	},
	{
		"objectId": "R91H96OqKU",
		"createdAt": "2023-11-30T04:24:04.584Z",
		"updatedAt": "2023-11-30T04:24:04.584Z",
		"book_id": "FcXRCbHlCtgC",
		"name": "User 1",
		"rating": 5,
		"club": "test"
	},
	{
			"objectId": "IFqFBMThH4",
			"createdAt": "2023-11-30T04:37:56.938Z",
			"updatedAt": "2023-11-30T04:37:56.938Z",
			"book_id": "EID4smWDEIgC",
			"name": "User 4",
			"rating": 6.5,
			"club": "test"
	},
	{
			"objectId": "tJ0nY5pbH4",
			"createdAt": "2023-11-30T04:37:58.757Z",
			"updatedAt": "2023-11-30T04:37:58.757Z",
			"book_id": "EID4smWDEIgC",
			"name": "User 5",
			"rating": 6.5,
			"club": "test"
	},
	{
			"objectId": "pw0IyGdWWS",
			"createdAt": "2023-11-30T04:37:26.173Z",
			"updatedAt": "2023-11-30T04:37:26.173Z",
			"book_id": "EID4smWDEIgC",
			"name": "User 1",
			"rating": 5,
			"club": "test"
	},
	{
			"objectId": "e9guSWsLr7",
			"createdAt": "2023-07-08T17:50:33.242Z",
			"updatedAt": "2023-07-15T02:22:15.676Z",
			"book_id": "EID4smWDEIgC",
			"name": "User 2",
			"rating": 7,
			"club": "test"
	},
	{
			"objectId": "aDk9jS4LFb",
			"createdAt": "2023-07-08T17:50:33.241Z",
			"updatedAt": "2023-07-15T02:22:41.220Z",
			"book_id": "EID4smWDEIgC",
			"name": "User 3",
			"rating": 3.5,
			"club": "test"
	},
					{
			"objectId": "ZI1qoEGu4T",
			"createdAt": "2023-07-21T01:49:36.521Z",
			"updatedAt": "2023-07-21T01:49:36.521Z",
			"book_id": "t_xBzAEACAAJ",
			"name": "User 1",
			"rating": 9,
			"club": "test"
	},
	{
			"objectId": "tGOIP2W7tH",
			"createdAt": "2023-07-08T17:50:33.424Z",
			"updatedAt": "2023-07-15T02:24:27.793Z",
			"book_id": "t_xBzAEACAAJ",
			"name": "User 2",
			"rating": 7.5,
			"club": "test"
	},
	{
			"objectId": "r9s4SrpZ4K",
			"createdAt": "2023-07-08T17:50:33.423Z",
			"updatedAt": "2023-07-15T02:24:45.579Z",
			"book_id": "t_xBzAEACAAJ",
			"name": "User 3",
			"notes": "Inconsistent choices made by main character with respect to her perceived age. Toronto-related aspects seemed tacked-on and completely unnecessary to the story. It all felt phoned-in and lazy. A poor read.",
			"rating": 3,
			"club": "test"
	},
	{
			"objectId": "AJXhMLaPTA",
			"createdAt": "2023-07-08T17:50:33.424Z",
			"updatedAt": "2023-07-15T02:24:29.359Z",
			"book_id": "t_xBzAEACAAJ",
			"name": "User 4",
			"notes": "One of the worst books I have ever read. Staring at a blank wall on the plane journey seemed a better use of my time than continuing to read this abomination. A poor portrayal of adult behaviour in general. +1 point for a throaty blowjob scene.",
			"rating": 2,
			"club": "test"
	},
	{
			"objectId": "rUSpyot49d",
			"createdAt": "2023-07-08T17:50:33.241Z",
			"updatedAt": "2023-07-15T02:23:18.580Z",
			"book_id": "t_xBzAEACAAJ",
			"name": "User 5",
			"rating": 2,
			"club": "test"
	}
];
