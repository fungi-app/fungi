interface ArticleCardProps {
  id: string | null;
  name: string;
  image: string;
}


export function ArticleCard (props: ArticleCardProps) {
  const { id, name, image } = props;

  return (
        <a href={`/p/${id}`} className="Article">
            <p>{name}</p>
            <img src={image} />
        </a>
  )
}
