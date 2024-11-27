import React from "react";
import "./Explorer.css";
import { menu_list } from "../../assets/assets";
const ExplorerMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore_menu" id="explore_menu">
        <h1>Explorer Our Menu</h1>
        <p className="explore_menu_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore
          aut unde ipsam totam non accusantium numquam tempora consectetur
          reprehenderit?
        </p>
        <div className="explore_menu_list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore_menu_list_item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p> {item.menu_name} </p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExplorerMenu;
