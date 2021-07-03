import React, { useState } from "react";
import '../../../styles/categories-collapse.scss'
import { categoriesData } from "../categoriesData";
import { Collapse, Box, Button, useDisclosure } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";

export default function CategoriesCollapse() {
  const { isOpen, onToggle } = useDisclosure();

  const [collapseBtn, setCollapseBtn] = useState(false);

  const activeCollapseBtn = () => {
    if (window.scrollY >= 80) {
      setCollapseBtn(true);
    } else {
      setCollapseBtn(false);
    }
  };
  window.addEventListener("scroll", activeCollapseBtn);

  return (
    <>
      <Button
        onClick={onToggle}
        className={collapseBtn ? "collapse-btn collapse-btn-active" : "collapse-btn"}
      >
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/lista-super-app.appspot.com/o/assets%2FfilterIconWhite.svg?alt=media&token=126f47c5-a571-4973-b12a-84d4b3bcf358"
          }
          alt=""
        />
      </Button>

      <Collapse
        in={isOpen}
        animateOpacity={false}
        className="collapseCategories-container"
      >
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
          className='categoryBtns-container'
        >
          {categoriesData.map((categoria) => {
            return (
              <CategoryCard
                cat={categoria}
                key={categoria.title}
                onToggle={onToggle}
              />
            );
          })}
        </Box>
      </Collapse>
    </>
  );
}
