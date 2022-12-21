import { SortNewsByImage } from "../Common";

const useFetchNews = async (category, keywords, isDynamic) => {
  const url = `http://api.mediastack.com/v1/news?country=us&categories=${category ? category : "general"}&keywords=${keywords}&access_key=${process.env.MEDIA_STACK_API_KEY}&languages=en`;
  const res = await fetch(url, {
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 6 },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  const news = await res.json();
  const newsSorted = SortNewsByImage(news);

  return { newsSorted };
};

export default useFetchNews;
