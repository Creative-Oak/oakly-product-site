import { FreshContext } from "$fresh/server.ts";

const MAILERLITE_API_KEY = Deno.env.get("MAILERLITE_API_KEY");
const MAILERLITE_GROUP_ID = Deno.env.get("MAILERLITE_GROUP_ID");


export const handler = async (req: Request, _ctx: FreshContext): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    console.error("Missing MailerLite configuration:", {
      hasApiKey: !!MAILERLITE_API_KEY,
      hasGroupId: !!MAILERLITE_GROUP_ID
    });
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Attempting to subscribe with:", {
      email,
      groupId: MAILERLITE_GROUP_ID,
      apiKeyLength: MAILERLITE_API_KEY.length
    });

    // Add subscriber directly to the group using the documented endpoint
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
        },
        body: JSON.stringify({
          email,
          fields: {},
          resubscribe: true, // Allow resubscribing if email was previously unsubscribed
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("MailerLite API error:", {
        status: response.status,
        statusText: response.statusText,
        errorData,
        groupId: MAILERLITE_GROUP_ID
      });
      throw new Error(errorData.message || "Failed to subscribe");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Failed to process subscription"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}; 