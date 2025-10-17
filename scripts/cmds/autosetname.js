function checkShortCut(nickname, uid, userName) {
	/\{userName\}/gi.test(nickname) ? nickname = nickname.replace(/\{userName\}/gi, userName) : null;
	/\{userID\}/gi.test(uid) ? nickname = nickname.replace(/\{userID\}/gi, uid) : null;
	return nickname;
}

module.exports = {
	config: {
		name: "autosetname",
		version: "2.0",
		author: "Marina",
		cooldowns: 5,
		role: 1,
		description: {
			en: "Automatically set nicknames for new members with Marina's style"
		},
		category: "box chat",
		guide: {
			en: '   {pn} set <nickname> - Set auto nickname format\n' +
				'   Available shortcuts:\n' +
				'   • {userName} - Member name\n' +
				'   • {userID} - Member ID\n' +
				'   Example:\n' +
				'    {pn} set {userName} 🌸\n\n' +
				'   {pn} on/off - Turn feature on/off\n' +
				'   {pn} view - Show current settings'
		}
	},

	langs: {
		en: {
			missingConfig: "🌸 Please enter the nickname format",
			configSuccess: "💫 Nickname format set successfully!",
			currentConfig: `🌺 Current Auto Nickname Settings:
%1`,
			notSetConfig: "🌊 No nickname format set yet",
			syntaxError: "🎀 Use: {pn} on/off",
			turnOnSuccess: "✨ Auto nickname feature activated",
			turnOffSuccess: "💕 Auto nickname feature deactivated",
			error: "❌ Error occurred, please try again later"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang, api }) {
		const marinaProfilePic = "https://graph.facebook.com/61577638905771/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

		const sendMessageWithPic = async (body) => {
			return message.reply({
				body,
				attachment: await global.utils.getStreamFromURL(marinaProfilePic)
			});
		};

		switch (args[0]) {
			case "set":
			case "add":
			case "config": {
				if (args.length < 2)
					return sendMessageWithPic(getLang("missingConfig"));
				const configAutoSetName = args.slice(1).join(" ");
				await threadsData.set(event.threadID, configAutoSetName, "data.autoSetName");
				return sendMessageWithPic(getLang("configSuccess"));
			}
			case "view":
			case "info": {
				const configAutoSetName = await threadsData.get(event.threadID, "data.autoSetName");
				const body = configAutoSetName ? 
					getLang("currentConfig", configAutoSetName) : 
					getLang("notSetConfig");
				return sendMessageWithPic(body);
			}
			default: {
				const enableOrDisable = args[0];
				if (enableOrDisable !== "on" && enableOrDisable !== "off")
					return sendMessageWithPic(getLang("syntaxError"));
				
				await threadsData.set(event.threadID, enableOrDisable === "on", "settings.enableAutoSetName");
				const body = enableOrDisable == "on" ? 
					getLang("turnOnSuccess") : 
					getLang("turnOffSuccess");
				return sendMessageWithPic(body);
			}
		}
	},

	onEvent: async ({ message, event, api, threadsData, getLang }) => {
		if (event.logMessageType !== "log:subscribe")
			return;
		if (!await threadsData.get(event.threadID, "settings.enableAutoSetName"))
			return;
		const configAutoSetName = await threadsData.get(event.threadID, "data.autoSetName");

		return async function () {
			const addedParticipants = [...event.logMessageData.addedParticipants];

			for (const user of addedParticipants) {
				const { userFbId: uid, fullName: userName } = user;
				try {
					await api.changeNickname(checkShortCut(configAutoSetName, uid, userName), event.threadID, uid);
				}
				catch (e) {
					return message.reply(getLang("error"));
				}
			}
		};
	}
};
