const fs = require("fs-extra");

module.exports = {
	config: {
		name: "loadconfig",
		aliases: ["loadcf", "reloadconfig"],
		version: "2.0",
		author: "Marina",
		countDown: 5,
		role: 2,
		description: {
			en: "Reload bot configuration with Marina's touch"
		},
		category: "owner",
		guide: "{pn}"
	},

	langs: {
		en: {
			success: "🌸 Config has been reloaded successfully! 💫",
			error: "❌ Failed to reload config, please check console! 🌸"
		}
	},

	onStart: async function ({ message, getLang, api, event }) {
		try {
			// Marina's Profile Picture
			const marinaProfilePic = "https://graph.facebook.com/61577638905771/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
			
			// Reload configurations
			global.GoatBot.config = fs.readJsonSync(global.client.dirConfig);
			global.GoatBot.configCommands = fs.readJsonSync(global.client.dirConfigCommands);
			
			// Send success message with Marina's profile picture
			await message.reply({
				body: `🌺 ─── CONFIG RELOADED ─── 🌺
				
💫 ${getLang("success")}

✨ Config Files Updated:
• main-config.json ✅
• commands-config.json ✅

🎀 Marina's Bot is now refreshed!`,
				attachment: await global.utils.getStreamFromURL(marinaProfilePic)
			});
			
			// Log to console
			console.log("🌸 Marina's Bot Config Reloaded Successfully");
			
		} catch (error) {
			console.error("❌ Config reload error:", error);
			
			await message.reply({
				body: `🌺 ─── RELOAD FAILED ─── 🌺
				
${getLang("error")}

🔧 Error: ${error.message}
💕 Please check the console for details!`,
				attachment: await global.utils.getStreamFromURL(marinaProfilePic)
			});
		}
	}
};
