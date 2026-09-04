export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #eff6ff 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 160,
          height: 160,
          marginBottom: 40,
        }}
      >
        <svg width="160" height="160" viewBox="0 0 260 260">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <g transform="translate(0,260) scale(0.1,-0.1)" fill="url(#g)">
            <path d="M1109 2059 c-155 -39 -268 -119 -352 -247 -41 -62 -97 -190 -97 -221 0 -8 23 10 51 38 117 118 251 162 388 126 80 -21 129 -55 257 -180 147 -142 224 -195 345 -237 90 -31 100 -32 249 -32 140 1 163 3 235 27 200 66 333 210 400 435 l14 45 -63 -64 c-122 -125 -270 -165 -417 -115 -59 20 -113 60 -209 154 -108 106 -173 163 -210 183 -17 9 -36 21 -43 27 -20 17 -119 51 -192 67 -95 19 -265 17 -356 -6z" />
            <path d="M490 1286 c-230 -46 -381 -183 -462 -421 l-28 -80 43 45 c109 116 224 168 343 156 115 -12 164 -40 304 -176 134 -130 196 -178 277 -218 112 -54 174 -66 338 -66 135 0 158 3 231 27 187 62 312 189 383 392 l32 89 -55 -56 c-119 -123 -256 -170 -392 -134 -93 25 -114 39 -268 189 -203 198 -326 256 -556 262 -78 3 -150 -1 -190 -9z" />
          </g>
        </svg>
      </div>
      <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#171717" }}>
        Tailwind CSS v4 Cheatsheet
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#525252", marginTop: 20 }}>
        Extended & condensed · searchable · dark mode · printable PDF
      </div>
    </div>
  );
}
