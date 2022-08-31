import React from 'react';
//import '../App.css';

function Message() {

    const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //<button onClick={handleClick}>Publier</button>

    return (
        <>
            <section >
                <form >
                    <input type="image" alt="image accompagnant le message" 
                    />
                    <input
                        type="text"
                        placeholder="Déposer un message"
                        className="post--newComments"
                    />
                    
                    
                </form>
            </section>
        </>

    )
}

export default Message

/*
    
        <section>
            <form >
            <input type="text" placeholder="text"/>
            <button className="signIn--button"  >
              Partager
            </button>
            </form>
            </section>
            */

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