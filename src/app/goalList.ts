import { Goal} from './goal';

//Acts as our database
export let Goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2021,9,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2021,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2021,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,11,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2021,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2021,3,14)),
  ]