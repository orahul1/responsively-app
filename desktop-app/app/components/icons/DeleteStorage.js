import React, {Fragment} from 'react';

export default ({width, height, color, padding, margin}) => (
  <Fragment>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style="isolation:isolate"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      fill={color}
      stroke={color}
      style={{padding, margin}}
      className="deleteStorageIcon"
    >
      <defs>
        <clipPath id="_clipPath_qbuwJBHdB5UgzBtLzd9gB6R7rRnewpsN">
          <rect width="512" height="512" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_qbuwJBHdB5UgzBtLzd9gB6R7rRnewpsN)">
        <g>
          <g>
            <path
              d=" M 256 0 C 136.384 0 42.667 42.176 42.667 96 C 42.667 149.824 136.384 192 256 192 C 375.616 192 469.333 149.824 469.333 96 C 469.333 42.176 375.616 0 256 0 Z  M 256 170.667 C 142.848 170.667 64 131.307 64 96 C 64 60.693 142.848 21.333 256 21.333 C 369.152 21.333 448 60.693 448 96 C 448 131.307 369.152 170.667 256 170.667 Z "
              fill="rgb(255,255,255)"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d=" M 458.667 192 C 452.779 192 448 196.779 448 202.667 C 448 237.974 369.152 277.334 256 277.334 C 142.848 277.334 64 237.974 64 202.667 C 64 196.779 59.221 192 53.333 192 C 47.445 192 42.666 196.779 42.666 202.667 C 42.666 256.491 136.383 298.667 255.999 298.667 C 375.615 298.667 469.332 256.491 469.332 202.667 C 469.333 196.779 464.555 192 458.667 192 Z "
              fill="rgb(255,255,255)"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d=" M 458.667 298.667 C 452.779 298.667 448 303.446 448 309.334 C 448 344.64 369.152 384 256 384 C 142.848 384 64 344.64 64 309.333 C 64 303.445 59.221 298.666 53.333 298.666 C 47.445 298.666 42.666 303.445 42.666 309.333 C 42.666 363.157 136.383 405.333 255.999 405.333 C 375.615 405.333 469.332 363.157 469.332 309.333 C 469.333 303.445 464.555 298.667 458.667 298.667 Z "
              fill="rgb(255,255,255)"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d=" M 458.667 85.333 C 452.779 85.333 448 90.112 448 96 L 448 416 C 448 451.307 369.152 490.667 256 490.667 C 142.848 490.667 64 451.307 64 416 L 64 96 C 64 90.112 59.221 85.333 53.333 85.333 C 47.445 85.333 42.667 90.112 42.667 96 L 42.667 416 C 42.667 469.824 136.384 512 256 512 C 375.616 512 469.333 469.824 469.333 416 L 469.333 96 C 469.333 90.112 464.555 85.333 458.667 85.333 Z "
              fill="rgb(255,255,255)"
            />
          </g>
        </g>
        <g>
          <path
            d=" M 388 264 C 319.624 264 264 319.624 264 388 C 264 456.376 319.624 512 388 512 C 456.376 512 512 456.376 512 388 C 512 319.624 456.376 264 388 264 Z "
            fill="rgb(244,67,54)"
          />
          <path
            d=" M 433.664 419.051 C 437.703 423.093 437.703 429.622 433.664 433.664 C 431.649 435.679 429.003 436.691 426.356 436.691 C 423.711 436.691 421.066 435.679 419.051 433.664 L 388 402.611 L 356.949 433.664 C 354.934 435.679 352.289 436.691 349.644 436.691 C 346.997 436.691 344.351 435.679 342.336 433.664 C 338.297 429.622 338.297 423.093 342.336 419.051 L 373.389 388 L 342.336 356.949 C 338.297 352.907 338.297 346.378 342.336 342.336 C 346.378 338.297 352.907 338.297 356.949 342.336 L 388 373.389 L 419.051 342.336 C 423.093 338.297 429.622 338.297 433.664 342.336 C 437.703 346.378 437.703 352.907 433.664 356.949 L 402.611 388 L 433.664 419.051 Z "
            fill="rgb(250,250,250)"
          />
        </g>
      </g>
    </svg>
  </Fragment>
);
