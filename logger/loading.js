const { colors } = require('../func/colors.js');
const moment = require("moment-timezone");

// 🌸 Marina's Beautiful Characters for Logging
const characters = '🌸💫🌊🎀✨💕🌺🥰💖🌷';

// 🎀 Marina's Current Time Function
const getCurrentTime = () => colors.magenta(moment().tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY'));

// 💫 Marina's Custom Logging Functions
function logError(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "ERROR";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.redBright(`❌ ${characters} ${prefix}:`)} ${message}`}`);
}

function logWarn(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "WARN";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.yellowBright(`⚠️ ${characters} ${prefix}:`)} ${message}`}`);
}

function logInfo(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "INFO";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.greenBright(`ℹ️ ${characters} ${prefix}:`)} ${message}`}`);
}

function logSuccess(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "SUCCESS";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.cyanBright(`✅ ${characters} ${prefix}:`)} ${message}`}`);
}

function logMaster(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "MARINA";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#ff69b4", `👑 ${characters} ${prefix}:`)} ${message}`}`);
}

function logBot(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "BOT";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.blueBright(`🤖 ${characters} ${prefix}:`)} ${message}`}`);
}

function logSystem(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "SYSTEM";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.whiteBright(`⚙️ ${characters} ${prefix}:`)} ${message}`}`);
}

function logDatabase(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "DATABASE";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#00ff00", `🗄️ ${characters} ${prefix}:`)} ${message}`}`);
}

function logNetwork(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "NETWORK";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#ffa500", `🌐 ${characters} ${prefix}:`)} ${message}`}`);
}

function logCommand(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "COMMAND";
	}
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#9370db", `📝 ${characters} ${prefix}:`)} ${message}`}`);
}

// 🌺 Marina's Special Logging Functions
function logMarinaStart(message) {
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#ff1493", `🌸 MARINA BOT START: ${message}`)}`}`);
}

function logMarinaReady(message) {
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#00ff7f", `💫 MARINA BOT READY: ${message}`)}`}`);
}

function logMarinaError(message) {
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#ff0000", `❌ MARINA BOT ERROR: ${message}`)}`}`);
}

function logMarinaSuccess(message) {
	process.stderr.write(`\r${`${getCurrentTime()} ${colors.hex("#32cd32", `✅ MARINA BOT SUCCESS: ${message}`)}`}`);
}

// ✨ Marina's Enhanced Logger Module
module.exports = {
	// Basic Logging Functions
	err: logError,
	error: logError,
	warn: logWarn,
	info: logInfo,
	succes: logSuccess,
	success: logSuccess,
	master: logMaster,
	
	// Specialized Logging Functions
	bot: logBot,
	system: logSystem,
	database: logDatabase,
	network: logNetwork,
	command: logCommand,
	
	// Marina's Special Functions
	marinaStart: logMarinaStart,
	marinaReady: logMarinaReady,
	marinaError: logMarinaError,
	marinaSuccess: logMarinaSuccess,
	
	// Utility Functions
	getCurrentTime: getCurrentTime,
	
	// 🌸 Marina's Beautiful Banner Logger
	banner: function() {
		const banner = `
╔═══════════════════════════════════════╗
║            🌸 MARINA BOT 🌸           ║
║        💫 Elegant AI Assistant        ║
║         🌊 Version: 2.0 Stable        ║
║        🎀 By: Marina (61577638905771) ║
╚═══════════════════════════════════════╝
		`;
		process.stderr.write(`\r${colors.rainbow(banner)}`);
	},
	
	// 💕 Marina's Separator
	separator: function() {
		process.stderr.write(`\r${colors.gray('─────────────────────────────────────')}`);
	},
	
	// 🎀 Marina's Loading Animation
	loading: function(message) {
		const frames = ['🌸', '💫', '🌊', '🎀', '✨', '💕', '🌺', '🥰'];
		let i = 0;
		const interval = setInterval(() => {
			process.stderr.write(`\r${getCurrentTime()} ${colors.cyanBright(`${frames[i]} ${message}...`)}`);
			i = (i + 1) % frames.length;
		}, 200);
		
		return {
			stop: () => {
				clearInterval(interval);
				process.stderr.write(`\r${getCurrentTime()} ${colors.greenBright(`✅ ${message} completed!`)}`);
			}
		};
	}
};
