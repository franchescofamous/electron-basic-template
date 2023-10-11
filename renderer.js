const versionParagraph = document.querySelector(".versions");

versionParagraph.textContent = `This application is using electron Version${versions.electron()} with chrome Version${versions.chrome()} and node Version${versions.node()}`;
