import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  let isInline = true;
  return (
    <>
      <div className="fixed top-0 left-0 z-50 bg-[#000] w-full h-[50px] flex justify-between items-center">
        <Button
          className="outline-none border-0 text-[#FF9900] text-[20px] h-full flex items-center"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          headerStyle={{ display: "none" }}
          bodyStyle={{
            padding: 0,
            height: "100%",
            background: "#000",
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
          }}
          width="80%"
          onClose={onClose}
          open={open}
          placement="left"
        >
          <Menu
            className="bg-[#000] text-[#FF9900] pt-10"
            mode={isInline ? "inline" : "horizontal"}
            items={[
              {
                key: "news",
                label: <a href="/">Tin tức</a>,
              },
              { key: "about", label: <a href="/">Về chúng tôi</a> },
              { key: "contact", label: <a href="/">Liên hệ</a> },
            ]}
          />
        </Drawer>
        <div className="text-center h-full flex items-center">
          <img className="h-[70%]" src="./images/logo.png" alt="Logo" />
        </div>
        <div className="w-[50px]"></div>
      </div>
    </>
  );
}
export default Header;
