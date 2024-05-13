import React from 'react';

const harData = [
  { date: '09.11.2023', content: 'Spotkanie organizacyjne' },
  { date: '14.11.2023', content: 'Przedstawienie tematów projektów' },
  { date: '21.11.2023', content: 'Dyskusja na temat zaproponowanych projektów + Wybranie systemu kontroli wersji, oraz podział planowania jak i na role. Utworzenie profili na github, oraz powiązanie ich z projektem. Ostateczny wybór projektu i rozpoczęcie researchu oraz Nauka' },
  // ... more entries
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

function HarList() {
  return (
    <div className="home-schedule">
      <div className="home-container13">
        <h2 className="home-text22 text2XL">
          <span className="home-text23">Przebieg prac</span>
        </h2>
        <div className="har-first">
          <span>Data</span>
          <span>Opis</span>
        </div>
        {harData.map((entry) => (
          <HarEntry key={entry.date} date={entry.date} content={entry.content} />
        ))}
      </div>
    </div>
  );
}

export default HarList;
