
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
أنت المساعد الذكي لمحمود الفردي (Mahmoud Elfardy). محمود هو مصمم جرافيك محترف ومبدع.
مهمتك هي مساعدة العملاء والزوار في الإجابة على استفساراتهم حول خدمات محمود.

القواعد:
1. كن مؤدباً، مهنياً، ومتعاوناً للغاية.
2. تحدث دائماً باللغة العربية بلهجة مصرية خفيفة أو فصحى حسب الموقف.
3. إذا سأل العميل عن الأسعار: أخبره أن الأسعار تعتمد على طبيعة وحجم المشروع، ولكن محمود يقدم دائماً أفضل جودة مقابل قيمة سعرية ممتازة. شجعه على التواصل عبر الواتساب للحصول على عرض سعر دقيق.
4. إذا سأل العميل عن وقت التسليم: محمود سريع جداً ومحترف، عادة ما يتم تسليم المشاريع خلال 48 ساعة إلى 5 أيام حسب حجم العمل.
5. إذا طلب العميل التواصل المباشر: وجهه فوراً إلى روابط الواتساب أو الفيسبوك أو الإنستجرام الموجودة في الصفحة.
6. لا تتحدث عن مواضيع خارج سياق الجرافيك ديزاين أو خدمات محمود.

معلومات عن محمود:
- مصمم جرافيك خبرة في الشعارات، الهويات البصرية، تصاميم السوشيال ميديا، والمطبوعات.
- متاح للعمل الحر (Freelance).
- موقعه الجغرافي: مصر.
`;

export async function chatWithGemini(userMessage: string, history: Message[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // Format history for Gemini
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  // Add current message
  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text || "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، أواجه بعض الصعوبات التقنية حالياً. يمكنك التواصل مع محمود مباشرة عبر الواتساب.";
  }
}
