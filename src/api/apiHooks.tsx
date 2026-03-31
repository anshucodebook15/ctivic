import { useQuery } from "@tanstack/react-query";
import { getHomepageContent, getMenuData, getPageContent } from "./apiClient";
// import { getHomepage } from "../api/homeApi";/

export const useMenuData = () => {
  return useQuery({
    queryKey: ["menuData"],
    queryFn: getMenuData,
  });
};

export const usePageContent = (path: string) => {
  return useQuery({
    queryKey: ["page-content", path],
    queryFn: () => getPageContent(path),
    enabled: !!path, // prevents running if path is empty
  });
};

export const useHomepageContent = () => {
  return useQuery({
    queryKey: ["homepage-content"],
    queryFn: getHomepageContent,
  });
};




