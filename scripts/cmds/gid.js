module.exports = {
	config: {
		name: "gid",
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: "Xem threadID",
		longDescription: "Xem id nhóm chat của bạn",
		category: "group chat",
		guide: "{pn}"
	},

	onStart: async function ({ message, event }) {
		message.reply(event.threadID.toString());
	}
};
