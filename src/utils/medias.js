export function getStrapiMedia(url) {
  const strapiURL = process.env.GRIDSOME_STRAPI_URL || "http://localhost:1338";

  if (url.startsWith("/")) {
    const returnUrl = `${strapiURL}${url}`;
    return returnUrl;
  }

  return url;
}
