const fetch = require("node-fetch");

exports.handler = async function () {

const DATABASE_ID = "31e2395f96aa80c2a09cfb88fb28b2be";

const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`,{

method:"POST",

headers:{
"Authorization":`Bearer ${process.env.NOTION_KEY}`,
"Notion-Version":"2022-06-28",
"Content-Type":"application/json"
}

});

const data = await response.json();

return{
statusCode:200,
body:JSON.stringify(data)
};

};

