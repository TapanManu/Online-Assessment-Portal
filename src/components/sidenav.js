// With custom styles
import React from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />{" "}
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Hello World"
        items={["home", "services", "about", "contact"]}
        titleStyle={{ backgroundColor: "#4CAF50" }}
        itemStyle={{ backgroundColor: "#fff" }}
        itemHoverStyle={{ backgroundColor: "#CDDC39" }}
      />
    </div>
  );
};
const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <a target="_blank" href="someLink">
      Link1
    </a>,
    <a target="_blank" href="someLink">
      Link2
    </a>,
    <a target="_blank" href="someLink">
      Link3
    </a>,
  ];

  const title = <h1>Hello octo </h1>;

  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={title}
        items={navItems}
      />
    </div>
  );
};
