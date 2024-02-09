# Intro til React - Bildedelingsapplikasjon

Dette prosjektet tar utganspunkt i eit tidligare prosjekt eg har jobba med saman med IT1-klassen min. Målet vårt der, var å lage ein relativt enkel bildedelingsapplikasjon, kor ein kunne laste opp bilete, samt kommentere og like både eigne og andre sine bilete.

## Informasjon om det gamle prosjektet

Det gamle prosjektet ligg i mappa *backend*, og skal fungere sånn nokonlunde. Det ligg ein database med litt testdata i *database.db*. Denne databasen er satt opp slik at bruker med id 1 er administrator. Denne brukaren har brukernamn *Administrator* og passord *123*

Følgande ruter og endepunkt er sett opp. Desse er fordelt i filene ruter.js og api.js

```javascript
app.post("/login", ruter.login);
app.get("/admin", sjekkAdmin, ruter.admin)
app.get("/login", ruter.loginaction)
app.get("/loggut", ruter.loggut)
app.get("/nyttBilde", sjekkLogin, ruter.nyttBilde)
app.get("/alleBilder", sjekkLogin, ruter.alleBilder)


app.post("/kommenter", sjekkLogin, api.kommenter)
app.post("/registrer", api.registrer);
app.post("/lastOpp", sjekkLogin, api.lastopp);
app.get("/bilder", sjekkLogin, api.bilder)
app.get("/brukere", sjekkAdmin, api.brukere);
app.post("/oppdatere", sjekkAdmin, api.oppdatere)
app.get("/slett/:id", sjekkAdmin, api.slett)
app.get("/kommentarer/:id", sjekkLogin, api.kommentarer)
app.post("/like/:id", sjekkLogin, api.like)
app.get("/likes/:id", sjekkLogin, api.likes)
app.get("/liked/:id", sjekkLogin, api.liked)
```

## React-prosjektet
Første oppgåve i react-prosjeket vårt, vil vere å sette opp ein nano-react-app, og byrje med å bygge login og brukarsystemet.