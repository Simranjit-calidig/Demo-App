import {AI_MODEL_CONFIG_PROMPT} from '@constants/enum';
import {GROK_CHAT} from './endpoint';
import {GROK_API_KEY} from 'src/secrets';

export const grokTextGenAiModel = async prompt => {
  try {
    const response = await fetch(GROK_CHAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROK_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: AI_MODEL_CONFIG_PROMPT,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        model: 'grok-beta',
        stream: false,
        temperature: 0,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('API_GROK_TEXT_Error', err);
    throw err;
  }
};
