import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "scroll",
        heighgt: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
          onClick={() => {
            setselectedCategory(category.name);
            sessionStorage.setItem("category", category.name);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              marginRight: "15px",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
