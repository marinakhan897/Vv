const { colors } = require('../func/colors.js');
const moment = require("moment-timezone");

// 🌸 Marina's Beautiful Characters for Logging
const characters = '🌸💫🌊🎀✨💕🌺🥰💖🌷';

// 🎀 Marina's Current Time Function
const getCurrentTime = () => colors.magenta(moment().tz("Asia/Kolkata").format("HH:mm:ss DD/MM/YYYY"));

// 💫 Marina's Enhanced Error Logging
function logError(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "ERROR";
	}
	console.log(`${getCurrentTime()} ${colors.redBright(`❌ ${characters} ${prefix}:`)}`, message);
	
	const error = Object.values(arguments).slice(2);
	for (let err of error) {
		if (typeof err == "object" && !err.stack)
			err = JSON.stringify(err, null, 2);
		console.log(`${getCurrentTime()} ${colors.redBright(`❌ ${characters} ${prefix}:`)}`, err);
	}
}

// ✨ Marina's Beautiful Logger Module
module.exports = {
	// 🌺 Error Logging
	err: logError,
	error: logError,
	
	// 💕 Warning Logging
	warn: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "WARN";
		}
		console.log(`${getCurrentTime()} ${colors.yellowBright(`⚠️ ${characters} ${prefix}:`)}`, message);
	},
	
	// 🌊 Info Logging
	info: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "INFO";
		}
		console.log(`${getCurrentTime()} ${colors.greenBright(`ℹ️ ${characters} ${prefix}:`)}`, message);
	},
	
	// 🎀 Success Logging
	success: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "SUCCESS";
		}
		console.log(`${getCurrentTime()} ${colors.cyanBright(`✅ ${characters} ${prefix}:`)}`, message);
	},
	
	// 👑 Master/Marina Logging
	master: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "MARINA";
		}
		console.log(`${getCurrentTime()} ${colors.hex("#ff69b4", `👑 ${characters} ${prefix}:`)}`, message);
	},
	
	// 🤖 Bot Logging
	bot: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "BOT";
		}
		console.log(`${getCurrentTime()} ${colors.blueBright(`🤖 ${characters} ${prefix}:`)}`, message);
	},
	
	// 🌸 Marina Special Logging
	marina: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "MARINA";
		}
		console.log(`${getCurrentTime()} ${colors.hex("#ff1493", `🌸 ${characters} ${prefix}:`)}`, message);
	},
	
	// 💫 System Logging
	system: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "SYSTEM";
		}
		console.log(`${getCurrentTime()} ${colors.whiteBright(`⚙️ ${characters} ${prefix}:`)}`, message);
	},
	
	// 🗄️ Database Logging
	database: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "DATABASE";
		}
		console.log(`${getCurrentTime()} ${colors.hex("#00ff00", `🗄️ ${characters} ${prefix}:`)}`, message);
	},
	
	// 🌐 Network Logging
	network: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "NETWORK";
		}
		console.log(`${getCurrentTime()} ${colors.hex("#ffa500", `🌐 ${characters} ${prefix}:`)}`, message);
	},
	
	// 📝 Command Logging
	command: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "COMMAND";
		}
		console.log(`${getCurrentTime()} ${colors.hex("#9370db", `📝 ${characters} ${prefix}:`)}`, message);
	},
	
	// 🔧 Development Logging
	dev: (...args) => {
		if (["development", "production"].includes(process.env.NODE_ENV) == false)
			return;
		try {
			throw new Error();
		}
		catch (err) {
			const at = err.stack.split('\n')[2];
			let position = at.slice(at.indexOf(process.cwd()) + process.cwd().length + 1);
			position.endsWith(')') ? position = position.slice(0, -1) : null;
			console.log(`\x1b[36m${position} =>\x1b[0m`, ...args);
		}
	},
	
	// 🚀 Marina's Startup Banner
	banner: function() {
		const banner = `
╔═══════════════════════════════════════╗
║            🌸 MARINA BOT 🌸           ║
║        💫 Elegant AI Assistant        ║
║         🌊 Version: 2.0 Stable        ║
║        🎀 By: Marina (61577638905771) ║
╚═══════════════════════════════════════╝
		`;
		console.log(colors.rainbow(banner));
	},
	
	// 💖 Marina's Separator
	separator: function() {
		console.log(colors.gray('─────────────────────────────────────'));
	},
	
	// ✨ Get Current Time Utility
	getCurrentTime: getCurrentTime
};
