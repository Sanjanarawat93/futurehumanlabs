const NOTION_TOKEN = "PASTE_YOUR_SECRET_TOKEN_HERE";
const DATABASE_ID = "31e2395f96aa80c2a09cfb88fb28b2be";

async function loadInsights() {
  const response = await fetch("https://api.notion.com/v1/databases/" + DATABASE_ID + "/query", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + NOTION_TOKEN,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  const container = document.getElementById("insights");

  container.innerHTML = "";

  data.results.forEach(page => {
    const title = page.properties.Title.title[0]?.plain_text || "Untitled";
    const category = page.properties.Category.select?.name || "";
    
    const card = document.createElement("div");
    card.className = "insight-card";

    card.innerHTML = `
      <h3>${title}</h3>
      <p>${category}</p>
    `;

    container.appendChild(card);
  });
}

loadInsights();
