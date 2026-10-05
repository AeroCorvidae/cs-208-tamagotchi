function goto(link) {
    if(window.location.hostname == "joseph-forbes.github.io") {
        // Running on repo
        window.location.href = "cs-208-tamagotchi/" + link;
    } else {
        window.location.href = link;
    }
}