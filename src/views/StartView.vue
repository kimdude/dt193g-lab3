<template>
    <!-- Banner -->
    <div id="banner">
    </div>
    <!-- Om draman -->
    <section>
        <h2>Dramaserier: <strong>mer specifikt - K-dramas</strong></h2>
        <div id="container1">
            <div id="textContainer">
                <p><strong>
                    Flera år tillbaka startade en koreansk boom, något som kom att kallas <em>Hallyu</em> och betyder <em>koreanska vågen</em>. Den koreanska vågen innebar
                    en enorm global spridning av koreansk popkultur. Både koreansk film, musik och mode blev populärt världen över.
                </strong></p>
                <p>
                    När folk hör 'k-dramas' är de ofta väldigt kritiska. Det var jag med. Man tänker på överdrivna familjedraman där någon alltid skriker och gråter. 
                    Orealistiska kärlekshistorier med med med bisarra plottar. Men när jag tittade på en serie och insåg att det är ett K-drama, märkte jag att det finns 
                    många olika typer av K-dramas. Två sådana exempel som nog de flesta känner igen är <strong>Squid Games</strong> och <strong>Parasite</strong>.
                </p>
                <p>
                    K-dramas kommer i alla genrer och det finns alltid något att titta på, oavsett vilket humör man är på. Ja, många har bisarra plottar och vissa kretsar runt 
                    skrikigt familjedrama som en bollywood film. Fast för mig var det just de bisarra plottarna höll kvar mig, som <strong>The School Nurses Files</strong> och <strong>Mr Queen</strong>. 
                    Det finns många kreativa k-dramas med unika plottar. Många håller dessutom spänningen igång på ett annat sätt än serier från västvärlden, såsom <strong>Hellbound</strong>
                    eller <strong>The Glory</strong>. Också kärlekshistorierna berättas på ett annat sätt - för det mest helt utan att paret ens pussas! Ändå "shippar" man de mer än i 
                    amerikanska serier, där de ibland visar lite väl mycket.
                </p>
                <p>
                    Bortsett från bredden som k-dramas kommer i, är det också fascinerande att se deras kultur speglas. Både de fina delarna, som historisk klädsel och matkultur, och 
                    också de mörkare delarna, som korruptionen, den sociala pressen och mobbningen. I en del draman tänker man att det är alldeles för överdrivet, "en skola skulle aldrig låta elever
                    agera så vis" eller "Man skulle inte ha makten att göra så bara för man är känd". Men läser man lite om Sydkorea inser man ganska snabbt att jo, det händer. Att det ser
                    ut på så vis är så klart väldigt sorgligt. Att belysa problemen i tv är nog ett sätt för dem att sätta press på samhället för förbättring. Samtidigt säljer det också
                    bra, eftersom det inte finns något folk är mer intresserade av än tragiska historier.
                </p>
                <p>
                    Jamen, bort från mörka sidan igen och tillbaka till poängen. K-dramas finns och dem är bra. Ger man de en chans lovar jag att det finns något för alla. 
                </p>
            </div>
            <!-- Faktaruta -->
            <div :style="{height: factHeight}" id="fact">
                <strong class="factHeading">Vad är k-drama?</strong>
                <p>Uttrycket k-drama står för <em>koreanskt drama</em>. Strikt sett beskriver det kroeanska tv-serier, men används även för film.</p>
                <strong>Saker som ofta speglas</strong>
                <ul>
                    <li>
                        <strong class="intro">Mobbning i skola och på arbetsplatsen</strong> är ett stort problem i Sydkorea. Mobbningen innebär många gånger <strong>grovt våld</strong> och kan 
                        sluta i självmord - ett annat stort  och välkänt problem. En orsak är landets <strong>hierarkiska kultur</strong>.
                        <br>
                        <small>Exempel: The Glory</small>
                    </li>
                    <li>
                        <strong class="intro">Skönhetsingrepp</strong> är extremt vanligt i Sydkorea. Det är inte heller ovanligt att få det som födelsedags- eller examenspresent.
                        <strong>Ca 20% av kvinnor har genomgått en skönthetsoperation</strong>. Men det är inte heller ovanligt bland män, där andelen fortsätter öka.
                        <br>
                        <small>Exempel: My identity is Gagnam beauty</small>
                    </li>
                    <li>
                        <strong class="intro">The Burning Sun scandal</strong> är ett exempel på korruption, elitism och exploatering i Syd korea. 2019 avslöjades att en grupp kändisar, 
                        poliser och klubben The Burning Sun var inblandade i <strong>prostitution, droghandel och "date rape"</strong>. I chattar hittades olagliga inspelningar som blev avgörande 
                        för utredningen.
                        <br>
                        <small>Exempel: Stranger</small>
                    </li>
                </ul>
                <div id="readBtn">
                    <button @click="expandFact">{{ readBtn }}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const factHeight = ref("500px");
    const readBtn = ref("Läs mer");
    const expanded = ref(false);

    function expandFact() {
        if(expanded.value === false) {
            expanded.value = true;
            factHeight.value = "fit-content";
            readBtn.value = "Läs mindre";
        } else {
            expanded.value = false;
            factHeight.value = "500px";
            readBtn.value = "Läs mer";
        }
    }
</script>

<style scoped>
    #banner {
        height: 400px;
        background-image: url("@/assets/images/seoul2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    /* Text layout */
    h2 {
        margin-left: 7vw;
    }

    #container1 {
        display: flex;
        justify-content: space-around;
    }

    #textContainer {
        max-width: 50vw;
    }

    #fact {
        position: relative;
        padding: 20px 2vw 50px 2vw;
        max-width: 20vw;
        border-radius: 15px;
        border: solid 3px #e2a93f;
        background-color: #ECE4D4;
        overflow: hidden;
    }

    li:not(:first-of-type) {
        margin-top: 15px;
    }

    .factHeading {
        font-size: 1.2rem;
    }

    .intro {
        color:#E47DAB;
    }

    #readBtn {
        position: absolute;
        display: flex;
        bottom: 0;
        left: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
        justify-content: center;
        background-color: rgba(226, 169, 63, 0.8);
    }

    button {
        background-color: #ECE4D4;
        border: none;
        border-radius: 10px;
        box-shadow: inset 0px -2px 0px #E47DAB;
        font-size: 1rem;
    }

    /* Skärmar under 950px */
    @media screen and (max-width: 950px) {
        h2 { margin-left: 0; text-align: center; }
        #container1 { flex-direction: column; align-items: center; }
        #fact { margin-top: 20px; max-width: 50vw; }
    }

    /* Skärmar under 800px */
    @media screen and (max-width: 950px) {
        #textContainer { max-width: 80vw;}
        #fact { max-width: 70vw; }
    }

</style>