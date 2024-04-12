export const getFilterPanelTypeList = async () =>
	fetch("http://localhost:3005/filterPanelTypelist")
		.then((loadedList) => loadedList.json())
		.then((loadedList) => loadedList);
