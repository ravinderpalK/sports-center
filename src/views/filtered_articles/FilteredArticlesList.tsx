import { useArticlesState } from "../../context/articles/context";
import FilteredArticlesListItem from "./FilteredArticlesListItem";

const FilteredArticlesList = (props: any) => {
  const { selectedSport, selectedTeam } = props;

  const articlesState = useArticlesState();
  const { articles } = articlesState;
  let filteredArticles = articles.filter((article) => article.sport.name == selectedSport);
  filteredArticles = filteredArticles.filter((article) => article.teams[0]?.name == selectedTeam || article.teams[1]?.name == selectedTeam);
  console.log(filteredArticles);
  return (
    <div className="flex flex-row lg:flex-col overflow-scroll">
      {filteredArticles && filteredArticles.map((article) => {
        return (
          <FilteredArticlesListItem key={article.id} article={article} />
        )
      })}
    </div>
  )
}

export default FilteredArticlesList;