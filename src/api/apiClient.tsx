import axios from "axios";

// https://drupal.thekahanikaars.com/api/menu_items/main

const apiClient = axios.create({
    baseURL: "https://drupal.thekahanikaars.com",
});

export const getHomepage = async () => {
    const { data } = await apiClient.get("/api/menu_items/main");
    return data;
};

export const getPageContent = async (path: string) => {
  // Step 1: Resolve path → get entity info
  const { data: resolveData } = await apiClient.get(
    `/jsonapi/resolve?path=${path}&_format=json`
  );

  if (!resolveData?.resolved || !resolveData?.jsonapi_url) {
    throw new Error("Page not found");
  }

  // Step 2: Fetch actual content
  const { data: pageData } = await apiClient.get(
    resolveData.jsonapi_url
  );

  return pageData;
};