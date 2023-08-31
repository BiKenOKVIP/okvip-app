import Banner from "~/components/Banner";
import Header from "~/components/Header";
import News from "~/components/News";
import Title from "~/components/Title";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <div className="bg-container lg:w-[1200px] lg:mt-0 lg:mx-auto">
        <Title>Tin tức mới nhất</Title>
        <h2 className="font-[500] text-[0.8rem] text-center px-10 pt-3">
          Hãy cập nhật những dự án và chương trình mới nhất của chúng tôi. Và
          đồng hành lan tỏa những điều thiện!
        </h2>
        <div className="flex flex-col px-10 bg-[#000]"></div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <News
            imageUrl="./images/card.png"
            title="Những câu chuyện cảm động Phía sau món quà gửi từ OKVIP"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <News
            imageUrl="./images/card.png"
            title="Những câu chuyện cảm động Phía sau món quà gửi từ OKVIP"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <News
            imageUrl="./images/card.png"
            title="Những câu chuyện cảm động Phía sau món quà gửi từ OKVIP"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
