let statistics = {
	redCars: 21,
	blueCars: 45,
	greenCars: 12,
	raceCars: 5,
	blackCars: 40,
	rareCars: 2
};

for (carType in statistics) {
	if (
		carType[0] == 'r'
		||
		statistics[carType] % 2 === 1
	) console.log(statistics[carType]);
}
