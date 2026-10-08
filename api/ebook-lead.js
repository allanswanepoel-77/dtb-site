const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxm3-cX72y6TonpGulO5jI0fFUItREkQYX9nlkj2x1ymLhJcODHr-80RjA5Bdl0KfF5/exec";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const secret = process.env.DTB_API_SECRET;
  if (!secret) return res.status(503).json({ success: false, error: "Lead capture is not configured" });

  const { firstName, lastName, email } = req.body || {};
  if (
    typeof firstName !== "string" || !firstName.trim() || firstName.length > 100 ||
    typeof lastName !== "string" || !lastName.trim() || lastName.length > 100 ||
    typeof email !== "string" || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return res.status(400).json({ success: false, error: "Please enter a valid name and email address" });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let response;
    try {
      response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          secret,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
    if (!response.ok) throw new Error(`Apps Script HTTP ${response.status}`);
    const result = await response.json();
    if (result.success !== true) throw new Error("Apps Script rejected submission");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("eBook lead capture failed:", error.message);
    return res.status(502).json({ success: false, error: "We couldn't save your details. Please try again." });
  }
}
