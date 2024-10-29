// // components/BrandsSlider.js
// import dynamic from 'next/dynamic';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import SwiperCore,  {Autoplay} from 'swiper';

// // Initialize Swiper modules
// SwiperCore.use([Autoplay]);

// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// const BrandsSlider = () => {
//   const brandLogos = [
//     "/path/to/logo1.png",
//     "/path/to/logo2.png",
//     "/path/to/logo3.png",
//     // Add more logos as needed
//   ];

//   return (
//     <div className="overflow-hidden">
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={5} // Adjust this based on your design
//         loop={true}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         speed={5000} // Adjust for scrolling speed
//       >
//         {brandLogos.concat(brandLogos).map((logo, index) => (
//           <SwiperSlide key={index}>
//             <img src={logo} alt={`Brand ${index}`} className="w-full" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BrandsSlider;
