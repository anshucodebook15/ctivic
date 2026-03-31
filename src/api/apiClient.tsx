import axios from "axios";
import { cleanUrl } from "./apiUtils";

// https://drupal.thekahanikaars.com/api/menu_items/main

// old: A@BII^fZZY^$
// pass: m9%d8MG19!8#

// const BaseURL = "https://ctivci.com";
// export const BaseURL = "https://drupal.ctivci.com";
export const BaseURL = "https://ctivci.com/drupal";

const apiClient = axios.create({
  baseURL: BaseURL,
});

export const getMenuData = async () => {
  const { data } = await apiClient.get("/api/menu_items/main");
  return data;
};

export const goToLogin = () => {
  return `${BaseURL}/user/login`;
};

export const getPageContent = async (path: string) => {
  // Step 1: Resolve path → get entity info
  const { data: resolveData } = await apiClient.get(
    `/jsonapi/resolve?path=${path}&_format=json`,
  );

  if (!resolveData?.resolved || !resolveData?.jsonapi_url) {
    throw new Error("Page not found");
  }

  // Step 2: Fetch actual content
  const { data: pageData } = await apiClient.get(
    `${resolveData.jsonapi_url}?fields[node--article]=title,body,field_cat&fields[file--file]=uri&include=field_image`,
  );

  return pageData;
};

export const getFeaturedImage = (data: any) => {
  return `${BaseURL}${cleanUrl(data?.included[0]?.attributes?.uri?.url || "")}`;
};

export const getHomepageContent = async () => {
  try {
    const { data } = await apiClient.get(
      "/api/homepage-clean/01766434-3769-47a3-8860-5ee2a87ad39b",
    );
    return data;
  } catch (error) {
    console.error("Error fetching homepage content:", error);
    throw error;
  }
};

/*
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
*/
