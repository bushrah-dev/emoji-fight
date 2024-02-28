let fighters =[ "📺","📽️","🪓","👘","👲","🧫","🥼","🧪","🎐","🪗","🤠","🎷","🦡","🦫","🦎","🦥","🐐","🦙","🦔","🤼","👯‍♂️","👀","🦷","🗣️","🍳","🥖","🌯","🥪","🍞","🍔","🍴","🍉","🍎","🍺","🍻","🧊","😺"]

let emojiEl = document.querySelector("#emoji-el")
let btnEl = document.querySelector("#btn-el")


btnEl.addEventListener("click",  function() {
    let randomOne = Math.floor(Math.random() * fighters.length)
    let randomTwo = Math.floor(Math.random() * fighters.length)
    emojiEl.textContent = fighters[randomOne] + " vs " + fighters[randomTwo]
})