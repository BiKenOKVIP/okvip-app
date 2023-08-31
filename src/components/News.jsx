import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function News({ imageUrl, title, description }) {
  return (
    <div className="w-full p-10">
      <div>
        <Card hoverable cover={<img alt="example" src={imageUrl} />}>
          <Meta
            className="text-center"
            description={title}
            title={description}
          />
        </Card>
      </div>
    </div>
  );
}

export default News;
