import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, Reducer, useEffect, useReducer } from "react";
import { Article } from "../../context/articles/types";
import { API_ENDPOINT } from "../../config/constants";

interface ArticleProps {
  id: number,
  isOpen: any,
  setIsOpen: any,
}

interface ArticleDetailsState {
  article: Article | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
const initialArticlesDetails: ArticleDetailsState = {
  article: null,
  isLoading: false,
  isError: false,
  errorMessage: ""
}

enum ArticleDetailsAvailableAction {
  FETCH_ARTICLES_DETAILS_REQUEST = "FETCH_ARTICLES_DETAILS_REQUEST",
  FETCH_ARTICLES_DETAILS_SUCCESS = "FETCH_ARTICLES_DETAILS_SUCCESS",
  FETCH_ARTICLES_DETAILS_FAILURE = "FETCH_ARTICLES_DETAILS_FAILURE",
}
type ArticlesDetailsActions =
  { type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_REQUEST } |
  { type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_SUCCESS, payload: Article } |
  { type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_FAILURE, payload: string };

type ArticleDetailsDispatch = React.Dispatch<ArticlesDetailsActions>;

const reducer: Reducer<ArticleDetailsState, ArticlesDetailsActions> = (state, action) => {
  switch (action.type) {
    case ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      }
    case ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export const fetchArticleDetails = async (dispatch: ArticleDetailsDispatch, id: number) => {
  try {
    dispatch({ type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_REQUEST })
    const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response)
      throw new Error("fetch articles failed");

    const data = await response.json();
    dispatch({ type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_SUCCESS, payload: data })
  }
  catch (error) {
    console.log(error);
    dispatch({ type: ArticleDetailsAvailableAction.FETCH_ARTICLES_DETAILS_FAILURE, payload: "error in fetching article details" });
  }
}

const ArticleDetails: React.FC<ArticleProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, initialArticlesDetails);
  const { article } = state;

  const { id, isOpen, setIsOpen } = props;

  useEffect(() => {
    const getDetailedArticle = async () => {
      await fetchArticleDetails(dispatch, id);
    }
    getDetailedArticle();
  }, []);
  console.log(id);
  return (
    <div className="w-full">
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex h-full min-w-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {article ? (
                  <Dialog.Panel className="mx-auto max-w-2xl h-full p-4 rounded bg-white">
                    <div className="h-full overflow-y-scroll no-scrollbar">
                      <div className="my-2 font-semibold text-gray-900 text-lg">{article.title}</div>
                      <div className="h-1/3 my-2">
                        <img src={article.thumbnail} className="w-full h-full" />
                      </div>
                      <div className="my-2">
                        <p >{article.content}</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                ) : (
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </span>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ArticleDetails;