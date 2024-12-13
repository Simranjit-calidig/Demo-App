// default displaying all data in one go
// const genAiModel = async userMsg => {
//   setisMsgLoading(true);

//   // const prompt = `I am using you as a chat bot for my application. So you have to answer user in shot messages don't replay whith to long messages so here is the user promot - ${userMsg}`;
//   const prompt = `You are a highly intelligent and adaptive AI chatbot. Provide concise answers to straightforward questions and detailed, well-structured explanations for complex or open-ended queries. Tailor your tone to be friendly and engaging, ensuring users feel understood and valued. Proactively offer suggestions or clarifications if the user seems uncertain, and maintain professionalism while being approachable. Stay accurate and context-aware, and always strive to make interactions feel personalized and helpful(Also don't use Markdown). So here is the user's prompt - ${userMsg}`;
//   try {
//     const result = await model.generateContent(prompt);
//     const aiMessage = {
//       _id: uuid(),
//       text: result.response.text(),
//       createdAt: new Date(),
//       user: {
//         _id: 2,
//         name: BOT_NAME,
//         avatar: BOT_IMG,
//       },
//     };
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, aiMessage),
//     );
//     setisMsgLoading(false);
//   } catch (err) {
//     setisMsgLoading(false);
//     console.log('API Error', err);
//   }
// };
