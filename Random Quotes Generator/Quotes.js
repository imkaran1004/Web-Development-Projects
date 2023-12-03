function generate(){
    var quotes={
        "— Carol Burnett":'"When you have a dream, you have got to grab it and never let go."',
        "— Audrey Hepburn":'"Nothing is impossible. The word itself says, I am possible!"',
        "— Alexander the Great": '"There is nothing impossible to they who will try."',
        "— Michael Altshuler":'"The bad news is time flies. The good news is you are the pilot."',
        "— Nicole Kidman":'"Life has got all those twists and turns. You hve got to hold on tight and off you go."',
        "— Walt Whitman":'"Keep your face always toward the sunshine, and shadows will fall behind you."',
        "— Amal Clooney":'"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
        "— Duchess Meghan":'"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."',
        "- Winston Churchill":'"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        "— Oprah Winfrey":'""You define your own life. Do not let other people write your script."',
        "— Malala Yousafzai":'""You are never too old to set another goal or to dream a new dream."',
        "— Dr. Phil":'"At the end of the day, whether or not those people are comfortable with how you are living your life does not matter. What matters is whether you are comfortable with it."',
        "— Mother Teresa":'"Spread love everywhere you go."',
        "— Lady Gaga":'"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."',
        "— Kesha":'"You can be everything. You can be the infinite amount of things that people are."',
        "— Morgan Freeman":'"Learning how to be still, to really be still and let life happen—that stillness becomes a radiance."',
        "— Mahatma Gandhi":'"In a gentle way, you can shake the world."',
        "— Marlee Matlin":'"Silence is the last thing the world will ever hear from me."'
    }

    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];
    document.getElementById('quote').innerHTML=quote;
    document.getElementById('author').innerHTML=author; 
}