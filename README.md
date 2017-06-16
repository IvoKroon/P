# Project P

De bedoeling van het spel is om als speler de raket door het meteorietenveld heen te bewegen en zoveel mogelijk punten te behalen.
Dit doe je doormiddel van de pijltjes toetsen.


Voor dit project maak ik gebruik van Pixijs. Hier voor heb ik 2 files gebruikt.
De pixijs.js dit zorgt ervoor dat het spel draait en de pixi.js.d.ts 
dit bestand maakt het mogelijk dat typescript de Pixijs code snapt.

<b>Link</b> naar game https://ivokroon.github.io/P/

#### Gedaan
- [x] Singleton opgezet.
- [x] Bewegende achtergrond
- [x] Raket beweegt
- [x] Asteroid beweegt
- [x] Strategy pattern
- [x] Hit detectie
- [x] Observer
- [x] Interface
- [x] Namespace
- [x] Abstract class
- [x] Enum class
- [x] Pixi js libirary

Encapulation - Alles staat standaard op private als iets nodig is buiten de class heb ik deze varriable op protected of public gezet.

Composition - Dit is vooral te vinden in de background class deze class maakt meerdere stars aan.

Inheritance - Iheritance heb ik door mijn hele project gebruikt. Ik gebruik het in combinatie met pixi en in combinatie met eigen code. Voor pixi overerf ik bijvoorbeeld van de sprite class.

Singeleton - Is tevinden in de game class en wordt meerdere keren in de code gebruikt.
Stratagy - De strategy pattern heb ik gebruikt bij de raket hier kan de state veranderen van flying naar explode.

Observer - Dit heb ik toegepast bij de handeling van de keys. Deze wordt geimplementeerd bij de rocket en bij het gameover scherm. Hier heb ik meerdere notify's gemaakt.

Interface - Voor de observer heb ik interfaces gebruikt.

Static - de Utils zijn allemaal static functies die door het hele project worden gebruikt.

Abstract - Abstract heb ik gebruikt bij de rocket class elke overerving van deze class moet een move functie hebben.

Namespaces - Namespaces heb ik gebruikt bij Util ik heb de verschillende soorten utils verdeelt over 3 verschillende classes zodat dit wat overzichtelijker is geworden.

Polymorphism - Polymorphism komt op meerdere plaatsen terug bijvoorbeeld ImageObject. Ook maak ik veel gebruik van de classes van PixiJs

Enumerations - De enums heb ik gebruikt om te kijken welke knoppen er ingedrukt worden.

Game loop - De gameloop gebruik ik om het hele spel te laten draaien.

Library - Als library heb ik PixiJs gebruikt hier heb ik d.ts voor gevonden deze is nodig om de code om te zetten naar javascript anders geeft het errors. In de index.html heb ik voor de scripts voor de game ook nog een pixijs geimplementeerd zodat de code werkt.

#### UML

![UML](https://raw.githubusercontent.com/IvoKroon/P/master/diagram.png)
