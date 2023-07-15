
import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { AppBar, Box, Link, Toolbar, Typography, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import MainLayout from '../../components/layouts/MainLayout';
// import { useRouter } from 'next/router';

import { UiContext } from '../context/ui';
import { useRouter } from 'next/router';
import { CartContext } from '../context/indext';
import { ShoppingCartOutlined } from '@mui/icons-material';


export const Navbar = () => {

    const { asPath, push } = useRouter();
   const {toggleSideMenu } = useContext (UiContext)

   const { numberOfItems } = useContext( CartContext );


   const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);


    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Rreto </Typography>
                        <Typography sx={{ ml: 0.9 }}>Shop</Typography>

                    </Link>
                </NextLink>

                <Box flex={1} />
                <Box sx={{ display:{ xs: 'none', sm: 'block'}}}>

                    <MainLayout>

                    </MainLayout>

                </Box>

                <Box flex={1} />


                <NextLink href="/login" passHref legacyBehavior>
                <Button>
                    Login
                </Button>
                </NextLink>


                <NextLink href="/cart" passHref>
                    
                        <IconButton>
                        <Badge badgeContent={ numberOfItems > 9 ? '+9': numberOfItems  } color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    
                </NextLink>

                <Button onClick={toggleSideMenu}>
                    Menú    
                </Button>

            </Toolbar>
        </AppBar>

    )
}
