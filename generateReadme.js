import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert ES module paths to CommonJS paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project details
const projectName = "GenieLamp";
const description =
  "GenieLamp is an AI-powered automation assistant designed for seamless interaction and productivity enhancement.";

// Detect technologies from package.json
const packageJsonPath = path.join(__dirname, "package.json");
let dependencies = {};
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
}

// Define tech badges based on dependencies
const techBadges = {
  react: "![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)",
  "react-router-dom": "![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)",
  vite: "![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)",
  tailwindcss: "![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)",
  mui: "![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)",
  "styled-components": "![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)",
  axios: "![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)",
  redux: "![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)",
};

// Generate badges based on detected dependencies
const usedBadges = Object.keys(dependencies)
  .filter((dep) => techBadges[dep])
  .map((dep) => techBadges[dep])
  .join(" ");

// Generate folder structure as a tree
function generateFolderTree(dir, prefix = "", isLast = true) {
  let structure = "";
  const files = fs.readdirSync(dir).filter((file) => file !== "node_modules" && file !== ".git");
  const lastIndex = files.length - 1;

  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const isLastItem = index === lastIndex;
    const connector = isLastItem ? "└── " : "├── ";
    const newPrefix = prefix + (isLast ? "    " : "│   ");

    if (stats.isDirectory()) {
      structure += `${prefix}${connector}📂 ${file}\n`;
      structure += generateFolderTree(filePath, newPrefix, isLastItem);
    } else {
      structure += `${prefix}${connector}📄 ${file}\n`;
    }
  });

  return structure;
}

const folderStructure = `📁 Project Root\n${generateFolderTree(__dirname)}`;

// README template
const readmeContent = `# ${projectName} 🚀  

${description}  

## 🌟 Features  
✅ AI-powered automation  
✅ Seamless user interaction  
✅ Highly scalable architecture  
✅ Modern UI/UX design  

---

## 📌 Technologies Used  

${usedBadges || "No technologies detected"}  

---

## 📂 Folder Structure  

\`\`\`
${folderStructure}
\`\`\`

---

## 📦 Installation  

1️⃣ **Clone the repository:**  
   \`\`\`bash
   git clone https://github.com/Abdallahosama55/GenieLamp.git
   cd GenieLamp
   \`\`\`

2️⃣ **Install dependencies:**  
   \`\`\`bash
   npm install
   \`\`\`

3️⃣ **Run the project:**  
   \`\`\`bash
   npm run dev
   \`\`\`

---

## ⚙️ Usage  

- Start the app using \`npm run dev\`.  
- Navigate to \`http://localhost:3000\` to see it in action.  
- Modify components inside \`src/\` for customization.  

---

## 🤝 Contribution  

🔹 Fork the repo and create a new branch  
🔹 Make changes and submit a PR  
🔹 Report bugs and suggest features via Issues  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

🚀 **Developed with ❤️ by Abdallah Osama**  
`;

fs.writeFileSync("README.md", readmeContent, "utf8");

console.log("✅ README.md has been generated successfully!");
