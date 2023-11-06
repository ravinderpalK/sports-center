import ArticlesContainer from "./ArticlesContainer";

export interface ScrollToNewsDivProps {
  scrollToNewsDiv: () => void;
}

const Articles: React.FC<ScrollToNewsDivProps> = (props) => {
  return (
    <div className="m-2 md:m-3 lg:m-3 lg:m-4 text-xs lg:text-base">
      <ArticlesContainer scrollToNewsDiv={props.scrollToNewsDiv} />
    </div>
  )
}

export default Articles;