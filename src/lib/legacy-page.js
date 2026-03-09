import { readFileSync } from "node:fs";

function normalizeAssetPaths(markup) {
  return markup.replace(
    /\b(src|href)=["'](images|js|icons|wasm)\//gi,
    (_, attr, dir) => `${attr}="/${dir}/`
  );
}

function extractBodyHtml(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    return "";
  }

  return normalizeAssetPaths(bodyMatch[1].trim());
}

function extractBodyClass(html) {
  const openBodyMatch = html.match(/<body([^>]*)>/i);
  if (!openBodyMatch) {
    return "";
  }

  const classMatch = openBodyMatch[1].match(/class=["']([^"']+)["']/i);
  return classMatch ? classMatch[1] : "";
}

export function loadLegacyPage(fileUrl) {
  const html = readFileSync(fileUrl, "utf8");
  return {
    bodyHtml: extractBodyHtml(html),
    bodyClass: extractBodyClass(html)
  };
}

export function loadLegacyMain(fileUrl) {
  const html = readFileSync(fileUrl, "utf8");
  const bodyHtml = extractBodyHtml(html);

  const withoutScripts = bodyHtml.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  const withoutNav = withoutScripts.replace(/<nav[\s\S]*?<\/nav>/i, "");
  const mainHtml = withoutNav.replace(/<footer[\s\S]*?<\/footer>/i, "").trim();

  return {
    bodyClass: extractBodyClass(html),
    mainHtml
  };
}
