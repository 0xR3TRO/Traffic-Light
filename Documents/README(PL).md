## Opis projektu

### Cel:

Projekt "Traffic Light Interface" ma na celu stworzenie interaktywnego widgetu, który symuluje działanie sygnalizacji świetlnej dostępnej w przeglądarce internetowej. Narzędzie ma być przydatne zarówno w celach edukacyjnych, jak i dla deweloperów oraz projektantów interfejsów użytkownika. Aplikacja pozwala użytkownikom na zrozumienie zasad działania świateł drogowych i może być wykorzystana jako element wizualny na stronach internetowych lub w materiałach edukacyjnych.

### Opis funkcji:

- **Symulacja świateł drogowych:** Użytkownicy mogą obserwować, jak zmieniają się światła na sygnalizatorze w ustalonych cyklach.
- **Personalizacja cykli:** Możliwość dostosowania długości czasu, przez jaki każde światło (czerwone, żółte, zielone) będzie aktywne.
- **Interaktywność:** Użytkownicy mogą ręcznie zmieniać światła, aby lepiej zrozumieć ich działanie.
- **Zastosowanie na stronach internetowych:** Widget może być łatwo osadzony na stronach internetowych za pomocą krótkiego fragmentu kodu.

## Analiza wymagań:

### Wymagania funkcjonalne:

- **Symulacja cyklu świateł:** Widget automatycznie zmienia światła (czerwone, żółte, zielone) w zdefiniowanym czasie.
- **Personalizacja cyklu:** Użytkownicy mogą ustawiać długość trwania każdego światła za pomocą suwaka lub pól tekstowych.
- **Tryb manualny:** Użytkownik może przełączać się między trybem automatycznym a manualnym, gdzie sam steruje zmianą świateł.
- **Responsive design:** Widget działa poprawnie na różnych rozdzielczościach ekranów (komputer, tablet, smartfon).

### Wymagania niefunkcjonalne:

- **Płynność animacji:** Zastosowanie płynnych przejść pomiędzy zmianami świateł.
- **Szybkość działania:** Widget powinien działać bez opóźnień zarówno w trybie automatycznym, jak i manualnym.
- **Interfejs użytkownika:** Prosty, minimalistyczny i intuicyjny design, który odzwierciedla wygląd prawdziwej sygnalizacji świetlnej.

## Projekt interfejsu:

### Szkice/wizualizacje interfejsu:

- _Strona główna:_ Wyświetlony sygnalizator świetlny z trzema kolorami (czerwony, żółty, zielony) oraz panel sterowania umożliwiający dostosowanie długości cyklu.
- _Panel personalizacji:_ Suwaki lub pola tekstowe pozwalające ustawić czas trwania każdego światła.
- _Tryb manualny:_ Przycisk umożliwiający ręczne przełączanie świateł.

### Mapa strony:

- _Strona główna_
  - Symulator świateł
  - Panel personalizacji (czas trwania świateł)
  - Przełącznik trybu automatycznego/manualnego

## Architektura systemu:

### Opis struktury danych:

Aplikacja będzie przechowywać dane dotyczące ustawień cyklu świateł oraz ich aktualnych stanów:

- **Parametry cyklu:** Przechowuje długość trwania każdego światła (czerwone, żółte, zielone).
- **Stan sygnalizacji:** Przechowuje informację o tym, które światło jest aktualnie aktywne.

### Diagramy architektury:

Architektura aplikacji będzie oparta na klasycznej strukturze MVC:

- **Model:** Zarządza logiką zmiany świateł oraz przechowuje ustawienia cyklu.
- **Widok (View):** Odpowiada za wizualizację sygnalizacji oraz interfejs użytkownika.
- **Kontroler (Controller):** Łączy logikę modelu z widokiem i steruje interakcjami użytkownika.

## Implementacja:

### Opis technologii:

- **Frontend:** HTML, CSS, JavaScript (React.js lub Vue.js).
- **Backend:** Może być wykorzystany do rozszerzeń, takich jak API do dalszych integracji, np. dane o ruchu drogowym.
- **Baza danych:** Na tym etapie aplikacja nie wymaga trwałej bazy danych, jednak możliwe jest późniejsze rozszerzenie o integracje z bazami danych (np. do przechowywania statystyk użytkowania).

### Struktura kodu:

- _Katalogi/pliki_: Oddzielne komponenty dla sygnalizacji świetlnej, panelu personalizacji oraz trybu manualnego.
- _Style pisania kodu_: Modułowe podejście z czytelnymi komentarzami i przestrzeganiem standardów ES6+ w JavaScript.

## Testowanie:

### Plan testów:

- **Testy jednostkowe:** Sprawdzenie poprawności logiki zmiany świateł oraz personalizacji cyklu.
- **Testy integracyjne:** Sprawdzenie, czy wszystkie elementy (sygnalizator, panel personalizacji, tryb manualny) działają razem bez problemów.
- **Testy interfejsu użytkownika:** Upewnienie się, że widget działa na różnych rozdzielczościach i urządzeniach.
- **Testy wydajnościowe:** Testowanie płynności działania animacji oraz reakcji na zmiany ustawień.

### Procedury testowania:

- Przygotowanie zestawu przypadków testowych, które sprawdzą każdą funkcję widgetu.
- Regularne testowanie na różnych przeglądarkach i urządzeniach mobilnych.
- Raportowanie i naprawa wykrytych błędów.

## Wdrożenie i konserwacja:

### Plan wdrożenia:

- **Etapy wdrażania:**
  - Implementacja podstawowej wersji widgetu.
  - Testy funkcjonalne i wydajnościowe.
  - Publikacja jako wtyczka lub widget osadzany na stronach.
- **Terminy:** Określenie harmonogramu dla każdego etapu, od wdrożenia do publikacji.

### Procedury konserwacji:

- **Wsparcie techniczne:** Ustanowienie kanału wsparcia dla użytkowników w przypadku problemów z widgetem.
- **Aktualizacje:** Regularne aktualizacje w zależności od feedbacku oraz wprowadzenie nowych funkcji (np. dodatkowe opcje personalizacji).

## Harmonogram:

### Plan projektu:

- **Etapy realizacji:** Podział na konkretne zadania (np. projektowanie interfejsu, implementacja logiki zmiany świateł, testowanie).
- **Terminy:** Określenie czasu potrzebnego na realizację każdego zadania.

## Kosztorys:

### Szacunkowe koszty:

- **Rozwój aplikacji:** Koszty związane z wynagrodzeniem zespołu programistów oraz testów.
- **Koszty utrzymania:** Hosting, opłaty za wsparcie techniczne oraz ewentualne usługi zewnętrzne.
