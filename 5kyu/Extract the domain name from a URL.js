function domainName(url) {
  //your code here
  if (!url.includes("//") && !url.includes("www")) {
    return url.slice(0, url.indexOf("."));
  } else if (url.includes("www")) {
    url = url.slice(url.indexOf(".") + 1, url.length);
    url = url.slice(0, url.indexOf("."));
    return url;
  } else {
    url = url.slice(url.indexOf("/") + 2, url.indexOf("."));
    return url;
  }
}
