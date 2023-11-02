import { useState } from "react";
import ArticleDetails from "../articles/ArticleDetails";


const FilteredArticlesListItem = (props: any) => {
  const { article } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white my-4 p-3">
      <div className="font-bold">{article.title}</div>
      <div className="line-clamp-3">{article.summary}</div>
      <button onClick={() => setIsOpen(true)} className="w-full bg-gray-600 text-white my-4 p-1">Read More</button>
      {isOpen && (
        <ArticleDetails id={article.id} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  )
}

export default FilteredArticlesListItem;