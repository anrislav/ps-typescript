enum Direction {
	North = 1,
	South,
	East,
	West
}

const currentDirection = Direction.East;

function showDirection(direction: Direction): void {
	console.log(`Код направления: ${direction}`);
	console.log(`Название: ${Direction[direction]}`);
}

showDirection(currentDirection);
