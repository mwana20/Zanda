import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showTagline?: boolean;
  stacked?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'light',
  showTagline = true,
  stacked = false,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-16 h-16 sm:w-18 sm:h-18',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  }[size];

  const brandTextSize = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-5xl',
  }[size];

  const subTextSize = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[11px] sm:text-xs',
    lg: 'text-sm sm:text-base',
    xl: 'text-lg',
  }[size];

  const zandaTextColor = variant === 'light' ? 'text-white' : 'text-slate-900';

  return (
    <div
      className={`flex ${
        stacked ? 'flex-col items-center text-center' : 'items-center'
      } gap-3 select-none ${className}`}
    >
      {/* Official Zanda Painting Brand Mark (Roof + Z + Dripping Paint + Window) */}
      <div className={`relative ${iconDimensions} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* ========================================================
              TOP ROOF & SHINGLES (Forms top bar of the Z)
              ======================================================== */}
          {/* Main Roof Pitch */}
          <path
            d="M 188 36 L 244 88 L 118 88 L 68 88 Z"
            fill="#23262B"
          />
          {/* Overlapping Shingles on the left slope */}
          <path
            d="M 188 36 L 68 88 L 84 94 L 188 44 Z"
            fill="#141619"
          />
          <path
            d="M 172 48 L 78 95 L 94 100 L 176 54 Z"
            fill="#2D3036"
          />
          <path
            d="M 154 58 L 92 102 L 108 107 L 160 66 Z"
            fill="#1B1C20"
          />
          <path
            d="M 136 70 L 104 110 L 118 114 L 142 77 Z"
            fill="#34373E"
          />

          {/* Roof Ridge Peak / Gable Accent */}
          <path
            d="M 188 34 L 246 88 L 234 94 L 188 44 Z"
            fill="#3A3D44"
          />

          {/* Solid Top Stroke of the Z (underneath the roof) */}
          <path
            d="M 102 96 L 242 96 L 214 122 L 112 122 Z"
            fill="#181A1D"
          />

          {/* Dripping Black Paint from Top Bar */}
          <path
            d="M 108 122 C 108 135, 102 148, 102 156 C 102 161, 108 164, 112 160 C 115 156, 114 145, 114 122 Z"
            fill="#181A1D"
          />
          <path
            d="M 122 122 C 122 138, 116 162, 116 178 C 116 185, 124 188, 128 183 C 132 178, 130 152, 130 122 Z"
            fill="#181A1D"
          />
          <circle cx="122" cy="194" r="3.5" fill="#181A1D" />
          <path
            d="M 138 122 C 138 132, 134 142, 134 148 C 134 153, 140 154, 143 150 C 145 146, 144 134, 144 122 Z"
            fill="#181A1D"
          />

          {/* ========================================================
              DIAGONAL STROKE OF THE Z
              ======================================================== */}
          {/* Black Side of Diagonal */}
          <polygon
            points="214,122 84,248 116,276 242,122"
            fill="#1A1C20"
          />

          {/* Red Ridge / Angle Transition across diagonal */}
          <polygon
            points="242,122 248,128 174,204 162,204"
            fill="#DC2626"
          />

          {/* ========================================================
              HOUSE SILHOUETTE & 4-PANE RED WINDOW (in the crook of Z)
              ======================================================== */}
          {/* House Gable Roof Line (Red) */}
          <path
            d="M 188 152 L 254 212 L 246 218 L 188 162 Z"
            fill="#E11D48"
          />

          {/* Clean White House Wall */}
          <polygon
            points="188,162 254,222 254,232 176,232"
            fill="#FFFFFF"
          />

          {/* 4-PANE RED WINDOW */}
          <rect x="194" y="180" width="13" height="13" rx="1.5" fill="#DC2626" />
          <rect x="211" y="180" width="13" height="13" rx="1.5" fill="#DC2626" />
          <rect x="194" y="197" width="13" height="13" rx="1.5" fill="#DC2626" />
          <rect x="211" y="197" width="13" height="13" rx="1.5" fill="#DC2626" />

          {/* ========================================================
              BOTTOM STROKE OF THE Z (RED HORIZONTAL BAR)
              ======================================================== */}
          <polygon
            points="154,232 268,232 284,238 274,248 142,248"
            fill="#DC2626"
          />

          {/* ========================================================
              DRIPPING PAINT & SPLATTERS AT BASE
              ======================================================== */}
          {/* Left Black Splatters & Drips */}
          <path
            d="M 84,248 C 66,256, 52,268, 64,276 C 76,284, 84,268, 96,260 Z"
            fill="#181A1D"
          />
          <circle cx="48" cy="268" r="3.5" fill="#181A1D" />
          <circle cx="60" cy="284" r="2.5" fill="#181A1D" />

          {/* Black Drip 1 */}
          <path
            d="M 92 256 C 92 280, 84 300, 84 312 C 84 318, 92 321, 95 316 C 98 311, 96 284, 98 256 Z"
            fill="#181A1D"
          />
          <circle cx="89" cy="326" r="4" fill="#181A1D" />

          {/* Black Drip 2 */}
          <path
            d="M 108 264 C 108 284, 104 308, 104 324 C 104 331, 112 334, 115 329 C 118 324, 115 288, 115 264 Z"
            fill="#181A1D"
          />

          {/* Black Drip 3 */}
          <path
            d="M 125 260 C 125 280, 122 300, 122 310 C 122 315, 128 318, 131 313 C 134 308, 132 284, 133 260 Z"
            fill="#181A1D"
          />
          <circle cx="127" cy="325" r="3" fill="#181A1D" />

          {/* Center Transition Splatter */}
          <path
            d="M 140 248 C 140 280, 134 304, 134 318 C 134 324, 142 326, 145 321 C 148 316, 147 274, 148 248 Z"
            fill="#181A1D"
          />

          {/* Right Red Dripping Paint & Splatters */}
          {/* Red Drip 1 */}
          <path
            d="M 160 246 C 160 270, 156 298, 156 318 C 156 326, 164 330, 167 324 C 170 318, 168 274, 169 246 Z"
            fill="#DC2626"
          />
          <circle cx="161" cy="334" r="3.5" fill="#DC2626" />

          {/* Red Drip 2 (Longest primary center-right drip) */}
          <path
            d="M 180 246 C 180 282, 174 326, 174 348 C 174 358, 185 361, 190 353 C 195 345, 191 286, 192 246 Z"
            fill="#E11D48"
          />
          <circle cx="182" cy="368" r="4" fill="#E11D48" />

          {/* Red Drip 3 */}
          <path
            d="M 204 246 C 204 274, 200 306, 200 326 C 200 334, 208 338, 212 331 C 215 325, 213 278, 213 246 Z"
            fill="#E11D48"
          />
          <circle cx="206" cy="346" r="3.5" fill="#E11D48" />

          {/* Red Drip 4 */}
          <path
            d="M 226 246 C 226 270, 224 294, 224 310 C 224 318, 232 322, 235 315 C 238 309, 235 270, 235 246 Z"
            fill="#E11D48"
          />
          <circle cx="230" cy="328" r="3" fill="#E11D48" />

          {/* Red Drip 5 */}
          <path
            d="M 248 246 C 248 266, 246 286, 246 298 C 246 304, 252 307, 255 301 C 258 295, 256 266, 256 246 Z"
            fill="#E11D48"
          />

          {/* Red Splatter Wings on the Right */}
          <path
            d="M 264 242 C 284 234, 300 222, 305 210 C 307 218, 299 238, 279 250 Z"
            fill="#E11D48"
          />
          <circle cx="310" cy="207" r="3.5" fill="#E11D48" />
          <circle cx="302" cy="230" r="3" fill="#E11D48" />
          <circle cx="288" cy="258" r="3.5" fill="#E11D48" />
        </svg>
      </div>

      {/* Brand Typography matching the exact uploaded logo style */}
      <div className={`flex flex-col ${stacked ? 'items-center mt-1' : 'leading-tight'}`}>
        <div className="flex items-baseline">
          <span
            className={`font-black tracking-tight font-heading ${brandTextSize} ${zandaTextColor}`}
          >
            Zanda
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-bold tracking-wider font-heading uppercase text-red-500 ${subTextSize}`}
          >
            Painting Services
          </span>
          {showTagline && !stacked && (
            <>
              <span className="text-slate-500 text-[10px]">·</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 hidden sm:inline">
                Kampala
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
