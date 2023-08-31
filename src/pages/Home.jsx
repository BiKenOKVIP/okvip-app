import { Carousel } from "antd";
import Banner from "~/components/Banner";
import Header from "~/components/Header";
import News from "~/components/News";
import Title from "~/components/Title";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <Title>Tin tức mới nhất</Title>
      <h2 className="font-[500] text-[0.8rem] text-center px-10 pt-3">
        Hãy cập nhật những dự án và chương trình mới nhất của chúng tôi. Và đồng
        hành lan tỏa những điều thiện!
      </h2>
      <div className="flex flex-col px-10">
        <Carousel
          fade
          autoplay
          autoplaySpeed={3000}
          className="custom-carousel"
          arrows
        >
          <div>
            <img
              className="w-full"
              src="./images/main-news.png"
              alt="Tin Chính"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="./images/main-news1.png"
              alt="Tin Chính"
            />
          </div>
        </Carousel>
      </div>
      <News
        imageUrl="./images/card.png"
        description="Những câu chuyện cảm động Phía sau món quà gửi từ OKVIP"
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
}

export default Home;
