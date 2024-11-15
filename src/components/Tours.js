import Title from './Title';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, price, title, days, location, info } = tour;
          return (
            <article key={id} className="tour-card">
              {' '}
              {/* Adicionando classe para o card */}
              <div className="tour-img-container">
                <img src={image} alt={title} className="tour-img" />{' '}
                {/* Adicionando classe para imagem */}
                <div className="tour-date">{date}</div>{' '}
                {/* Melhorando a estrutura da data */}
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
              </div>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{' '}
                  {location}
                </p>
                <p>{days} days</p>
                <p>from ${price}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
