import React from 'react';
import '../assets/styles/style_1.css';
import '../assets/styles/style_2.css';
import '../assets/styles/style.css';
import '../assets/styles/Navbar.css';

function IndexPage() {
    return (
    <>
      <div className="home-team">
        <div className="home-container03">
          <div className="home-project-container">
            <h6 className="home-text04"><span>Nasz Projekt</span></h6>
            {/* Here provide a photo/logo + ref to a converter page */}
          </div>
          <div className="home-container04">
            <h6 className="home-text04"><span>Nasz Zespół</span></h6>
          </div>
          <div className="home-container05">
            <img
              alt="opiekunCzarkowski"
              src='src/assets/images/Opiekun.jpg' // Adjust path if needed
              className="home-image1"
            />
            <span className="home-text06">Krzysztof Czarkowski</span>
            <span className="home-text07">Opiekun zespołu</span>
          </div>
          <div className="home-container06">
          <div className="home-container07">
              <img
                alt="image"
                src="public/playground_assets/biliniok.jpg"
                className="home-image2"
              />
              <span className="home-text08">Jakub Biliński</span>
              <span className="home-text09">
                <span>Kierownik zespołu <br /> Backend Developer</span>
              </span>
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="public/playground_assets/zeglin.jpg"
                className="home-image3"
              />
              <span className="home-text12">Jakub Żegliński</span>
              <span className="home-text13">
                <span>Sekretarz zespołu <br /> Frontend Developer</span>
              </span>
            </div>
            <div className="home-container09">
              <img
                alt="image"
                src="public/playground_assets/ryzyk.jpg"
                className="home-image4"
              />
              <span className="home-text14">Michał Ryżyk</span>
              <span className="home-text15">Backend Developer</span>
            </div>
            <div className="home-container10">
              <img
                alt="image"
                src="public/playground_assets/wojciechowski2.jpg"
                className="home-image5"
              />
              <span className="home-text16">Szymon Wojciechowski</span>
              <span className="home-text17">Backend Developer</span>
            </div>
            <div className="home-container11">
              <img
                alt="image"
                src="public/playground_assets/kaszuba.jpg"
                className="home-image6"
              />
              <span className="home-text18">Hubert Kaszuba</span>
              <span className="home-text19">Backend Developer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-schedule">
        <div className="home-container13">
          <h2 className="home-text22 text2XL">
            <span className="home-text23">Przebieg spotkan</span>
          </h2>
          <div className="har-first">
            <span>Data</span> Opis
          </div>
          <div className="har">
            <span>09.11.2023</span> Spotkanie organizacyjne
          </div>
          <div className="har">
            <span>14.11.2023</span> Przedstawienie tematów projektów
          </div>
          <div className="har">
            <span>21.11.2023</span> Dyskusja na temat zaproponowanych projektów
          </div>
          <div className="har">
            <span>28.11.2023</span>
            <span>Wybór projektu + wstępny podział obowiązków w zespole</span>
          </div>
          <div className="har">
            <span>05.12.2023</span>
            <span>Finalny podział obowiązków + przygotowanie do pierwszych prac z frezarką CNC</span>
          </div>
          <div className="har">
            <span>12.12.2023</span>
            <span>Pierwsze zapoznanie z frezarką CNC</span> <br />
            <span className="canceled-text">Spotkanie odwołane przez prowadzacego</span>
          </div>
          <div className="har">
            <span>19.12.2023</span>
            <span>Pierwsze zapoznanie z frezarka CNC</span>
          </div>
          <div className="har">
            <span>09.01.2024</span>
            <span>Praca z frezarka, sprawozdanie z prac nad projektem</span>
          </div>
          <div className="har">
            <span>13.01.2024</span>
            <span>Nowy kod - nowe problemy, tworzenie schematów dot. działania aplikacji.</span>
          </div>
          <div className="har">
            <span>20.01.2024</span>
            <span>Szczegółowa praca z wykorzystaniem sprzętu. Obrazowanie napotkanych problemów. Review pracy.</span>
          </div>
          <div className="har">
            <span>27.01.2024</span>
            <span>Kontrola prac, tworzenie widoków, wspólna budowa specyfikacji i dokumentacji.</span>
          </div>
          <div className="har">
            <span>08.02.2024</span>
            <span>08.02.-22.02 - przerwa w związku z odbywającymi się sesjami</span>
          </div>
          <div className="har">
            <span>28.02.2024</span>
            <span>Omówienie postępów prac w zespole od ostatniego spotkania oraz nowy przydział obowiązków</span>
          </div>
          <div className="har">
            <span>06.03.2024</span>
            <span>Aktywne prace nad optymalizacją algorytmu skanującego znaki, prace modernistyczne nad serwisem</span>
          </div>
          <div className="har">
            <span>13.03.2024</span>
            <span>Rozpoczęcie prac nad wycinaniem po zewnętrznych krawędziach, projektowanie logotypu,  kontunacja prac nad dotychczasowymi zadaniami</span>
          </div>
          <div className="har">
            <span>27.03.2024</span> Dyskusja nt prezentacji projektu, utworzenie skryptu do exportu fontów z plików pdf, przydział nowych zadań dla zespołu 
          </div>
          <div className="har">
            <span>04.04.2024</span> Aktualizacja oraz testy funkcji czyszczącej materiał żywiczny. Wykonaliśmy pierwsze działania z grawerunkiem tekstu z plików pdf. 
          </div>
        </div>
      </div>
    </>
    );
  }
  
  export default IndexPage;