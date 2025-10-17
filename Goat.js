/**
 * @author Marina
 * ! The source code is modified by Marina with elegant styling
 * ! Original source: https://github.com/ntkhang03/Goat-Bot-V2
 * ! Thank you NTKhang for the wonderful foundation
 * 
 * 🌸 Marina's Bot Startup System
 * ! Please maintain the credits and respect the original author
 * ! This bot is customized with love by Marina
 */

const { spawn } = require("child_process");
const log = require("./logger/log.js");

// 🌸 Marina's Beautiful Startup Banner
function showMarinaBanner() {
	console.log(`
╔═══════════════════════════════════════╗
║            🌸 MARINA BOT 🌸           ║
║        💫 Elegant AI Assistant        ║
║         🌊 Version: 2.0 Stable        ║
║        🎀 By: Marina (61577638905771) ║
╚═══════════════════════════════════════╝
	`);
	
	console.log("🔧 Starting Marina's Bot System...");
	console.log("💕 Initializing beautiful features...");
	console.log("🌸 Loading elegant commands...");
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
			console.log("💫 Restarting with Marina's elegance...");
			startMarinaProject();
		} else if (code !== 0) {
			console.log(`❌ Process exited with code: ${code}`);
			console.log("🔄 Attempting to restart Marina's Bot...");
			setTimeout(() => {
				startMarinaProject();
			}, 5000);
		}
	});

	child.on("error", (error) => {
		console.log("💔 Error starting Marina's Bot:", error);
		console.log("🔄 Restarting in 10 seconds...");
		setTimeout(() => {
			startMarinaProject();
		}, 10000);
	});
}

// 🎀 Handle Process Termination Gracefully
process.on('SIGINT', () => {
	console.log("\n🌸 Marina's Bot is shutting down gracefully...");
	console.log("💫 Thank you for using Marina's Assistant!");
	process.exit(0);
});

process.on('SIGTERM', () => {
	console.log("\n🌊 Marina's Bot received termination signal...");
	console.log("🎀 Goodbye! See you soon darling!");
	process.exit(0);
});

process.on('uncaughtException', (error) => {
	console.log("❌ Uncaught Exception in Marina's Bot:", error);
	console.log("🔄 Restarting system...");
	setTimeout(() => {
		startMarinaProject();
	}, 5000);
});

process.on('unhandledRejection', (reason, promise) => {
	console.log("💔 Unhandled Rejection at:", promise);
	console.log("🌺 Reason:", reason);
	console.log("💕 Marina's Bot will continue running...");
});

// 🚀 Start Marina's Beautiful Bot
try {
	startMarinaProject();
} catch (error) {
	console.log("💔 Failed to start Marina's Bot:", error);
	console.log("🔄 Attempting recovery restart...");
	setTimeout(() => {
		startMarinaProject();
	}, 10000);
}
