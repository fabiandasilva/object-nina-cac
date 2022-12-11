//**IMPORTS DE LA LIBRERIA */
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import { Swiper } from "swiper/react";

import Card from "./components/Card";
import { data } from "./db/data";
function App() {
  return (
    <div className="App">
      <h1>SLIDER CON REACT Y SWIPER</h1>
      <div className="container">
        <div className="swiperContainer">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
          >
            {data.map(({ nombre, edad_aprox, img }, id) => (
              <SwiperSlide key={id}>
                <Card edad_aprox={edad_aprox} img={img} nombre={nombre} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
}

export default App;
