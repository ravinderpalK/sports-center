import { useArticlesState } from "../../context/articles/context";
import { usePreferencesState } from "../../context/user_preferences/context";
import ArticlesListitem from "./ArticlesListItem";

const ArticlesList: React.FC = () => {
  const articlesState = useArticlesState();
  const preferencesSate = usePreferencesState();
  let { articles, isLoading, isError, errorMessage } = articlesState;
  const { preferences } = preferencesSate;
  if (isError)
    return <span>{errorMessage}</span>

  if (isLoading)
    return <span>Loading...</span>

  const isAuthenticated = !!localStorage.getItem("authToken");
  if (isAuthenticated) {
    articles = articles.filter((article) => preferences.sports?.includes(article.sport.name))
    articles = articles.filter((article) => preferences.teams?.includes(article.teams[0]?.name) || preferences.teams.includes(article.teams[1]?.name))
  }

  if (articles.length == 0)
    return <span>Select Prefrences</span>
  return (
    <div >
      {articles.map((article) => {
        return <ArticlesListitem key={article.id} article={article} />
      })}
    </div>
  )
}

export default ArticlesList;