
import "./Home.css";

export const Home = () => {
  
  const songs = [
    { title: "Bohemian Rhapsody", artist: "Queen" },
    { title: "Like a Rolling Stone", artist: "Bob Dylan" },
    { title: "Billie Jean", artist: "Michael Jackson" },
    { title: "Hotel California", artist: "Eagles" },
    { title: "Imagine", artist: "John Lennon" },
    { title: "Thriller", artist: "Michael Jackson" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Hey Jude", artist: "The Beatles" },
    { title: "Someone Like You", artist: "Adele" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses" },
    { title: "Dancing Queen", artist: "ABBA" },
    { title: "Boogie Wonderland", artist: "Earth, Wind & Fire" },
  ];
  return (
    <>
       <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {songs.map((song, index) => (
          <div key={index} className="col mb-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{song.artist}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
