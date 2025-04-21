/**
	 * Task 1
	 * @param dist - расстояние от подножия до холма
	 * @param dayDist - залезает вверх по холму днём
	 * @param nightDist - скатывает вниз ночью
	 * @returns {number} Ответ: 4 дня для текущих данных
	 */
	function dayCount(dist = 100, dayDist = 50, nightDist = (-30)) {
		let days = 0;
		let currentDistance = 0;
		while (currentDistance < dist) {
			currentDistance +=dayDist;
			days++;
			if (currentDistance < dist) {
				currentDistance += nightDist;
			}
		}
		return days;
	}

/**
	 * Task 2
	 * @param humanCount
	 * @returns {number} Ответ: для 10 человек 45 рукопожатий
	 */
	function greeting(humanCount) {
		//	return (humanCount * (humanCount-1)) / 2; // либо используем формулу
		if (!humanCount || humanCount < 2) {
			return 0;
		}
		let greetingCount = 0;
		for (let i = 2; i<=humanCount; i++) {
			greetingCount = greetingCount + (i-1)
		}
		return greetingCount;
	}

  let duplicateStr = "кошка, собака, лошадь, корова, кошка, корова, змея,собака";
	const commaSeparator = ',';
	/**
	 * Task 3
	 * @param str
	 * @returns {string}
	 */
	function deleteDuplicates(str) {
		if (!str.trim()) {
			return '';
		}
		let arr = str.split(commaSeparator);
		let set = new Set(arr.map((el) => el.trim()))
		return Array.from(set).join(commaSeparator);
	}
