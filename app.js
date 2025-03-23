let togglePera = ["A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
    `Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.`,
    `Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.`,
    `It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.`,
    `If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.`,
    `No! All of the paragraphs in the generator are written by humans, not computers. When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.`,
    `There are usually about 200 words in a paragraph, but this can vary widely. Most paragraphs focus on a single idea that's expressed with an introductory sentence, then followed by two or more supporting sentences about the idea. A short paragraph may not reach even 50 words while long paragraphs can be over 400 words long, but generally speaking they tend to be approximately 200 words in length.`,
    `For writers looking for a way to get their creative writing juices flowing, using a random paragraph can be a great way to do this. One of the great benefits of this tool is that nobody knows what is going to appear in the paragraph. This can be leveraged in a few different ways to force the writer to use creativity. For example, the random paragraph can be used as the beginning paragraph of a story that the writer must finish. I can also be used as a paragraph somewhere inside a short story, or for a more difficult creative challenge, it can be used as the ending paragraph. In every case, the writer is forced to use creativity to incorporate the random paragraph into the story.`,
    `When it comes to writers' block, often the most difficult part is simply beginning to put words to paper. One way that can often help is to write about something completely different from what you're having the writers' block about. This is where a random paragraph can be quite helpful. By using this tool you can begin to chip away at the writers' block by simply adding to the random paragraph that appears with the knowledge that it's going to be completely different from any writing you've been doing. Then once you begin to put words on the paper, it should be easier to transition into the writing that needs to get done.`,
    `For those who are interested in finding random paragraphs, that's exactly what this webpage provides. If both a random word and a random sentence aren't quite long enough for your needs, then a random paragraph might be the perfect solution. Once you arrive at this page, you'll see a random paragraph. If you need another one, all you need to do is click on the "next paragraph" button. If you happen to need several random paragraphs all at once, you can use this other paragraph generator. Below you can find a number of ways that this generator can be used.`
 ]
let toging = 0
let pera = togglePera[toging]
let arrpera = pera.split(" ")
let displayPera = document.getElementById("demo")
displayPera.innerHTML = pera
let userInput = document.getElementById("userInput")
let userarr
let ind
let time = 0
let starting
let ending = false
let startTheGame = true
let mis = document.getElementById("mistake")
let mistake = 0
let results = document.getElementById("result")
let prev

userInput.addEventListener("input", () => {
    userInput.value = userInput.value.replace(/\s+/g, ' ').trimStart()
    if (!ending) {
        if (startTheGame) {
            starting = setInterval(gameStarted, 1000);
        } else if (userInput.value.length === pera.length) {
            userInput.disabled = true;
            clearInterval(starting);
            displayResults();
        }
        startTheGame = false
        userarr = userInput.value.split(" ").filter(word => word !== "")
        ind = userarr.length - 1;
        if (userInput.value[userInput.value.length - 1] === " " && userarr.length > 0 || userInput.value[userInput.value.length - 1] === ".") {
            if (userarr[ind] !== arrpera[ind]) {
                if(ind != prev){
                    mistake++
                    mis.innerHTML = mistake
                    prev = ind
                }
            }
            changePera();
        }
    }
});
function changePera(){
    let total  = 0
    arrpera.map((item,index)=>{
        if(ind >= index){total += item.length}
    })
    total += ind
    let completed = pera.slice(0 , total)
    let pending = pera.slice(total)
    displayPera.innerHTML =""
    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    span1.style.cssText ="background-color: yellowgreen;"
    displayPera.appendChild(span1)
    displayPera.appendChild(span2)
    span1.innerHTML = completed
    span2.innerHTML = pending    
}
function gameStarted(){
    time++
    document.getElementById("timer").innerHTML =`${time} s`
    if(time == 60){   
        userInput.disabled = true 
        displayResults()    
        ending = true
        clearInterval(starting)
    }
}
function displayResults(){
    let npm = (ind +1) / 1
    npm = npm.toFixed(2)
    let accuracy = (((ind + 1) - mistake) / (ind + 1)) * 100;
    accuracy = accuracy.toFixed(2)
    let wpm = ((ind+1) - mistake) / 1
    wpm = wpm.toFixed(2)
    let span1 = document.createElement("span")
    span1.innerHTML =`____NPM : ${npm}____`
    let span2 = document.createElement("span")
    span2.innerHTML =`____Accuracy : ${accuracy}____`
    let span3 = document.createElement("span")
    span3.innerHTML =`____wpm : ${wpm}____`
    results.appendChild(span1)
    results.appendChild(span2)
    results.appendChild(span3)
}
function startTest(){
    let x = Math.random() * 10;
    toging = Math.round(x)
    pera = togglePera[toging]
    arrpera = pera.split(" ")
    displayPera = document.getElementById("demo")
    displayPera.innerHTML = pera
    results.innerHTML =""
    document.getElementById("timer").innerHTML ="0s"
    userInput.disabled = false
    userInput.value = ""
    userarr = undefined
    ind = undefined
    time = 0
    starting = undefined
    ending = false
    startTheGame = true
    mistake = 0
    mis.innerHTML = 0
    prev = undefined
}
