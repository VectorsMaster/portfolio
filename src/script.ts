import { formatDistance, subDays } from "date-fns";
interface Joke {
    safe_title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}
   
async function main(): Promise<void> {
    const title = document.getElementById('joke-title') as HTMLElement;
    const img = document.getElementById('joke-image') as HTMLImageElement;
    const date = document.getElementById('upload-date') as HTMLElement;

    async function fetchId(): Promise<string> {
        const params: URLSearchParams = new URLSearchParams();
        params.append('email', 'a.sarhan@innopolis.university');
        const response: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
        const data: string = await response.json();
        return data;
    }

    async function fetchJoke(): Promise<Joke> {
        const jokeId: string = await fetchId();
        const params: URLSearchParams = new URLSearchParams();
        params.append('id', jokeId);
        const response: Response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
        const joke: Joke = await response.json();
        return joke;
    }

    const joke: Joke = await fetchJoke();
    title.textContent = joke.safe_title;
    img.src = joke.img;
    img.alt = joke.alt;
    
    const event: Date = new Date(Date.UTC(joke.year, joke.month, joke.day));
    
    const timePassed: string = formatDistance( new Date(), event, { addSuffix: true })
    date.textContent = timePassed;
}

main();
  
