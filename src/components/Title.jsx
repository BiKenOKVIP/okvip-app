function Title({ children }) {
  return (
    <div className="flex items-center justify-center w-full h-[20px] mt-2">
      <img
        className="w-[20%] h-[40%]"
        src="./images/title-left.png"
        alt="Title"
      />
      <div className="px-[10px] text-[0.8rem] font-[500] uppercase">
        {children}
      </div>
      <img
        className="w-[20%] h-[40%]"
        src="./images/title-right.png"
        alt="Title"
      />
    </div>
  );
}

export default Title;
