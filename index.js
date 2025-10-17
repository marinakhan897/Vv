/**
 * @author Marina
 * ! The source code is modified by Marina with elegant styling
 * ! Original source: https://github.com/ntkhang03/Goat-Bot-V2
 * ! Thank you NTKhang for the wonderful foundation
 * 
 * 🌸 Marina's Bot Startup System
 * ! Please maintain the credits and respect the original author
 * ! This bot is customized with love by Marina
 * 
 * English:
 * ! This is Marina's customized version of Goat-Bot
 * ! Maintain proper credits and enjoy the beautiful features
 * 
 * Hindi:
 * ! Yeh Marina ka customized bot hai
 * ! Credits maintain karein aur beautiful features ka enjoy karein
 */

const { spawn } = require("child_process");
const log = require("./logger/log.js");
const chalk = require('chalk');

// 🌸 Marina's Beautiful Startup Banner
function showMarinaBanner() {
	console.log(chalk.magenta(`
╔═══════════════════════════════════════╗
║            🌸 MARINA BOT 🌸           ║
║        💫 Elegant AI Assistant        ║
║         🌊 Version: 2.0 Stable        ║
║        🎀 By: Marina (61577638905771) ║
╚═══════════════════════════════════════╝
	`));
	
	console.log(chalk.cyan("🔧 Starting Marina's Bot System..."));
	console.log(chalk.yellow("💕 Initializing beautiful features..."));
	console.log(chalk.green("🌸 Loading elegant commands..."));
}

// ✨ Marina's Enhanced Startup Function
function startMarinaProject() {
	// Show beautiful banner
	showMarinaBanner();
	
	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("🔄 Marina's Bot is Restarting...");
			console.log(chalk.cyan("💫 Restarting with Marina's elegance..."));
			startMarinaProject();
		} else if (code !== 0) {
			console.log(chalk.red(`❌ Process exited with code: ${code}`));
			console.log(chalk.yellow("🔄 Attempting to restart Marina's Bot..."));
			setTimeout(() => {
				startMarinaProject();
			}, 5000);
		}
	});

	child.on("error", (error) => {
		console.log(chalk.red("💔 Error starting Marina's Bot:"), error);
		console.log(chalk.yellow("🔄 Restarting in 10 seconds..."));
		setTimeout(() => {
			startMarinaProject();
		}, 10000);
	});
}

// 🎀 Handle Process Termination Gracefully
process.on('SIGINT', () => {
	console.log(chalk.magenta("\n🌸 Marina's Bot is shutting down gracefully..."));
	console.log(chalk.cyan("💫 Thank you for using Marina's Assistant!"));
	process.exit(0);
});

process.on('SIGTERM', () => {
	console.log(chalk.magenta("\n🌊 Marina's Bot received termination signal..."));
	console.log(chalk.yellow("🎀 Goodbye! See you soon darling!"));
	process.exit(0);
});

process.on('uncaughtException', (error) => {
	console.log(chalk.red("❌ Uncaught Exception in Marina's Bot:"), error);
	console.log(chalk.yellow("🔄 Restarting system..."));
	setTimeout(() => {
		startMarinaProject();
	}, 5000);
});

process.on('unhandledRejection', (reason, promise) => {
	console.log(chalk.red("💔 Unhandled Rejection at:"), promise);
	console.log(chalk.red("🌺 Reason:"), reason);
	console.log(chalk.yellow("💕 Marina's Bot will continue running..."));
});

// 🚀 Start Marina's Beautiful Bot
try {
	startMarinaProject();
} catch (error) {
	console.log(chalk.red("💔 Failed to start Marina's Bot:"), error);
	console.log(chalk.yellow("🔄 Attempting recovery restart..."));
	setTimeout(() => {
		startMarinaProject();
	}, 10000);
}
