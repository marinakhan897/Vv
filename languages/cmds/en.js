module.exports = {
	// 🌸 Marina's Bot Commands Language
	// 💫 Beautiful and elegant command descriptions
	
	onlyadminbox: {
		description: "🌸 Turn on/off admin-only mode for group",
		guide: "   {pn} [on | off]",
		text: {
			turnedOn: "✅ Only group admins can now use Marina's Bot",
			turnedOff: "✅ All members can now use Marina's Bot",
			syntaxError: "❌ Use: {pn} on or {pn} off"
		}
	},

	adduser: {
		description: "🌸 Add users to your group chat",
		guide: "   {pn} [profile link | uid]",
		text: {
			alreadyInGroup: "⚠️ Already in group",
			successAdd: "✅ Added %1 members successfully",
			failedAdd: "❌ Failed to add %1 members",
			approve: "⏳ Added %1 members to approval list",
			invalidLink: "❌ Please enter valid Facebook link",
			cannotGetUid: "❌ Cannot get user ID",
			linkNotExist: "❌ Profile URL doesn't exist",
			cannotAddUser: "❌ User blocked stranger adds"
		}
	},

	admin: {
		description: "👑 Manage admin roles",
		guide: "   {pn} [add | -a] <uid>: Add admin\n   {pn} [remove | -r] <uid>: Remove admin\n   {pn} [list | -l]: List admins",
		text: {
			added: "✅ Added admin role for %1 users:\n%2",
			alreadyAdmin: "⚠️ %1 users already admin:\n%2",
			missingIdAdd: "❌ Enter user ID/tag to add admin",
			removed: "✅ Removed admin role from %1 users:\n%2",
			notAdmin: "⚠️ %1 users not admin:\n%2",
			missingIdRemove: "❌ Enter user ID/tag to remove admin",
			listAdmin: "👑 Admin List:\n%1"
		}
	},

	adminonly: {
		description: "👑 Toggle admin-only bot usage",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "✅ Only Marina can use bot commands",
			turnedOff: "✅ All users can use bot commands",
			syntaxError: "❌ Use: {pn} on or {pn} off"
		}
	},

	all: {
		description: "🌸 Tag all group members",
		guide: "{pn} [message | empty]"
	},

	anime: {
		description: "🎨 Random anime images",
		guide: "{pn} <endpoint>\n   Endpoints: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "🖼️ Loading image...",
			error: "❌ Error loading image"
		}
	},

	antichangeinfobox: {
		description: "🛡️ Protect group settings",
		guide: "   {pn} avt [on|off]: Anti avatar change\n   {pn} name [on|off]: Anti name change\n   {pn} theme [on|off]: Anti theme change\n   {pn} emoji [on|off]: Anti emoji change",
		text: {
			antiChangeAvatarOn: "✅ Anti avatar change enabled",
			antiChangeAvatarOff: "✅ Anti avatar change disabled",
			missingAvt: "❌ No avatar set for group",
			antiChangeNameOn: "✅ Anti name change enabled",
			antiChangeNameOff: "✅ Anti name change disabled",
			antiChangeThemeOn: "✅ Anti theme change enabled",
			antiChangeThemeOff: "✅ Anti theme change disabled",
			antiChangeEmojiOn: "✅ Anti emoji change enabled",
			antiChangeEmojiOff: "✅ Anti emoji change disabled"
		}
	},

	appstore: {
		description: "📱 Search App Store apps",
		text: {
			missingKeyword: "❌ Enter search keyword",
			noResult: "❌ No results for: %1"
		}
	},

	autosetname: {
		description: "🏷️ Auto nickname for new members",
		guide: "   {pn} set <nickname>\n   Shortcuts: {userName}, {userID}\n   Example: {pn} set {userName} 🌸",
		text: {
			missingConfig: "❌ Enter nickname format",
			configSuccess: "✅ Nickname format set",
			currentConfig: "📝 Current auto nickname:\n%1",
			notSetConfig: "❌ No auto nickname set",
			syntaxError: "❌ Use: {pn} on/off",
			turnOnSuccess: "✅ Auto nickname enabled",
			turnOffSuccess: "✅ Auto nickname disabled",
			error: "❌ Error - Try disabling invite links"
		}
	},

	avatar: {
		description: "🎨 Create anime avatar",
		guide: "{pn} <character> | <text> | <signature> | <color>\n{pn} help: View usage",
		text: {
			initImage: "🎨 Creating avatar...",
			invalidCharacter: "❌ Only %1 characters available",
			notFoundCharacter: "❌ Character '%1' not found",
			errorGetCharacter: "❌ Error getting character:\n%1: %2",
			success: "✅ Your Avatar\nCharacter: %1\nID: %2\nText: %3\nSignature: %4\nColor: %5",
			defaultColor: "default",
			error: "❌ Error\n%1: %2"
		}
	},

	badwords: {
		description: "🚫 Manage banned words",
		guide: "   {pn} add <words>: Add banned words\n   {pn} delete <words>: Remove words\n   {pn} list: View list\n   {pn} unwarn <user>: Remove warning\n   {pn} on/off: Toggle feature",
		text: {
			onlyAdmin: "👑 Only admins can manage banned words",
			missingWords: "❌ Enter words to add",
			addedSuccess: "✅ Added %1 banned words",
			alreadyExist: "❌ %1 words already exist: %2",
			tooShort: "⚠️ %1 words too short: %2",
			deletedSuccess: "✅ Deleted %1 banned words",
			notExist: "❌ %1 words not found: %2",
			emptyList: "📝 No banned words set",
			badWordsList: "📑 Banned words: %1",
			turnedOnOrOff: "✅ Banned words %1",
			missingTarget: "❌ Enter user ID/tag",
			notWarned: "⚠️ User %1 not warned",
			removedWarn: "✅ Removed warning from %1",
			warned: "⚠️ Banned word detected: %1\nNext violation = kick",
			warned2: "🚫 Banned word: %1\n2 violations = kicked",
			needAdmin: "👑 Bot needs admin to kick",
			unwarned: "✅ Warning removed from %1"
		}
	},

	balance: {
		description: "💰 Check balance",
		guide: "   {pn}: Your balance\n   {pn} @tag: Their balance",
		text: {
			money: "💰 Your balance: %1$",
			moneyOf: "💰 %1's balance: %2$"
		}
	},

	batslap: {
		description: "🦇 Batslap image",
		text: {
			noTag: "❌ Tag someone to slap"
		}
	},

	busy: {
		description: "⏸️ Do not disturb mode",
		guide: "   {pn} [reason]: Enable busy mode\n   {pn} off: Disable busy mode",
		text: {
			turnedOff: "✅ Busy mode disabled",
			turnedOn: "✅ Busy mode enabled",
			turnedOnWithReason: "✅ Busy mode: %1",
			alreadyOn: "⏸️ %1 is currently busy",
			alreadyOnWithReason: "⏸️ %1 is busy: %2"
		}
	},

	callad: {
		description: "📞 Contact Marina",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "❌ Enter message for Marina",
			sendByGroup: "\n- From group: %1\n- ID: %2",
			sendByUser: "\n- From user",
			content: "\n\nMessage:\n─────────────────\n%1\n─────────────────\nReply to respond",
			success: "✅ Message sent to Marina!",
			reply: "📍 Reply from Marina %1:\n─────────────────\n%2\n─────────────────\nReply to continue",
			replySuccess: "✅ Reply sent!",
			feedback: "📝 Feedback from %1:\n- ID: %2%3\n\nContent:\n─────────────────\n%4\n─────────────────\nReply to respond",
			replyUserSuccess: "✅ Reply sent to user!"
		}
	},

	help: {
		description: "🌸 View command help",
		guide: "{pn} [page | command]",
		text: {
			help: `🌸 ─── { %2/%3 } ─── 🌸
%1
├─────────────────
│ 📖 Page: %2/%3
│ 🎯 Total: %4 commands
│ 💡 Use: %5help <command>
│ 🌟 Marina's Bot
╰─────────────────`,
			help2: `🌺 ─── COMMANDS ─── 🌺
%1
├─────────────────
│ 🎯 Total: %2 commands
│ 💡 Use: %3help <command>
│ 🌟 Marina's Assistant
╰─────────────────`,
			commandNotFound: "❌ Command \"%1\" not found",
			getInfoCommand: `💕 ─── %1 ─── 💕
📖 Description: %2
🔤 Aliases: %3
🏷️ Group Aliases: %4
🔄 Version: %5
👑 Role: %6
⏱️ Cooldown: %7s
👩‍💻 Author: %8

💫 USAGE:
%9

📝 Notes:
• Content inside < > can be changed
• Content inside [a|b|c] means a or b or c`,
			doNotHave: "None",
			roleText0: "0 (Everyone)",
			roleText1: "1 (Group admins)",
			roleText2: "2 (Marina only)",
			pageNotFound: "❌ Page %1 not found"
		}
	},

	prefix: {
		description: "🔤 Change bot prefix",
		guide: "   {pn} <prefix>: Change group prefix\n   {pn} <prefix> -g: Change system prefix (Marina only)\n   {pn} reset: Reset to default",
		text: {
			reset: "🌸 Prefix reset to: %1",
			onlyAdmin: "👑 Only Marina can change system prefix",
			confirmGlobal: "💫 React to confirm system prefix change",
			confirmThisThread: "💫 React to confirm group prefix change",
			successGlobal: "✅ System prefix: %1",
			successThisThread: "✅ Group prefix: %1",
			myPrefix: `🌺 ─── PREFIX INFO ─── 🌺
🌐 System: %1
💕 Your Group: %2
			
💡 Tip: Type "prefix" anytime!`
		}
	},

	rank: {
		description: "📊 View user levels"
	},

	rankup: {
		description: "🎉 Level up notifications",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "❌ Use: {pn} on/off",
			turnedOn: "✅ Level notifications on",
			turnedOff: "✅ Level notifications off",
			notiMessage: "🎉 Congratulations! Level %1 reached! 🌸"
		}
	},

	weather: {
		description: "🌤️ Weather forecast",
		guide: "{pn} <location>",
		text: {
			syntaxError: "❌ Enter location",
			notFound: "❌ Location not found: %1",
			error: "❌ Error: %1",
			today: "🌤️ Today's Weather:\n%1\n🌡️ Temp: %2°C - %3°C\n🌡️ Feels: %4°C - %5°C\n🌅 Sunrise: %6\n🌄 Sunset: %7\n🌙 Moon: %8 - %9\n☀️ Day: %10\n🌙 Night: %11"
		}
	},

	// 🌸 Marina's Special Commands
	marina: {
		description: "🌸 About Marina's Bot",
		guide: "{pn}",
		text: {
			info: `🌸 ─── MARINA'S BOT ─── 🌸
			
💫 Elegant AI Assistant
🌊 Version: 2.0 Stable
🎀 Created with love by Marina
✨ Always here to serve you!

💕 Facebook: https://www.facebook.com/61577638905771
🌺 Thank you for using Marina's Bot!`
		}
	},

	goibot: {
		description: "💬 Auto-reply system",
		text: {
			response: `🌺 ─── MARINA'S REPLY ─── 🌺

💕 Hello darling! How can I help you today?

🌸 User: %1
💫 Bot: Marina's Assistant
🎀 Always here to serve you!`
		}
	}
};
