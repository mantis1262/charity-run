import { Link } from 'react-router-dom';
import scss from './IconYouTube.module.scss';

export const IconYouTube = () => {
  return (
    <>
      <Link
        className={scss.link}
        to="https://www.youtube.com/@FundacjaHematologiczna"
        target="_blank"
      >
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logos:youtube" clipPath="url(#clip0_910_2152)">
            <path
              id="Vector"
              d="M39.2368 4.63707C39.0066 3.74074 38.5576 2.92359 37.9346 2.26701C37.3115 1.61044 36.5361 1.13733 35.6856 0.894828C32.5718 0 20.0407 0 20.0407 0C20.0407 0 7.50918 0.0271552 4.3958 0.921983C3.54532 1.16453 2.76998 1.63765 2.14697 2.29422C1.52396 2.9508 1.07503 3.76792 0.844881 4.66422C-0.0969595 10.4948 -0.462358 19.3787 0.870648 24.9758C1.10079 25.8721 1.54972 26.6892 2.17273 27.3458C2.79574 28.0023 3.57109 28.4755 4.42157 28.718C7.53519 29.6128 20.0665 29.6128 20.0665 29.6128C20.0665 29.6128 32.5978 29.6128 35.7114 28.718C36.5619 28.4755 37.3372 28.0023 37.9602 27.3458C38.5832 26.6892 39.0322 25.8721 39.2623 24.9758C40.2554 19.1372 40.5617 10.2587 39.2365 4.63733"
              fill="#FF0000"
            />
            <path
              id="Vector_2"
              d="M16.0508 21.1522L26.4464 14.8067L16.0508 8.46094V21.1522Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_910_2152">
              <rect width="40" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </>
  );
};
