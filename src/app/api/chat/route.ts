import { NextResponse } from "next/server";
import { PERSONAL_INFO, PROJECTS_DATA, HACKATHONS_DATA, SKILLS_DATA, CERTIFICATES_DATA } from "@/data/portfolioData";

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const query = message.toLowerCase().trim();

    // Knowledge base for Aarush Singh
    let responseText = "";

    if (query.includes("who is") || query.includes("about") || query.includes("introduce") || query.includes("bio")) {
      responseText = `I'm Aarush Singh, a B.Tech student specializing in Artificial Intelligence & Data Science at CGC University Mohali. I build scalable full-stack web platforms, edge computing systems, and cryptographic security backends. I've built projects like nimoCode, RockinRoll, BodhAI, and EvidenceLedger, and I love competing in intense 24-hour hackathons!`;
    } else if (query.includes("nimocode") || query.includes("nimo code")) {
      responseText = `**nimoCode Platform** is an edge infrastructure project built during the CypherVerse Hackathon (24-hour sprint). It provides automated public subdomain provisioning and DNS routing over Cloudflare Workers with sub-2-second propagation speeds. You can check it out live at [nimocode.vercel.app](https://nimocode.vercel.app/) or view the code on [GitHub](https://github.com/aarush0008x/nimoCode)!`;
    } else if (query.includes("rockinroll") || query.includes("music") || query.includes("audio")) {
      responseText = `**RockinRoll** is an interactive full-stack media and entertainment web platform with seamless playback controls, fluid audio visuals, and performant state management. It is deployed and running live on its production domain at [rockinroll.in](https://rockinroll.in)!`;
    } else if (query.includes("bodhai") || query.includes("bodh")) {
      responseText = `**BodhAI** is a cross-platform AI assistant and terminal companion featuring Cloudflare Workers AI edge routing (sub-150ms inference), local Ollama fallback, and real-time web search synthesis. Source code & binaries are on [GitHub](https://github.com/aarush0008x/BodhAI)!`;
    } else if (query.includes("evidenceledger") || query.includes("evidence") || query.includes("forensic") || query.includes("nist")) {
      responseText = `**EvidenceLedger** is an enterprise digital forensics backend enforcing strict NIST SP 800-88 sanitization policies, SHA-256 cryptographic hash-chained audit logging, raw disk file carving algorithms, and 100% automated test coverage (25/25 Pytest passed). Check it on [GitHub](https://github.com/aarush0008x/EvidenceLedger)!`;
    } else if (query.includes("smartdrobe") || query.includes("fashion") || query.includes("wardrobe")) {
      responseText = `**SmartDrobe** is an AI fashion assistant that catalogs apparel via computer vision, classifies color aesthetics, and generates weather-aware outfit combinations. Test it live at [smartdrobe-rho.vercel.app](https://smartdrobe-rho.vercel.app/)!`;
    } else if (query.includes("hackathon") || query.includes("cypherverse") || query.includes("hacknwin") || query.includes("arogya")) {
      responseText = `Aarush has competed in two major 24-hour national hackathons:\n1. **CypherVerse Hackathon (24-Hr Sprint)**: Built **nimoCode**, an automated DNS routing and subdomain platform.\n2. **HackNWin 3.0 (24-Hr Sprint)**: Built **Arogya AI**, an AI healthcare assistant deployed live at [arogya-bice.vercel.app](https://arogya-bice.vercel.app/).`;
    } else if (query.includes("skill") || query.includes("stack") || query.includes("technolog") || query.includes("language")) {
      responseText = `Here is a summary of Aarush's technical stack:\n- **Languages**: Python, C++, C, Java, HTML, CSS, JavaScript, TypeScript, SQL\n- **Design & Media**: UI/UX Design, Poster Making, Graphic Design, AI Prompt Engineering, Reels Creation\n- **Tools & Ecosystem**: VS Code, Git, GitHub, Canva, Ollama, Antigravity, Cloudflare Workers, Vercel\n- **Core Concepts**: Data Structures & Algorithms (DSA), Logic Building, Java OOP, In-Depth React & HTML/CSS`;
    } else if (query.includes("certificate") || query.includes("award") || query.includes("certif")) {
      responseText = `Aarush holds 2025 verified certifications in:\n- Basics in Python Programming\n- Introduction to Generative AI\n- Essentials English (Professional Communication)\n- AI Prompt Engineering (Applied Intelligence & LLMs)`;
    } else if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("message") || query.includes("reach")) {
      responseText = `You can get in touch with Aarush directly through the **Contact Section** on this website (with instant real-time delivery via Brevo), or email him directly at **[aarush0008x@gmail.com](mailto:aarush0008x@gmail.com)**. Connect on LinkedIn: [linkedin.com/in/aarush-singh-4b3a20358](https://www.linkedin.com/in/aarush-singh-4b3a20358/).`;
    } else if (query.includes("resume") || query.includes("cv")) {
      responseText = `You can view Aarush's full resume in-browser by clicking the **"View Resume"** button on the top navigation, visit [/resume](/resume), or download the PDF directly: [Aarush_Singh_Resume.pdf](/Aarush_Singh_Resume.pdf).`;
    } else if (query.includes("college") || query.includes("university") || query.includes("cgc") || query.includes("education")) {
      responseText = `Aarush is pursuing his **B.Tech in Artificial Intelligence & Data Science** at **CGC University (Chandigarh College of Engineering / CCE)** in Mohali, Punjab, India.`;
    } else {
      responseText = `Thanks for asking! I'm Aarush's AI Assistant. I can tell you all about his projects (**nimoCode**, **RockinRoll**, **EvidenceLedger**, **BodhAI**, **SmartDrobe**), his **24-hour hackathons**, his **technical skills & 2025 certificates**, or help you get in touch directly at **aarush0008x@gmail.com**. What would you like to know?`;
    }

    return NextResponse.json({
      reply: responseText,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
