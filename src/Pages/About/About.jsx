import '../../Pages/About/About.scss'
import aboutImage from '../../assets/jane.jpg'
import missionImage from '../../assets/recipes/mission.jpg'




export const About = () => {
  return (
    <section className="about">
    
    <div className="top">
        <div className="col-1">
        <h1 className="title">Our Story</h1>
        <p className="info">Our journey began when a young teacher named Jane could not find 'sushi' in the remote town of Tarlton in Krugersdorp. She decided to find easy recipes online and it was such a mission for her!  Her passion switched from teaching to hospitality and the rest is history...  We are the home of flavorful and easy recipes! Our niche caters for both local and international conossieurs, bring the 5 star into your home with our recipes from top chefs around the world!</p>
        <button>Find Recipes</button>
        </div>
        <div className ="col-2">
        <img src={aboutImage} alt=""/>
        </div>
        
    </div>
    <div className="bottom">
        <div className="col-3">
        <img src={missionImage} alt=""/>
        </div>
        <div className ="col-4">
        <h2 className="title">Our Mission</h2>
        <p className="info">Nothing tops a good meal after any occassion or any situation! We believe that fulfilled tastebuds come with great memories, satisfied hearts and laughter! Our mission is to help you improve your culinary skills and be able to feed those cravings even in the direst instances...like being stuck in a remote town!</p>
        <button>Categories</button>
        </div>
        
    </div>
    <div className="reviews">
      <div className="text-1">
      <p>"Believe me when I tell you my friends cannot stop coming over because my pasta is that good!"  Candice Marie</p>
      
      </div>
      <div className="text-2">
      <p>"My children love my meals better! CookPedia has turned Dad into the star of our kitchen! "  Vuyo Ndlovu</p>
      </div>
      <div className="text-3">
      <p>"I enjoy cooking wholesome meals for my family with these amazing and easy recipes!" Boitshepo Nare</p>
      </div>
    </div>
    
    
    </section>
)
}