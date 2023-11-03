import { useState } from "react";
import ArticleDetails from "../articles/ArticleDetails";


const FilteredArticlesListItem = (props: any) => {
  const { article } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-none w-2/5 md:w-1/4 lg:w-full mr-4 lg:mr-0 bg-white my-4 p-3">
      <div className="font-bold line-clamp-3 h-12 ">{article.title}</div>
      <div className="line-clamp-3 pt-2 h-14 lg:h-20">{article.summary}</div>
      <button onClick={() => setIsOpen(true)} className="w-full bg-gray-600 text-white mt-4 mb-2 p-1">Read More</button>
      {isOpen && (
        <ArticleDetails id={article.id} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  )
}

export default FilteredArticlesListItem;