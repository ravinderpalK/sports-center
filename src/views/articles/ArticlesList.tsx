import { useArticlesState } from "../../context/articles/context";
import ArticleDetails from "./ArticleDetails";

const ArticlesList: React.FC = () => {
  const articlesState = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = articlesState;

  if (isError)
    return <span>{errorMessage}</span>

  if (isLoading || articles.length == 0)
    return <span>Loading...</span>

  const formatDate = (date: string): string => {
    const formattedDate = new Date(date).toDateString();
    return formattedDate;
  }

  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id} className=" my-4 h-44 bg-white">
            <div className="relative inline-block w-3/4 align-top p-3 h-full">
              <div className="w-9/12">
                <div>{article.sport.name}</div>
                <div className="font-bold text-lg">{article.title}</div>
                <div className="line-clamp-2">{article.summary}</div>
                <div>{formatDate(article.date)}</div>
              </div>
              <ArticleDetails id={article.id} />
            </div>
            <div className="inline-block w-1/4 h-full">
              <img src={article.thumbnail} className="w-full h-full" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList;