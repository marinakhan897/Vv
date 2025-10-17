if (!global.client.busyList)
	global.client.busyList = {};

module.exports = {
	config: {
		name: "busy",
		version: "2.0",
		author: "Marina",
		countDown: 5,
		role: 0,
		description: {
			en: "Set your busy mode with Marina's style"
		},
		category: "utility",
		guide: {
			en: "   {pn} - Turn on busy mode"
				+ "\n   {pn} <reason> - Turn on with reason"
				+ "\n   {pn} off - Turn off busy mode"
		}
	},

	langs: {
		en: {
			turnedOff: "🌸 | Busy mode turned off successfully!",
			turnedOn: "💫 | Busy mode activated by Marina",
			turnedOnWithReason: "🌊 | Busy mode activated with reason: %1",
			turnedOnWithoutReason: "🎀 | Busy mode is now active",
			alreadyOn: "✨ %1 is currently busy",
			alreadyOnWithReason: "💕 %1 is currently busy: %2"
		}
	},

	onStart: async function ({ args, message, event, getLang, usersData, api }) {
		const { senderID } = event;
		
		// Marina's fixed profile picture
		const marinaProfilePic = "https://graph.facebook.com/61577638905771/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

		if (args[0] == "off") {
			const { data } = await usersData.get(senderID);
			delete data.busy;
			await usersData.set(senderID, data, "data");
			
			return message.reply({
				body: getLang("turnedOff"),
				attachment: await global.utils.getStreamFromURL(marinaProfilePic)
			});
		}

		const reason = args.join(" ") || "";
		await usersData.set(senderID, reason, "data.busy");
		
		const replyBody = reason ? 
			getLang("turnedOnWithReason", reason) : 
			getLang("turnedOnWithoutReason");
			
		return message.reply({
			body: replyBody,
			attachment: await global.utils.getStreamFromURL(marinaProfilePic)
		});
	},

	onChat: async ({ event, message, getLang, api }) => {
		const { mentions } = event;

		if (!mentions || Object.keys(mentions).length == 0)
			return;
			
		const arrayMentions = Object.keys(mentions);
		const marinaProfilePic = "https://graph.facebook.com/61577638905771/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

		for (const userID of arrayMentions) {
			const reasonBusy = global.db.allUserData.find(item => item.userID == userID)?.data.busy || false;
			if (reasonBusy !== false) {
				return message.reply({
					body: reasonBusy ?
						getLang("alreadyOnWithReason", mentions[userID].replace("@", ""), reasonBusy) :
						getLang("alreadyOn", mentions[userID].replace("@", "")),
					attachment: await global.utils.getStreamFromURL(marinaProfilePic)
				});
			}
		}
	}
};
