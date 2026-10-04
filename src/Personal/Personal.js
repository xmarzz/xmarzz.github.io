import "./Personal.css"
import GMTClock from "../Components/GMTClock/GMTClock";



const personalData = {
  intro : "Life on the Edge: The Everyday Struggle of Anxiety",
  welcome : "So welcome to the secret place you’ve found it, this is supposed to be very personal. ",
  paraOne: "If i were to trace the roots of it all, the story could go forever, but the simpliest truth is my mind is has always been a crowded room of relentless, racing thoughts. For as long as i can remember, I have carried the heavy, suffocating weight of an impending sense of doom. According to the internet and my research its anxiety. Emotionally, i live in a perpertually on high alert, where the smallest, most insignificant incidents can trigger a physical nervious avalanche kinda a similar to what we see in animals flight or fight mode (google it if u don’t know), sending my heart racing into a sudden, terrifying palpitations, due to this so many times i couldn’t see things clearly and i mess up so many of my things in my personal life including the family and friends. Never felt the comfort of warth, i had a difficulty in connecting with people cause i was grown up in the so called dysfunctional family. ",
  paraTwo: "I got bullied in school i was a skinnest smallest guy in the class during my middle school i was a bullied and made fun of. I worked on few things, i studied and i worked on my sports i got taller Sometimes i am competitive and liked overcoming things, i got pretty good scores at my 10th grade. and i changed school at my 11th standard, New school was very welcoming i was a science student with average ranking on my grades, It’s hard to live in a life where we are never truly loved. During my high school periods where i felt the loneliest, helpless, and studies where too hard i wanted to kill myself so badly, during this time is 16-17. I will never forget it i look at everyone and everyone got somebody, i felt so much pressure, depression, internal dissatifaction level was at the peak, these were supposed to be my memorable years like hell. I just felt like it would have been mercy if i was dead and i didn’t have internet or knowledge to look up what it is i am experiencing or i didn’t have broader view of the world, i was emotionally immature.",
  paraThree: "Comes the college, i joined a mediocre engineering college purposefully, i didn’t want to end up in some bs competitions, rather than i’d build my talents on my own, i still had anxieties but in college its much better, i skipped classes crazily, cause my goal was spend minimum amount of time possible and pass the sems. covid paved the way for me to have way more time than just to waste it in sitting in the class, I wanted a computer a laptop, i liked coding there is something interesting i loved and fascinated by it. It was one of the reason i always loved engineering, from my young my dad’s pharmacy he had a huge computer old and i was facinated by it. But after 15 years during covid i managed to work part time and saved some money, asked my dad and got myself my own gaming laptop. Even without a laptop i did the whole course of coding in mobile i really loved it. Guess i was so sad, just it felt that i can do something made me live without being bothered by other things in my existence. Only happiness in my life is escapisms through movies and series, i mean its common we live in 21th century everyone does this. Raised my internal dissatisfaction and how lonely i really am. ",
  paraFour: "On the other hand for partially while struggling with academics i can say i am one of the top coder in college, i couldn’t pass the job interviews and control my anxiety, i had chance in big companies and i couldn’t focus because of the anxiety i messed up, so basically a useless in the College. eventually stepped down and started taking meds. Meds made my anxiety calm down a bit and made me see things clearly. High performing individual with lots of potential on one side with depressive, ruminating, negative thought cycle on the other side. In india there isn’t much help for guys like me, nor did the society have awareness about these so i was left to struggle. ",
  paraFive: "Funny thing about me, we all knw humans are fallible, they make mistakes, and intentions are important. Every human i meet i try to get their intentions and so when i meet too many people it exhausts me. So i try to keep it lowkey small group of people and i hated the big crowds.  ",
  paraSix :"Later on i started exploring internet, i’ve found many things, i always had this thought i wanted to be genuine with myself, cause if not me to myself being genuine then who else will? I didn’t want a life where i lied to myself and comforted with it. Rather face the truth and get hurt by it. ",  
  paraSeven: "I started asking myself so many questions. About the world, religion, society, human history, biology, chemistry, gotta say my mind got an voracious appetite to know about the world around me. I still didn’t get the answers for many things nor i am i satisfied with the answers i have. I wanted to know sheer scale of reality and my intuition and existence reducing to settle for shallow or incomplete explanation.", 
  paraEight: "I can’t explain everything in here but i can give few words like we never truly understand reality and consciousness. Concepts like physicalism/materialism, dualism, idealism, panpsychism. Carbons unique ability to form a long, stable chains, its like all carbon tetravalent atoms in my body wants me to be an hardcore engineer. Scientifically speaking we’ve still have no idea of life formed 3.5-4 billion years ago why only on earth. Well my story didn’t end i didn’t have much to look upto so i better do something worth a while on my time alive, this i might update in the future, thank you for reading. ", 
};

const personal = ()=>{
    return (
      <div><GMTClock/>
      <div className="content-outside">

        <h1 className="header">{personalData.intro}</h1>
        <article className="article-container">
          <div className="title-box">
              {personalData.welcome}
          </div>
          <div className="paras">
            <p className="para one">
                {personalData.paraOne} 
            </p>
            <p className="para two">
                {personalData.paraTwo}
            </p>
            <p className="para three">  
              {personalData.paraThree}
            </p>
            <p className="para four"> 
              {personalData.paraFour}
            </p>
            <p className="para five">
              {personalData.paraFive}
            </p>

            <div className="ranbir-section">
                <div className="ranbir-images">
                    <img src="/images/ranbir/ranbir1.jpg" alt="Ranbir 1" />
                    <img src="/images/ranbir/ranbir2.png" alt="Ranbir 2" />
                </div>
                <div className="ranbir-caption">
                    <p>can say life has its own way of humbling ourselves. I like this pics this literally me most of the time.</p>
                    <p className="lyrics">
                        I am no hindi native but i like this lyric<br/><br/>
                        <span className="hindi-lyric">“Tune Mujhko Banaya,<br/>
                        Main Toh Jag Ko Na Bhaaya, ”</span><br/><br/>
                        <span className="translation">
                            Translation :<br/>
                            You made me,<br/>
                            But I didn't like the world.
                        </span>
                    </p>
                </div>
            </div>

            <p className="para six">
              {personalData.paraSix}
            </p>
            <p className="para seven">
              {personalData.paraSeven}
            </p>
            <p className="para eight">
              {personalData.paraEight}
            </p>
          </div>
        </article>
      </div>
      </div>
    );
}

export default personal; 