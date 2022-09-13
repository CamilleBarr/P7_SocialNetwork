import {ROOT_PATH_URL} from './../../components/server.config';
    function errMessage(){
        return (<h2>Nous avons une erreur de chargement. Merci de recharger la page ultérieurement</h2>)
    }
    
   const getListPost = () => {
    const token = localStorage.getItem('token');

    return fetch(`${ROOT_PATH_URL}/homepage`, {
      method : "GET",
      headers: {
          'Authorization': `Bearer ${token}`
      }
      })
      .then((res)=> res.json())
      .then((posts)=> {
          console.log('test .then posts of useeffect fun', posts)
          return posts
      })
      .catch((error)=>{
          console.log('error', error)
          errMessage()
      });
   }

   export { getListPost };
