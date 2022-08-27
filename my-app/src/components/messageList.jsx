import React from 'react';
function MessageList({ message, updateMessage }) {
    const [showMenu, setShowMenu] = React.useState(false);
    function handleClick() {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    }
    const [showComments, setShowComments] = React.useState(false);
    function handleClickComments() {
      setShowComments((prevShowComments) => !prevShowComments);
    }
    const [likeCount, setLikeCount] = React.useState(0);
    function addLike() {
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }
   
    return ( 
        <>
        <section >
      <div >
        <div >
          <div >pic</div>
          <div >NAME</div>
          <div>DATE</div>
        </div>
        <div >
          <button onClick={handleClick}>+</button>
          {showMenu ? (
            <div >
              <p>Modifier la publication</p>
              <p>Supprimer la publication</p>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <div ></div>
        <div >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div >
          <div >
            <div >
              <button onClick={addLike}>
                {likeCount} 
              </button>
            </div>
            <div >
              <button onClick={handleClickComments}>
                X 
              </button>
            </div>
          </div>
          {showComments ? <div>Liste des commentaires</div> : null}

          <input
            type="text"
            placeholder="Ecrivez un commentaire"
            className="post--newComments"
          />
        </div>
      </div>
    </section>
    </>
        /* 
        <div>
           
            <ul>
                {messages.map((message, index) => (
                    <li key={`${message}-${index}`}>{message}</li>
                ))}
                <ul>
                    {comments.map((comment, index) => (
                        <li key={`${comment}-${index}`}>{comment}</li>
                    ))}
                </ul>
            </ul>

        </div>*/
    )
}

export default MessageList
