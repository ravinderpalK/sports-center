import { useArticlesState } from "../../context/articles/context";

const ArticlesList: React.FC = () => {
  const articlesState = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = articlesState;

  if (isError)
    return <span>{errorMessage}</span>

  if (isLoading || articles.length == 0)
    return <span>Loading...</span>

  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>{article.title}</div>
        )
      })}
    </div>
  )
}

export default ArticlesList;