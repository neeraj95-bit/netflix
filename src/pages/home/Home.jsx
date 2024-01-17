import './home.scss'
import Navbar from 'C:/Users/neera/OneDrive/Desktop/netflix/src/components/navbar/Navbar'
import Featured from 'C:/Users/neera/OneDrive/Desktop/netflix/src/components/featured/Featured' 
import List from 'C:/Users/neera/OneDrive/Desktop/netflix/src/components/list/List'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
     <Featured/>
     <List/>
     <List/>
     <List/>
     <List/>
   
    </div>
  );
}; 

export default Home;


