import { Grid } from "@mui/material";
import { FC } from "react";
import ProductCard from "./ProductCard";
import { IPproduct } from "../interfaces";

interface Props {
  products: IPproduct[];
}

const ProductList: FC<Props> = ({ products }) => {
  const slugs = products.map((product, index) => product.slug || `undefined-${index}`);
  const uniqueSlugs = slugs.filter((slug, index) => {
    return slug.startsWith('undefined-') || slugs.indexOf(slug) === index;
  });
  const hasDuplicates = new Set(uniqueSlugs).size !== uniqueSlugs.length;
  
  if (hasDuplicates) {
    console.error("Los productos tienen slugs duplicados. Cada producto debe tener un slug único.");
  }

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <ProductCard key={slugs[index]} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
