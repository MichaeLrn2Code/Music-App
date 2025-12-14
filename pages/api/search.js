import axios from "axios";

export default async function handler(req, res) {
  try {
    if (!req.query.term) {
      return res.status(400).json({ error: "Search term is required" });
    }
    const options = {
      method: "GET",
      url: "https://youtube-music-api3.p.rapidapi.com/search",
      params: {
        q: req.query.term,
        type: "song",
      },
      headers: {
        "x-rapidapi-host": "youtube-music-api3.p.rapidapi.com",
        // Prefer a server-only env var; fall back to NEXT_PUBLIC if present
        "x-rapidapi-key":
          process.env.RAPIDAPI_KEY || process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    const response = await axios.request(options);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Search API error:",
      error?.response?.data || error?.message || error
    );
    return res
      .status(500)
      .json({ error: "Search failed", details: error?.message || null });
  }
}
