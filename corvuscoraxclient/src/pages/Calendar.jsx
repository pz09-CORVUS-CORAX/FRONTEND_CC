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
  // Proszę dodawać pozostałe rekordy tutaj
  { date: '04.04.2024', content: 'Aktualizacja oraz testy funkcji czyszczącej materiał żywiczny. Wykonaliśmy pierwsze działania z grawerunkiem tekstu z plików pdf. Osiągnięcie etapu końcowego z tworzeniem galerii zdjęć na stronę projektu.' },
  { date: '10.04.2024', content: 'Aktualizacja harmonogramu i przebiegu prac na stronie + dodanie nowych zdjęć na stronę.' },
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
