import { FC, useState } from "react";
import { ValidSizes } from "../interfaces";
import { Box, Button } from "@mui/material";

interface Props {
    sizes?: ValidSizes[];
    onSelectedSize: (size: ValidSizes) => void;
}

const SizeSelector: FC<Props> = ({ sizes, onSelectedSize }) => {
    const [selectedSize, setSelectedSize] = useState<ValidSizes | undefined>(undefined);

    const handleClick = (size: ValidSizes) => {
        setSelectedSize(size);
        onSelectedSize(size);
    };

    return (
        <Box>
            {
                sizes?.map((size) => (
                    <Button
                        variant={selectedSize === size ? "contained" : "outlined"}
                        color="primary"
                        sx={{ mr: 1, mb: 1 }}
                        key={size}
                        size="small"
                        onClick={() => handleClick(size)}
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}

export default SizeSelector;
