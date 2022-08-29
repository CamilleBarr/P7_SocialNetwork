import React from'react';
//import '../App.css';

function Message() {


    const [showMenu, setShowMenu] = React.useState(false);
    function handleClick() {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    }
    const [showComments, setShowComments] = React.useState(false);

    function handleClickComments() {
        setShowComments((prevShowComments) => !prevShowComments);
        
    }
    const [likeCount, setLikeCount] = React.useState(0);

    function like() {
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
      
      
    }

   
    return ( 
        <>
        <section >
        <div >
            <div >
                <div >pic</div>
                <input
                        type="text"
                        placeholder="Nom"
                        className="post--newComments"
                    />
                <input
                        type="text"
                        placeholder="Prénom"
                        className="post--newComments"
                    />
            </div>
            <div >
                <button onClick={handleClick}>*Edit</button>
                {showMenu ? (
                    <div >
                    <p>Modifier la publication</p>
                    <p>Supprimer la publication</p>
                    </div>
                ) : null}
            </div>
            
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Déposer un message"
                        className="post--newComments"
                    />
                
                    <div >
                        <div >
                            <button onClick={like}>
                                {likeCount} 
                            </button>   
                            <div>
                                <button onClick={handleClickComments}>
                                    Afficher / Masquer les commentaires
                                </button>
                                {showComments && <p>Liste</p>}
                            </div>
                        </div>
                        
                        <div>

                            <input
                                type="text"
                                placeholder="Ecrivez un commentaire"
                                className="post--newComments"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
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