import { Image, Navbar, NavbarBrand } from "@nextui-org/react";

const ChatNavBar = () => {
  return (
    <Navbar maxWidth="full" className="bg-black/60">
      <NavbarBrand>
        <Image src="/logo.png" height={"60px"} />
        <h1>RR Chat</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default ChatNavBar;
