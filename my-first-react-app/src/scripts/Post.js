import '../styles/Post.css';

function Post(prop){
  return <div className='Post'>
    <div className='authorImage'><img src={prop.author.photo} alt="Author" className='anakinImage'></img>  
    {prop.author.name}
    <img src={prop.author.icon} alt="Icon" className='iconImage'></img> 
    {prop.author.nickname}
    {prop.author.date} </div> 
    <p>{prop.content}</p>
    <img src={prop.image} alt="Post" className='rayImage'></img>
    <div className='postFooter'><img src={prop.messagesIcon} alt="Icon" className='icon'></img>
    <img src={prop.sharesIcon} alt="Icon" className='icon'></img>
    <img src={prop.likesIcon} alt="Icon" className='icon'></img>
    <img src={prop.downloadIcon} alt="Icon" className='icon'></img>  </div> 
  </div>
}

export default Post;