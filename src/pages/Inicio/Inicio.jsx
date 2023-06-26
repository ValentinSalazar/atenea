import { Button } from "../../components/Button";

export const Inicio = () => {
  return (
    <>
      <div id="inicio" className="flex flex-col h-screen justify-center items-center animate-fade">
        <div className="relative bottom-20 flex flex-col gap-2 w-full items-center">
        <div className="logo relative w-96 md:w-full md:scale-50 md:bottom-0 small:w-80">
          <svg
            viewBox="0 0 254 42"
            fill="#212121"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.2683 0.00305176H41.7357V7.76457H77.2683V0.00305176Z"
              fill="#212121"
            />
            <path
              d="M63.3022 6.06171H55.5641V41.6988H63.3022V6.06171Z"
              fill="#212121"
            />
            <path
              d="M133.811 -6.10352e-05H126.073V41.9874H133.811V-6.10352e-05Z"
              fill="#212121"
            />
            <path
              d="M161.005 -6.10352e-05H153.267V41.9874H161.005V-6.10352e-05Z"
              fill="#212121"
            />
            <path
              d="M133.811 41.9999H126.073L153.267 -6.10352e-05H161.008L133.811 41.9999Z"
              fill="#212121"
            />
            <path
              d="M35.7328 25.4013L31.3682 17.1819L26.594 8.18481L22.2513 -6.10352e-05H22.2107L17.868 8.18481L9.15527e-05 41.8557H8.72613L22.2326 16.4042L27.0067 25.4013L18.2744 41.8557H27.0005L31.3682 33.6238L35.7359 41.8557H44.462L35.7328 25.4013Z"
              fill="#212121"
            />
            <path
              d="M244.376 25.4013L240.011 17.1819L235.237 8.18481L230.895 -6.10352e-05H230.854L226.511 8.18481L208.643 41.8557H217.369L230.876 16.4042L235.65 25.4013L226.918 41.8557H235.644L240.011 33.6238L244.382 41.8557H253.105L244.376 25.4013Z"
              fill="#212121"
            />
            <path
              d="M86.2006 41.9717H117.272V34.2102H97.1777L104.853 26.5114L110.365 20.9827L104.853 15.454L97.2152 7.79279H117.272V0.00305176H86.1912V7.79279L99.3413 20.9827L86.1912 34.1694L86.2319 34.2102H86.2006V41.9717Z"
              fill="#212121"
            />
            <path
              d="M201.299 41.9717H170.225V34.2102H190.322L182.643 26.5114L177.131 20.9827L182.643 15.454L190.281 7.79279H170.225V0.00305176H201.305V7.79279L188.155 20.9827L201.305 34.1694L201.265 34.2102H201.299V41.9717Z"
              fill="#212121"
            />
          </svg>
        </div>
        <div className="text-center text-2xl font-akshar uppercase tracking-bigSpacing 
        md:text-4xl md:tracking-bigSpacingL 
        lg:tracking-bigSpacingXL
        small:text-lg">
          <h3>Designs & Development</h3>
        </div>
        </div>
        <Button text="CONTACTO" />
      </div>
    </>
  );
};
