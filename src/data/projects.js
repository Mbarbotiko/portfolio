import pokeImage from '../components/images/background/proj-pokemonswitch.jpg';
import giphyImage from '../components/images/background/proj-api.jpg';
import neighborImage from '../components/images/background/proj-neighborly.jpg';


const projects = [
    {
        title:'Pokeswitch',
        stack:'React | Bootstrap',
        description:'Memory game with adorbs Pokemon.  Test your memory only click on each Pokemon once.',
        image :pokeImage,
        bgColor: 'redBG',
        borderColor:'redBorder'
    },
    {
        title:'GIPHY API',
        stack: 'jQuery',
        description:'Call Giphy API and append the results to the page.',
        image :giphyImage,
        bgColor: 'yellowBG',
        borderColor:'yellowBorder'
    },
    {
        title:'Neighborly',
        stack:'React | Bootstrap | Express | Node | Mongo',
        description:'Social media style app where user can create profile and communicate with other users via posts on page.',
        image :neighborImage,
        bgColor: 'purpleBG',
        borderColor:'purpleBorder'
    }
]

export default projects;