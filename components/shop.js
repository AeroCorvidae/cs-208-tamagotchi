"use strict";

class Shop extends React.Component {
  componentDidMount() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../shop-style.css';
    document.head.appendChild(link);
    console.log(link);
  }
  render() {
    return /*#__PURE__*/React.createElement("main", {
      id: "main",
      className: "shop"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col text-center"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "shop-title"
    }, "GOOBIE SHOP"), /*#__PURE__*/React.createElement("p", {
      className: "shop-description"
    }, "Customize your Goobie!"))), /*#__PURE__*/React.createElement("div", {
      className: "shop-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      className: "shop-button hats-button",
      onClick: () => openShop("HATS")
    }, "HATS"), /*#__PURE__*/React.createElement("button", {
      className: "shop-button glasses-button",
      onClick: () => openShop("GLASSES")
    }, "GLASSES"), /*#__PURE__*/React.createElement("button", {
      className: "shop-button accessories-button",
      onClick: () => openShop("ACCESSORIES")
    }, "ACCESSORIES")), /*#__PURE__*/React.createElement("div", {
      className: "accessories-popup",
      id: "accessoriesPopup"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "shopPopupTitle"
    }, "HATS"), /*#__PURE__*/React.createElement("p", null, "Shop items will go here!"), /*#__PURE__*/React.createElement("button", {
      className: "close-button",
      onClick: closeShop
    }, "CLOSE")), /*#__PURE__*/React.createElement("div", {
      className: "shop-controls"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn shop-exit",
      onClick: () => load("hub")
    }, /*#__PURE__*/React.createElement("span", null, "Back to hub"))));
  }
}

// OPENS SHOP POPUP
function openShop(category) {
  document.getElementById("shopPopupTitle").textContent = category;
  document.getElementById("accessoriesPopup").style.display = "block";
}

// CLOSES ACCESSORIES POPUP
function closeShop() {
  document.getElementById("accessoriesPopup").style.display = "none";
}
