import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function AddToCart({ product, cart, setCart}) {

    const [open, setOpen] = React.useState(false);
   let token = localStorage.getItem('Token')
      
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    function add2Cart() {

        //console.log("token is", localStorage.getItem('Token'))
        if (!localStorage.getItem('Token')) {
            console.log("no token here")
            return handleClick()
            // return alert("Please login to add to products to cart")


        } else {
            console.log("token is", localStorage.getItem('Token'))
            console.log("cart", cart)
            
        }




        ////cart increase quantity code
        if (cart.some(e => e.id === product.id)) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    let newItem = item
                    newItem.quantity = newItem.quantity + 1
                    return newItem
                } else {
                    return item
                }
            })
            setCart(newCart)
            console.log("ID FOUND")
            //setCartQuantity(cartQuantity + 1);
        } else {
            let cartItem = {
                ...product,
                quantity: 1
            }
            setCart([...cart, cartItem]);
        }
        // console.log("Product already in cart? ", cart.includes(product.id))


        localStorage.setItem('Cart', JSON.stringify(cart));
        return handleClick()


    }





    return (
        <div className="btn_addToCart">

            <button className="btn" onClick={() => add2Cart()}>Add to Cart</button>
            <Snackbar
                // sx={{ height: "100%" }} this makes it appear in the middle of the page
                anchorOrigin={{
                   vertical: "top",
                   horizontal: "center"
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
               {(!token) ? <Alert severity="info">Please login to add items to Cart.</Alert> : <Alert severity="info">Items added to Cart.</Alert> }
            </Snackbar>
           
        </div>
    )




}