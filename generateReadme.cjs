const fs = require("fs");
const path = require("path");

// Project details
const projectName = "GenieLamp";
const description = "GenieLamp is an advanced AI-powered assistant for seamless automation and user interaction.";

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
  .filter(dep => techBadges[dep])
  .map(dep => techBadges[dep])
  .join(" ");

// Generate folder structure recursively
function generateFolderStructure(dir, prefix = "") {
  let structure = "";
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      structure += `${prefix}- 📂 ${file}\n`;
      structure += generateFolderStructure(filePath, `${prefix}  `);
    } else {
      structure += `${prefix}- 📄 ${file}\n`;
    }
  });
  return structure;
}

const folderStructure = generateFolderStructure(__dirname);

// README template
const readmeContent = `# ${projectName}

${description}

## 🚀 Technologies Used

${usedBadges || "No technologies detected"}

## 📂 Folder Structure

\`\`\`
${folderStructure}
\`\`\`

## 📦 Installation & Usage

1. Clone the repository  
   \`\`\`bash
   git clone https://github.com/Abdallahosama55/GenieLamp.git
   cd GenieLamp
   \`\`\`
2. Install dependencies  
   \`\`\`bash
   npm install
   \`\`\`
3. Run the project  
   \`\`\`bash
   npm run dev
   \`\`\`

## 🤝 Contributing

Feel free to fork and contribute via pull requests.

## 📜 License

This project is licensed under the MIT License.

`;

fs.writeFileSync("README.md", readmeContent, "utf8");

console.log("✅ README.md has been generated successfully!");
