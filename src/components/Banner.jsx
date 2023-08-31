function Banner() {
  return (
    <div>
      <div className="mt-[50px] relative flex">
        <img src="./images/banner.png" alt="Banner" />
        <div className="text-center absolute top-10 px-10">
          <h2 className="text-[#fff] uppercase font-[900] mb-[10px]">
            Liên minh okvip
          </h2>
          <p className="text-[#fff] leading-[15px] text-[0.8rem]">
            Liên minh OKVIP cam kết cung cấp các tiêu chuẩn cao nhất về bảo mật
            và dịch vụ khách hàng đáng tin cậy cho mọi người tham gia chơi
            GAMEONLINE
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
