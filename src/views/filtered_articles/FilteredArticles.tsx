import { useArticlesState } from "../../context/articles/context";


const FilteredArticles = (props: any) => {
  const { selectedSport, selectedTeam } = props;
  const articlesState = useArticlesState();
  const { articles } = articlesState;
  let filteredArticles = articles.filter((article) => article.sport.name == selectedSport);
  filteredArticles = filteredArticles.filter((article) => article.teams[0]?.name == selectedTeam || article.teams[1]?.name == selectedTeam)
  return (
    <div className="">
      {filteredArticles.map((article) => {
        return (
          <div key={article.id} className="bg-white my-4 p-3">
            <div className="font-bold">{article.title}</div>
            <div className="line-clamp-3">{article.summary}</div>
            <button className="w-full bg-gray-600 text-white my-4 p-1">Read More</button>
          </div>
        )
      })}
    </div>
  )
}

export default FilteredArticles;