import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
  return (
    <Box
    sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        py:2,
        px:4,
        background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)"
    }}
    >
        <Box
           sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            gap:1
        }}
        >
            <Avatar 
            variant='square'
            sx={{
                background:"transparent",
                width:"3rem",
                height:"3rem",
                
            }}>
                <ShoppingBagIcon sx={{color:"white", fontSize:"3rem"}}/>
            </Avatar>
            <Typography variant='h3' sx={{WebkitTextFillColor:"transparent", WebkitBackgroundClip:"text", 
                background:"linear-gradient(90deg, rgba(240,240,237,1) 0%, rgba(208,208,208,1) 35%, rgba(189,189,190,1) 100%)" , 
                backgroundClip:"text", }}>Shopping Cart</Typography>
        </Box>
        <Button sx={{backrgound:"transparent" , ":hover":{background:"transparent"}}}>
        <Badge badgeContent={<Typography>2</Typography>} color="secondary">
            <AddShoppingCartIcon color="action" sx={{
                fontSize:"2rem",
                color:'white'
            }} />
        </Badge>
        </Button>
    </Box>


//     <div className="header">
//     <h1 className="header-line">Shopping App</h1>
//     <button
//         onClick={() => setIsCartOpen(true)}
//         className="header-line-cart"
//     >
//         <img src={CartIcon} alt="cart" className="cartIcon" />
//         <span className="header-line-cart-text">
//             {cartItem.reduce((acc, cur) => acc + cur.quantity, 0)}
//         </span>
//     </button>
// </div>
  )
}

export default Header
