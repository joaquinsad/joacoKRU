import "./header.css";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav-links">
        <Link to="/home">
          <button>home</button>
        </Link>
        <Link to="/ligas">
          <button>ligas</button>
        </Link>
        <Link to="/contactos">
          <button>contactos</button>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/home"
          element={
            <div className="main1">
              <h1>ESPORTS WEB</h1>
              <img
                src="https://www.hd-tecnologia.com/imagenes/articulos/2017/04/Las-retransmisiones-de-los-eSports-en-2017-ya-llevan-a-mas-de-665-millones-de-espectadores-en-Youtube-y-Twitch-2.jpg"
                alt="esports"
              />
              <h5>
                Los deportes electrónicos, también llamados ciberdeportes1​ o
                esports,2​3​ son competiciones de videojuegos que se han
                convertido en eventos de gran popularidad.4​ Por lo general, los
                deportes electrónicos son competiciones de videojuegos
                multijugador, particularmente entre jugadores profesionales. Los
                géneros más comunes en los videojuegos asociados a los esports
                son: estrategia en tiempo real, disparos en primera persona y
                arenas de batalla multijugador en línea (conocido por sus siglas
                en inglés MOBA, videojuego multijugador de arena de batalla en
                línea). Torneos como The International (el torneo anual del
                videojuego Dota2 por la compañía Valve Corporation), el “League
                of Legends World Championship” (torneo mundial del videojuego
                League of Legends por la compañía Riot Games), la Battle.net
                World Championship Series (una serie de torneos de los diversos
                títulos de la compañía Blizzard Entertainment), el Evolution
                Championship Series (evento anual que se centra exclusivamente
                en los juegos de lucha), la Intel Extreme Masters (serie de
                torneos internacionales de deportes electrónicos celebrados en
                diferentes países alrededor del mundo por la compañía Intel) y
                el Smite World Championship (campeonato mundial del videojuego
                Smite) entre otros, proveen al público de transmisiones en vivo
                de sus competiciones, así como premios monetarios y salarios a
                los competidores. Los deportes electrónicos o eSports han
                revolucionado el panorama del entretenimiento y la competición a
                nivel global. Este fenómeno ha creado nuevas oportunidades para
                jugadores, desarrolladores y organizadores de eventos, generando
                un ecosistema económico y cultural único. La convergencia de
                tecnología, habilidad y estrategia en los eSports ha atraído a
                una audiencia diversa y apasionada, transformando la manera en
                que se consume y se participa en el deporte moderno. A medida
                que la industria madura, se enfrentan nuevos desafíos y
                oportunidades, desde la regulación y la profesionalización hasta
                la integración con los deportes tradicionales y los medios de
                comunicación convencionales. Aunque las competiciones siempre
                han formado parte de la cultura de los videojuegos, estas
                competiciones han experimentado un gran aumento de popularidad,
                tanto en participación como en audiencia, desde finales de los
                años 2000. Este aumento ha ido ligado al desarrollo de los
                videojuegos, que actualmente está enfocado en facilitar la
                competición entre jugadores. En el año 2015 los títulos más
                exitosos en competiciones profesionales fueron Dota 2, League of
                Legends (ambos pertenecientes al género MOBA) y Counter-Strike:
                Global Offensive, un videojuego de disparos en primera
                persona.5​ Cabe destacar que existe un predominio de hombres
                entre los jugadores y espectadores de este tipo de deporte.
                Aproximadamente el 85% de los que ven los deportes electrónicos
                son hombres, y el 15% restantes, mujeres. El 60% de todos estos
                se concentran entre las edades de 18 y 34.[cita requerida]
              </h5>
            </div>
          }
        />
        <Route
          path="/ligas"
          element={
            <div className="main1">
              <h1>academia</h1>
              <h4>joaquin,mati,joel,dina,daniel</h4>
              <h1>main</h1>
              <h4>joaquin,mati,joel,dina,daniel</h4>
            </div>
          }
        />
        <Route
          path="/contactos"
          element={
            <div className="main1">
              <h1>email:reales2esports@gmail.com</h1>
              <h1>mandanos un mensaje a nuestro correo electronico</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default Header;
