import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";

const DISCORD_WEB_HOOK = process.env.DISCORD_WEB_HOOK || "";


export async function POST(req: NextRequest) {
  const { name, email, message, subject, phone } = await req.json();

  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    username: "Contact Alert Bot",
    content: `** AQM Parts Contact Form Alert ${date} :exclamation: ** 
    **Email**: ${email}
    **Phone[Optional]**: ${phone}
    **Subject**: ${subject}
    **Message**: ${message}
      `,
    embeds: [
      {
        title: `${name} left AQM Parts a message.`,
        description: `A contact form was submitted with email ** ${email} **. `,
        color: 1795225,
        fields: [
          {
            name: `Email`,
            value: email,
          },
          {
            name: `Phone [Optional]`,
            value: phone?.length > 0 ? phone : "Not provided",
          },
          {
            name: `Subject`,
            value: subject,
          },
          {
            name: `Message`,
            value: message,
          },
          {
            name: `Instructions`,
            value: `Please respond to this email as soon as possible. Thank you!`,
          },
          {
            name: ``,
            value: ``,
          },
          {
            name: `Roles`,
            value: `<@ &1159316494551875625>`,
          },
        ],
        author: {
          name: `Contact Form Bot`,
        },
        footer: {
          text: `This message was generated on ${date} .`,
        },
        timestamp: DateTime.now().toISO(),
      },
    ],
    
    attachments: [],
  });

  const response = await fetch(DISCORD_WEB_HOOK, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  if (response.status === 204) {
    return NextResponse.json(
      { message: "Contact form submitted successfully." },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { message: "Contact form submission failed." },
      {
        status: 500,
      }
    );
  }
}
