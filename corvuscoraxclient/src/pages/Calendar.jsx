import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';


const harData = [
  { date: '09.11.2023', content: 'Spotkanie organizacyjne' },
  { date: '14.11.2023', content: 'Przedstawienie tematów projektów' },
  { date: '21.11.2023', content: 'Dyskusja na temat zaproponowanych projektów + Wybranie systemu kontroli wersji, oraz podział planowania jak i na role. Utworzenie profili na github, oraz powiązanie ich z projektem. Ostateczny wybór projektu i rozpoczęcie researchu oraz Nauka' },
  { date: '28.11.2023', content: ' Wybór projektu + wstępny podział obowiązków w zespole + pierwsze próby wzgłębienia się w g-code\'a i typy funkcji przygotowawczych G od 01 do 20 oraz M od 01 do 09.'},
  { date: '05.12.2023', content: ' Wspólna ocena zadań powierzonych zespołowi + przygotowanie do pierwszych prac z frezarką CNC + Wybór serwisu Web jako platformy z której warstwy będzie cała aplikacja obsługiwana.'},
  { date: '12.12.2023', content: ' Rozpoczęcie prac nad utworzeniem kodu testowego dla litery A + programu do wyrównania powierzchni bloku żywicznego + Powstanie kodu dla parsersa, który będzie niezbędny do dalszej pracy.'},
  { date: '19.12.2023', content: 'Pierwsze zapoznanie z frezarka CNC, Zagłębianie się zespołu w wykorzystywanych technologiach. Review pierwszych problemow. + Rozwiązywanie problemów uniemożliwiających dalsze prace z frezarką. Powstanie prototypu kodu pozwalającego wydzielić zapis z pdf na zapis w postaci wektorów/glifów.'},
  { date: '09.01.2024', content: 'Praca z frezarka, sprawozdanie z prac nad projektem, tworzenie schematów dot. działania aplikacji .'},
  { date: '13.01.2024', content: ' Nowy kod - nowe problemy z UI programu, tworzenie schematów dot. działania aplikacji część 2 + pierwsze prace nad utworzeniem nowych bloków żywicznych + Ukończenie kodu niezbędnego do działania aplikacji - przy pomocy którego mamy komputerowo rozpoznawalny zapis z pliku pdf.  Powstaje skrypt czyszczący/plantujący powierzchnię przy wykorzystaniu czystego Gcode, natomiast wymaga dodatkowej integracji z frezarką '},
  { date: '20.01.2024', content: ' Szczegółowa praca z wykorzystaniem sprzętu. Obrazowanie napotkanych problemów. Review pracy. + pierwsze udane prace nad nowymi blokami żywicznymi do wyrycia frezarką + Rozwiązywanie problemów matematycznych, zaistniałych których rozwiązanie pozwoli nam ukończenie prac z programem. Nauka technologii potrzebnych do postawienia programu w postaci Serwisu WEB.'},
  { date: '27.01.2024', content: 'Kontrola prac, tworzenie widoków, wspólna budowa specyfikacji i dokumentacji.'},
  { date: '08.02.2024', content: ' 08.02.-22.02 - przerwa w związku z odbywającymi się sesjami.'},
  { date: '28.02.2024', content: 'Omówienie postępów prac w zespole od ostatniego spotkania oraz nowy przydział obowiązków.'},
  { date: '06.03.2024', content: 'Aktywne prace nad optymalizacją algorytmu skanującego znaki, prace modernistyczne nad serwisem.'},
  { date: '13.03.2024', content: 'Rozpoczęcie prac nad wycinaniem po zewnętrznych krawędziach, projektowanie logotypu,  kontunacja prac nad dotychczasowymi zadaniami.'},
  { date: '27.03.2024', content: 'Dyskusja nt prezentacji projektu, utworzenie skryptu do exportu fontów z plików pdf, przydział nowych zadań dla zespołu. Utworzenie i rozpoczęcie kodowania galerię zdjęć.'},
  { date: '04.04.2024', content: 'Aktualizacja oraz testy funkcji czyszczącej materiał żywiczny. Wykonaliśmy pierwsze działania z grawerunkiem tekstu z plików pdf. Osiągnięcie etapu końcowego z tworzeniem galerii zdjęć na stronę projektu.' },
  { date: '10.04.2024', content: 'Aktualizacja harmonogramu i przebiegu prac na stronie + dodanie nowych zdjęć na stronę.' },
  // Proszę dodawać pozostałe rekordy tutaj
];

function HarEntry({ date, content }) {
  return (
    <div className="har">
      <span className="har-date">{date}</span>
      <div className="har-content">{content}</div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="home-schedule">
      <div className="home-container13">
        <h2 className="home-text22 text2XL">
          <span className="home-text23">Przebieg prac</span>
        </h2>
        <div className="har-first">
          <span>Data</span> Opis
        </div>
        {harData.map((entry) => (
          <HarEntry key={entry.date} date={entry.date} content={entry.content} />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
