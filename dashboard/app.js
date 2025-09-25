const express = require("express");
const app = express();

module.exports = async () => {
	app.get("/uptime", (req, res) => {
		res.json({
			uptime: process.uptime(),
			uptimeHuman: convertTime(process.uptime() * 1000)
		});
	});

	const PORT = process.env.PORT || 3001;
	app.listen(PORT, () => {
		console.log(`Uptime API running on port ${PORT}`);
	});
};

function convertTime(ms) {
	const sec = Math.floor((ms / 1000) % 60);
	const min = Math.floor((ms / (1000 * 60)) % 60);
	const hr = Math.floor((ms / (1000 * 60 * 60)) % 24);
	const days = Math.floor(ms / (1000 * 60 * 60 * 24));
	return `${days}d ${hr}h ${min}m ${sec}s`;
}

