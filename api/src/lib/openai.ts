import OpenAI from "openai";
import { CONFIG } from "../config/env";

const openai = new OpenAI({
  apiKey: CONFIG.OPENAI_API_KEY,
});

export { openai };
