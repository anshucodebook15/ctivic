import { useQuery } from "@tanstack/react-query";
import { getHomepage, getPageContent } from "./apiClient";
// import { getHomepage } from "../api/homeApi";/

export const useHomepage = () => {
  return useQuery({
    queryKey: ["homepage"],
    queryFn: getHomepage,
  });
};

export const usePageContent = (path: string) => {
  return useQuery({
    queryKey: ["page-content", path],
    queryFn: () => getPageContent(path),
    enabled: !!path, // prevents running if path is empty
  });
};
