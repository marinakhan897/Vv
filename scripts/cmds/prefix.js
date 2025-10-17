const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "2.0",
		author: "Marina",
		countDown: 5,
		role: 0,
		description: "Change bot command prefix for your chat or entire system",
		category: "config",
		guide: {
			en: "   {pn} <new prefix> - Change prefix for your chat"
				+ "\n   Example:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g - Change system prefix (admin only)"
				+ "\n   Example:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset - Reset your chat prefix to default"
		}
	},

	langs: {
		en: {
			reset: "🌸 Your prefix has been reset to default: %1",
			onlyAdmin: "🌺 Sorry Marina, only admin can change system prefix",
			confirmGlobal: "💫 Please react to this message to confirm changing system prefix",
			confirmThisThread: "🌊 Please react to this message to confirm changing prefix in this chat",
			successGlobal: "✨ System prefix changed to: %1",
			successThisThread: "🎀 Chat prefix changed to: %1",
			myPrefix: `🌺 ─── PREFIX INFO ─── 🌺
🌐 System Prefix: %1
💕 Your Chat Prefix: %2
			
💡 Tip: Just type "prefix" to see this info anytime!`
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g") {
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		}
		else {
			formSet.setGlobal = false;
		}

		return message.reply(
			formSet.setGlobal ? getLang("confirmGlobal") : getLang("confirmThisThread"), 
			(err, info) => {
				formSet.messageID = info.messageID;
				global.GoatBot.onReaction.set(info.messageID, formSet);
			}
		);
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix") {
			return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
		}
	}
};
