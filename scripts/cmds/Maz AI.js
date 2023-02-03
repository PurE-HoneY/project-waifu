const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


module.exports = {
	config: {
		name: "ai",
		version: "2.0",
		author: "waifu",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "OpenAI- Can answer any questions"
		},
		longDescription: {
			vi: "",
			en: "can answer any question"
		},
		category: "",
		guide: "{pn} <your question>",
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {

let completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: args.join(" "),
  temperature: 0.7,
  max_tokens: 974,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
   })
  //console.log(completion.data)
message.reply(completion.data.choices[0].text);
  
}
  }