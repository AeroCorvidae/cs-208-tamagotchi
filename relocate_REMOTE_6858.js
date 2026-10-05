function goto(link) {
    if(window.location.hostname == "github") {
        // Running on repo
        window.location.href = "cs-208-tamagotchi/" + link;
    } else {
        window.location.href = link;
    }
}