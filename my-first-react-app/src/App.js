import Post from '../src/scripts/Post'
import icon from '../src/assets/confirm_icon.png'
import messagesIcon from './assets/messages_icon.png'
import sharesIcon from './assets/shares_icon.png'
import likesIcon from './assets/likes_icon.png'
import downloadIcon from './assets/download_icon.png'


function App() {
  const ANAKIN_IMAGE = "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/";
  const RAY_IMAGE = "https://sportshub.cbsistatic.com/i/2021/03/18/c5e97547-b7a5-41bb-a1d6-b239688aabec/the-rise-of-skywalker-rey-lightsaber-1228908.jpg";
  
  return (
    <div>
      <Post author={{
            photo: ANAKIN_IMAGE,
            name: <h2 className='anakinName'>Anakin Skywalker</h2>,
            icon: icon,
            nickname: <h4 className='nickName'>@Darth_Vader</h4>,
            date: <h4 className='dateName'>26 feb.</h4>,    
         }}
         content = <span className='anakinText'> WTF? Who is Ray? Why she is Skywalker? Luke...? </span>
         image={RAY_IMAGE}
         messagesIcon={messagesIcon}
         sharesIcon={sharesIcon}
         likesIcon={likesIcon}
         downloadIcon={downloadIcon}
        
/>
    </div>
  );
}

export default App;