let btn = document.getElementById('btn');
let btnContent = document.getElementById('btn-content')
let synth = window.speechSynthesis;
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();

recognition.onresult = (event) =>{
    btnContent.innerText = "Talk To Me"
    let transcript = event.results[0][0].transcript;
    console.log(transcript);
    let command = transcript.toLowerCase();

    if(command.includes("hello") || command.includes("hi")){
        speakAlex("hi, how can I help you");
    }
    else if(command.includes("thanks") || command.includes("see you soon")){
        speakAlex("your welcome, if you have any other question you can ask me");
    }
    else if(command.includes("who are you") || command.includes("your name")){
        speakAlex("I am an AI virtual assistant and my name is Jarvis");
    }
    else if(command.includes("are you mad") || command.includes("r u mad")){
        speakAlex("No, I am intelligent");
    }
    else if(command.includes("open youtube")){
        speakAlex("opening youtube");
        window.open("https://www.youtube.com")
    }
    else if(command.includes("open google")){
        speakAlex("opening google");
        window.open("https://www.google.com")
    }
    else if(command.includes("open facebook")){
        speakAlex("opening facebook");
        window.open("https://www.facebook.com")
    }
    else if(command.includes("open instagram")){
        speakAlex("opening instagram");
        window.open("https://www.instagram.com")
    }
    else if(command.includes("open chat gpt")){
        speakAlex("opening chat GPT");
        window.open("https://www.chatgpt.com")
    }
    else if(command.includes("open calculator")){
        speakAlex("opening calculator");
        window.open("calculator://")
    }
    else if(command.includes("open whatsapp")){
        speakAlex("opening");
        window.open("https://www.google.com/search?q=whatsapp+web")
    }
    else if(command.includes("can you dance")){
        speakAlex("no, because I am a machine")
    }
    else{
        let trimedCommand = "This is what I found on internet regarding" + command.replace("jarvis", "");
        speakAlex(trimedCommand);
        window.open(`https://www.google.com/search?q=${command.replace("jarvis","")}`)
    }
}

function speakAlex(text){
    let AlexSpeaks = new SpeechSynthesisUtterance(text);
    AlexSpeaks.rate = 0.7;
    AlexSpeaks.pitch = 1;
    AlexSpeaks.volume = 2;
    synth.speak(AlexSpeaks);
}

btn.addEventListener('click', ()=>{
    recognition.start();
    btnContent.innerText = "Listening...."
});
