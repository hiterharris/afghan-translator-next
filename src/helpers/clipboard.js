import { Clipboard } from '@capacitor/clipboard';

const writeToClipboard = async (text) => {
  await Clipboard.write({
    string: text
  });
};

const checkClipboard = async () => {
  const { type, value } = await Clipboard.read();

  console.log(`Got ${type} from clipboard: ${value}`);
};

export { writeToClipboard, checkClipboard };