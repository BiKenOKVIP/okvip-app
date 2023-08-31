import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function News({ imageUrl, title, description }) {
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div className="w-full px-10 pt-5 lg:w-[30%]">
      <div>
        <Card hoverable cover={<img alt="example" src={imageUrl} />}>
          <Meta
            className="text-center"
            title={title}
            description={truncatedDescription}
          />
        </Card>
      </div>
    </div>
  );
}

export default News;
