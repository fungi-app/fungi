interface ArticleCardProps {
  id: string;
  name: string;
  image: string;
}


export function ArticleCard (props: ArticleCardProps) {
  const { id, name, image } = props;
  const addZero = (n: number) => (n < 10 ? `0${n}` : n);

  return (
        <a href={`/p/${id}`} className="Article">
            <p>{name}</p>
            <img src={image} />
        </a>
  )
}