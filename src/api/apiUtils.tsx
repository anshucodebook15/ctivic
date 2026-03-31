export const cleanUrl = (url: string) => {
    if (!url) return "/";
    return url.replace(/^\/drupal/, "");
};