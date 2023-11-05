import { Listbox, Tab, Transition } from "@headlessui/react";
import { useArticlesDispatch } from "../../context/articles/context";
import ArticlesList from "./ArticlesList";
import { Fragment, useEffect, useState } from "react";
import { fetchArticles } from "../../context/articles/actions";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollToNewsDivProps } from ".";


const ArticlesContainer: React.FC<ScrollToNewsDivProps> = (props) => {
  const articlesDispatch = useArticlesDispatch();
  useEffect(() => {
    fetchArticles(articlesDispatch);
  }, [articlesDispatch]);

  const sort = [
    'Date',
    'Sport',
  ]

  const [sortBy, setSortBy] = useState(sort[0]);
  const isAuthenticated = !!localStorage.getItem("authToken");
  return (
    <div>
      <Tab.Group>
        <Tab.List className={`relative z-10`} >
          <Tab className={({ selected }) => `${selected ? 'border-gray-600 text-black' : ' text-gray-900'} 'flex-1 w-36 lg:w-44 whitespace-nowrap border-b-2 px-1 py-1 text-sm lg:text-base font-medium'`}>
            {isAuthenticated ? `Your News` : 'All News'}
          </Tab>
          <div className="inline absolute right-0 w-32 mr-10 z-20 origin-top-right rounded-sm bg-gray-200 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Listbox value={sortBy} onChange={setSortBy}>
              <Listbox.Button className={` cursor-default py-1`}>
                <span className="pl-2">Sort by: {sortBy}</span>
                <ChevronDownIcon className="h-5 w-5 text-gray-700 inline"
                  aria-hidden="true" />
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className={`shadow-md`}>
                  {sort.map((item) => (
                    <Listbox.Option
                      key={item}
                      value={item}
                      className={({ active }) => `relative cursor-default select-none pl-2 py-1 pr-4 ${active ? 'bg-gray-300 text-gray-900' : 'text-gray-800'
                        }`}
                    >
                      {item}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </Tab.List>
        <Tab.Panels className={`relative z-0`}>
          <Tab.Panel>
            <ArticlesList sortBy={sortBy} scrollToNewsDiv={props.scrollToNewsDiv} />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  )
}

export default ArticlesContainer;