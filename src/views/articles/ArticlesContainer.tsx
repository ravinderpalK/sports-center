import { Tab } from "@headlessui/react";
import { useArticlesDispatch } from "../../context/articles/context";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { fetchArticles } from "../../context/articles/actions";


const ArticlesContainer: React.FC = () => {

  const articlesDispatch = useArticlesDispatch();
  useEffect(() => {
    fetchArticles(articlesDispatch);
  }, [articlesDispatch]);

  return (
    <div >
      <Tab.Group>
        <Tab.List>
          <Tab className={({ selected }) => `${selected ? 'border-indigo-600 text-indigo-600' : ' text-gray-900'} 'flex-1 w-44 whitespace-nowrap border-b-2 px-1 py-1 text-base font-medium'`}>
            All News
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ArticlesList />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ArticlesContainer;