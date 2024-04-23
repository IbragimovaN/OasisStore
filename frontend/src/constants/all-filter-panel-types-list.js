export const allFilterPanelTypeslist = [
	{
		id: "age",
		name: "Возрастная категория",
		checkList: [
			{ checkId: 0, name: "до 30 лет" },
			{ checkId: 1, name: "от 30 до 40 лет" },
			{ checkId: 2, name: "больще 40 лет" },
		],
		forCategory: ["mask", "cream", "tonic&lotion", "cream_body", "scrub"],
	},
	{
		id: "brand",
		name: "Бренд",
		checkList: [
			{ checkId: "Payot", name: "PAYOT" },
			{ checkId: "CLINIQUE", name: "CLINIQUE" },
			{ checkId: "CLARINS", name: "CLARINS" },
		],
		forCategory: [
			"mask",
			"cream",
			"tonic&lotion",
			"cream_body",
			"scrub",
			"shampoo",
			"balsam",
			"deodorantMan",
			"shampooMan",
		],
	},
	{
		id: "hairType",
		name: "Тип волос",
		checkList: [
			{ checkId: 0, name: "сухие" },
			{ checkId: 1, name: "жирные" },
			{ checkId: 2, name: "нормальные" },
			{ checkId: 3, name: "окрашенные" },
		],
		forCategory: ["shampoo", "balsam"],
	},
];
