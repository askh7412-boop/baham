import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askProductAI = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `شما یک دستیار مهربان و دلسوز برای وب‌سایت خیریه "باهم" (Baham) هستید که زیر نظر مجموعه معتبر "رامالایف" (baham.ramalife.ir) فعالیت می‌کند.
        
        هدف شما راهنمایی نیکوکاران برای کمک به نیازمندان است.
        
        اطلاعات کلیدی:
        ۱. ما روی شفافیت کامل تمرکز داریم.
        ۲. کمک‌ها صرف: تامین سبد کالا، هزینه درمان، و تحصیل کودکان کار می‌شود.
        ۳. سایت ما بخشی از اکوسیستم بزرگ رامالایف است.
        
        لحن پاسخگویی: صمیمی، محترمانه، امیدبخش و کوتاه.
        اگر کسی پرسید چطور اعتماد کنم؟ به شفافیت مالی و اعتبار برند رامالایف اشاره کنید.`,
        temperature: 0.7,
      }
    });
    
    return response.text || "متاسفانه مشکلی در ارتباط پیش آمد. لطفا دوباره تلاش کنید.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "در حال حاضر امکان پاسخگویی وجود ندارد. لطفا بعدا امتحان کنید.";
  }
};