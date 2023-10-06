import './home.css';
export function Home(){
    return(
        <div className='home'>
         <h1></h1>
        <img
          src="kimkim.jpg" alt="image" class="img_frame" />
        <p>Hello! I am Nurkeymar C. Abdul I lived in Maria Cristina Balo-i Lanao del Norte, I am 19
          years old, currently studying at St. Peter's College. I had the desire, but I never had the will to
          follow it. I'm worried about the amount of strain
          I'm putting on myself and how I'll be able to maintain up with my ambition as the years pass.</p>  
        <a
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
        >
            Test
        </a>
        </div>
    )
}
export default Home