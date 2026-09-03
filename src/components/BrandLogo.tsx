import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
}

export default function BrandLogo({
  className = '',
  size = 'md',
  showText = false,
  inverted = false,
}: BrandLogoProps) {
  const dimensionMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const strokeColor = inverted ? '#FFFFFF' : '#000000';
  const textColor = inverted ? '#FFFFFF' : '#000000';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Exact Circular Badge Logo matching Ricky's Ice Cream image */}
      <svg
        viewBox="0 0 240 240"
        className={`${dimensionMap[size]} shrink-0 select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top text path arc for RICKY'S */}
          <path
            id="rickys-top-arc"
            d="M 32 120 A 88 88 0 0 1 208 120"
            fill="none"
          />
          {/* Bottom text path arc for ICE CREAM */}
          <path
            id="rickys-bottom-arc"
            d="M 208 120 A 88 88 0 0 1 32 120"
            fill="none"
          />
        </defs>

        {/* Curved Top Text: RICKY'S */}
        <text
          fill={textColor}
          fontSize="23"
          fontWeight="900"
          fontFamily="'Metcon Scaled Bold', 'Metcon Scaled', 'Metcon', 'Outfit', sans-serif"
          letterSpacing="0.22em"
        >
          <textPath
            href="#rickys-top-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            RICKY'S
          </textPath>
        </text>

        {/* Center Soft Serve Ice Cream Swirl & Cone */}
        <g
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* Swirl Top Tip */}
          <path d="M120 64 C112 70 106 80 110 88 C114 94 124 94 126 88 C128 82 124 72 118 64" />
          
          {/* Swirl Top Tier */}
          <path d="M110 88 C102 96 102 108 116 112 C126 114 136 108 138 98 C139 90 133 86 126 88" />
          
          {/* Swirl Middle Tier */}
          <path d="M102 110 C96 116 97 124 104 128 C114 132 138 130 144 120 C146 114 144 108 138 106" />
          
          {/* Swirl Base Fold */}
          <path d="M98 126 C102 134 116 136 128 134 C138 132 144 126 144 124" />

          {/* Cone Outline */}
          <path d="M102 130 L120 178 L138 130" />
        </g>

        {/* Curved Bottom Text: ICE CREAM */}
        <text
          fill={textColor}
          fontSize="21"
          fontWeight="900"
          fontFamily="'Metcon Scaled Bold', 'Metcon Scaled', 'Metcon', 'Outfit', sans-serif"
          letterSpacing="0.22em"
        >
          <textPath
            href="#rickys-bottom-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            ICE CREAM
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`text-2xl font-extrabold tracking-tight leading-none ${
              inverted ? 'text-white' : 'text-black'
            }`}
            style={{ fontFamily: "'Metcon Scaled Bold', 'Metcon Scaled', 'Metcon', 'Outfit', sans-serif" }}
          >
            RICKY'S
          </span>
          <span
            className={`text-[10px] tracking-[0.35em] uppercase font-bold mt-0.5 ${
              inverted ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            ICE CREAM
          </span>
        </div>
      )}
    </div>
  );
}
