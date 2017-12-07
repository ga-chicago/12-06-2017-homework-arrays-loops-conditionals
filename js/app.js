//<!-- Easy Going -->

//for (i = 1; i <= 20; i++) {
//    console.log(i);
//};

//<!-- Get Even -->

//for (i = 0; i <=200 ; i+=2) {
//    console.log(i);
//};

//<!-- Excited Kitten -->

const qittyQuotes = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

const randomQuotes = qittyQuotes[Math.floor(Math.random() * qittyQuotes.length)];

        for (i = 0; i <= 20; i++) {

            if (i % 2 == 0) {
                console.log(randomQuotes)
            } else if (i % 2 != 0) {
                console.log(i);
            };
                
        };
