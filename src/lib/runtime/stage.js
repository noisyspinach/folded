export function createStage(canvas) {
	const ctx = canvas.getContext('2d');
	const start = { x: canvas.width / 2, y: canvas.height / 2, dir: 90 };
	const sprite = { ...start };
	const size = 30;
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.translate(sprite.x, canvas.height - sprite.y); // the only y flip
		ctx.rotate(((sprite.dir - 90) * Math.PI) / 180);
		ctx.fillRect(-size / 2, -size / 2, size, size); // centred on x, y
		ctx.restore();
	}

	return {
		sprite,
		draw,
		move(n) {
			const r = (sprite.dir * Math.PI) / 180;
			sprite.x += n * Math.sin(r);
			sprite.y += n * Math.cos(r);
			draw();
		},
		turn(deg) {
			sprite.dir += deg;
			draw();
		},
		reset() {
			Object.assign(sprite, start);
			draw();
		}
	};
}
