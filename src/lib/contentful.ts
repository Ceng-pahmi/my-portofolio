const contentful= require("contentful");

export const client = contentful.createClient({
    space:process.env.CONTENTFUL_SPACEID,
    accessToken:process.env.CONTENTFUL_DELEVERY_ACCESS
});