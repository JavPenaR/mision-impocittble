"""Build the standalone Mision impoCITTble wordmark from the supplied CITT mark."""
from base64 import b64encode
from pathlib import Path

here = Path(__file__).resolve().parent
brand = b64encode((here / "citt-mark.png").read_bytes()).decode("ascii")
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" role="img" aria-labelledby="title desc">
<title id="title">Mision impoCITTble</title><desc id="desc">El emblema circular CITT junto al nombre Mision impoCITTble y el descriptor CTF de ciberseguridad.</desc>
<circle cx="140" cy="130" r="91" fill="none" stroke="#70d5ff" stroke-width="2" opacity=".6"/>
<image href="data:image/png;base64,{brand}" x="58" y="48" width="164" height="164"/>
<path d="M234 130h35m-6-6 6 6-6 6" fill="none" stroke="#70d5ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="281" cy="130" r="5" fill="#c5f779"/>
<text x="323" y="82" fill="#a9dce4" font-family="Arial, sans-serif" font-size="40" font-weight="700" letter-spacing="5">MISION</text>
<text x="319" y="160" fill="#f5faf6" font-family="Arial, sans-serif" font-size="89" font-weight="700" letter-spacing="-5">impo<tspan fill="#c5f779">CITT</tspan>ble</text>
<path d="M322 183h731" stroke="#4e8995" stroke-width="2"/>
<text x="324" y="220" fill="#a9dce4" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="6">CTF DE CIBERSEGURIDAD</text>
<path d="M1084 74v67m0-67h51l-11 18 11 18h-51" fill="none" stroke="#c5f779" stroke-width="4" stroke-linejoin="round"/>
<circle cx="1084" cy="74" r="5" fill="#70d5ff"/>
</svg>'''
(here / "logo-mision-impocittble.svg").write_text(svg, encoding="utf-8")

favicon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#071923"/><image href="data:image/png;base64,{brand}" x="4" y="4" width="56" height="56"/></svg>'''
(here / "favicon.svg").write_text(favicon, encoding="utf-8")
