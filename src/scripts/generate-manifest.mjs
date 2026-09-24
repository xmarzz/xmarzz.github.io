import fs from "fs" 
import path from "path" 
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const postsDir = path.join(__dirname, "..","..","public","articles");

const files = fs.readdirSync(postsDir).filter((f)=> f.endsWith(".md")); 

const slugs = files.map((f)=>f.replace(".md","")); 

fs.writeFileSync(
    path.join(postsDir, "manifest.json"), 
    JSON.stringify(slugs, null, 2) 
)





