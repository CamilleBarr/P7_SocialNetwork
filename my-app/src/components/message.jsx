import React from'react';
//import '../App.css';

function Message() {

  return (
    <section>
        <form >
        <input type="text" placeholder="text"/>
        <button className="signIn--button"  >
          Partager
        </button>
        </form>
        </section>
)
}

export default Message

/*
function CreateMessage() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        </div>
    )
}

export default CreateMessage
*/