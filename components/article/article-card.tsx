import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    date: string;
    imagePath: string;
    excerpt: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { id, title, date, imagePath, excerpt } = props.article;
  return (
    <Card>
      <CardMedia image="/test.png"></CardMedia>
      <CardContent>{title}</CardContent>
    </Card>
  );
};

export default ArticleCard;
