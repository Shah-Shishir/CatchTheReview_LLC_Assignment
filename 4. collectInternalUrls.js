function isAlpha(character) {
  return (
    (character >= "a" && character <= "z") ||
    (character >= "A" && character <= "Z")
  );
}

function collectInternalUrls(siteUrl) {
  siteUrl = siteUrl[siteUrl.length - 1] === "/" ? siteUrl : siteUrl.concat("/");

  const urls = Array.from(document.getElementsByTagName("a"));
  const siteUrlLength = siteUrl.length;

  let internalUrls = urls.filter(
    (url) =>
      url.href.includes(siteUrl) &&
      url.href[siteUrlLength] &&
      isAlpha(url.href[siteUrlLength])
  );

  internalUrls = internalUrls.map((url) => url.href);

  for (const url of internalUrls) {
    console.log(url);
  }
}

collectInternalUrls("https://ilafe.com");
