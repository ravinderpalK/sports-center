import { useState } from "react";
import ArticleDetails from "./ArticleDetails";


const ArticlesListitem = (props: any) => {
  const { article } = props;

  const formatDate = (date: string): string => {
    const formattedDate = new Date(date).toDateString();
    return formattedDate;
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={article.id} className=" my-4 h-44 bg-white">
      <div className="relative inline-block w-3/4 align-top p-3 h-full">
        <div className="w-9/12">
          <div>{article.sport.name}</div>
          <div className="font-bold text-lg pt-2 line-clamp-1">{article.title}</div>
          <div className="line-clamp-2">{article.summary}</div>
          <div className="pt-2">{formatDate(article.date)}</div>
        </div>
        <button onClick={() => setIsOpen(true)} className="absolute bottom-1 right-3 text-sm font-semibold">Read More</button>
        {isOpen && (
          <ArticleDetails id={article.id} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
      <div className="inline-block w-1/4 h-full">
        <img src={article.thumbnail} className="w-full h-full" />
      </div>
    </div>
  )
}

export default ArticlesListitem; 