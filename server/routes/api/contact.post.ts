import { defineHandler, useRuntimeConfig } from "nitro";
import { createError, readBody } from "nitro/h3";

const recipient = "gerber.rika@outlook.com";

export default defineHandler(async (event) => {
  const body = await readBody<{ name?: string; email?: string; message?: string }>(event);
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: "Please provide a valid email address." });
  }

  const config = useRuntimeConfig();
  if (!config.resendApiKey || !config.resendFromEmail) {
    throw createError({ statusCode: 503, statusMessage: "Email delivery is not configured yet." });
  }

  const submittedAt = new Date().toISOString();
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.resendFromEmail,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `New portfolio enquiry\n\nName: ${name}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    throw createError({ statusCode: 502, statusMessage: "The enquiry could not be sent. Please try again." });
  }

  return { ok: true };
});
