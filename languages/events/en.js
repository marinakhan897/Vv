module.exports = {
	// 🌸 Marina's Bot Events Language
	// 💫 Beautiful event messages and notifications
	
	autoUpdateThreadInfo: {},
	
	checkwarn: {
		text: {
			warn: "🚫 Member %1 has been banned\n👤 Name: %1\n🔢 UID: %2\n💫 Unban with: \"%3warn unban %2\"",
			needPermission: "👑 Bot needs admin permissions to kick members"
		}
	},
	
	leave: {
		text: {
			session1: "🌅 morning",
			session2: "☀️ noon", 
			session3: "🌇 afternoon",
			session4: "🌙 evening",
			leaveType1: "left the group 👋",
			leaveType2: "was removed from the group 🚪"
		}
	},
	
	logsbot: {
		text: {
			title: "📊 ─── BOT ACTIVITY LOGS ─── 📊",
			added: "\n🌸 BOT ADDED TO NEW GROUP\n💫 Added by: %1",
			kicked: "\n❌ BOT REMOVED FROM GROUP\n💔 Removed by: %1",
			footer: "\n👤 User ID: %1\n💬 Group: %2\n🔢 Group ID: %3\n⏰ Time: %4\n────────────────────"
		}
	},
	
	onEvent: {},
	
	welcome: {
		text: {
			session1: "🌅 morning",
			session2: "☀️ noon",
			session3: "🌇 afternoon", 
			session4: "🌙 evening",
			welcomeMessage: `🌸 ─── WELCOME TO MARINA'S BOT ─── 🌸

💫 Thank you for adding me to your group!
🔤 Bot Prefix: %1
📖 View commands: %1help
🎀 Need help? Contact Marina!

💕 Enjoy your stay! ✨`,
			multiple1: "you",
			multiple2: "you all"
		}
	},

	// 🌊 Marina's Custom Events
	marinaWelcome: {
		text: {
			newMember: `🎉 ─── WELCOME NEW MEMBER ─── 🎉

🌸 Hello {userName}! Welcome to {boxName}!
💫 We're excited to have you here {multiple}
🎀 Feel free to explore and enjoy!

⏰ Session: {session}
👑 Added by: %1
💕 Marina's Bot is here to help!`,
			botAdded: `💫 ─── MARINA'S BOT ACTIVATED ─── 💫

🌸 Hello everyone! I'm Marina's Assistant
🎀 Your elegant AI companion
📖 Use %1help to see my features
👑 Need help? Contact Marina!

💕 Let's make this group amazing! ✨`
		}
	},

	marinaGoodbye: {
		text: {
			memberLeft: `👋 ─── FAREWELL ─── 👋

💔 Goodbye {userName}!
🌊 {type} from {boxName}
🎀 We'll miss you!

⏰ Session: {session}
💫 Take care and see you again!`,
			memberRemoved: `🚪 ─── MEMBER REMOVED ─── 🚪

👋 {userName} was removed
💬 From: {boxName}
🎀 Reason: Administrative action

⏰ Session: {session}`
		}
	},

	marinaNotifications: {
		text: {
			groupUpdate: `⚡ ─── GROUP UPDATED ─── ⚡

🌸 Group changes detected:
💬 Name: %1
👥 Members: %2
🔄 Updated by: %3
⏰ Time: %4`,
			
			botActivity: `🤖 ─── BOT ACTIVITY ─── 🤖

💫 Marina's Bot Status:
✅ Online and active
🎀 Serving %1 groups
👥 Helping %2 users
🌊 Version: 2.0 Stable`
		}
	},

	marinaErrors: {
		text: {
			commandError: `❌ ─── COMMAND ERROR ─── ❌

💔 Error in command: %1
🔧 Issue: %2
💫 Please try again later
🎀 Contact Marina if issue persists`,
			
			permissionError: `👑 ─── PERMISSION NEEDED ─── 👑

❌ Action requires admin permissions
💫 Please make Marina's Bot admin
🎀 Required for: %1`,
			
			apiError: `🌐 ─── SERVICE UNAVAILABLE ─── 🌐

💔 External service error: %1
💫 Please try again later
🎀 Marina's Bot will auto-recover`
		}
	},

	marinaSuccess: {
		text: {
			actionCompleted: `✅ ─── ACTION COMPLETED ─── ✅

🌸 Success: %1
💫 Result: %2
🎀 Time: %3
🌊 Marina's Bot - Always reliable!`,
			
			settingUpdated: `⚙️ ─── SETTINGS UPDATED ─── ⚙️

✅ Configuration saved: %1
💫 New value: %2
🎀 Applied to: %3
🌊 Changes take effect immediately`
		}
	}
};
