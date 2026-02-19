:root{
  --bg: #070b12;
  --panel: rgba(255,255,255,0.06);
  --panel2: rgba(255,255,255,0.08);
  --border: rgba(255,255,255,0.12);
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.68);
  --accent: #57d3c3;
  --accent2: #58a6ff;
  --shadow: 0 18px 48px rgba(0,0,0,0.45);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color: var(--text);
  background:
    radial-gradient(900px 650px at 18% 8%, rgba(87,211,195,0.16), transparent 55%),
    radial-gradient(900px 650px at 88% 12%, rgba(88,166,255,0.14), transparent 55%),
    var(--bg);
}

a{ color:inherit; text-decoration:none; }
.container{ width:min(1120px, 92%); margin:0 auto; }

.header{
  position:sticky;
  top:0;
  z-index:50;
  backdrop-filter: blur(12px);
  background: rgba(7,11,18,0.72);
  border-bottom: 1px solid var(--border);
}

.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 14px 0;
  gap:14px;
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
}
.brandMark{
  width:42px; height:42px;
  border-radius:14px;
  display:grid; place-items:center;
  background: linear-gradient(180deg, rgba(87,211,195,0.22), rgba(255,255,255,0.05));
  border: 1px solid var(--border);
  font-weight: 900;
}
.brandName{ font-weight: 950; letter-spacing:0.2px; }
.brandSub{ font-size:12px; color: var(--muted); margin-top:2px; }

.links{
  display:flex;
  align-items:center;
  gap:18px;
  font-weight: 750;
}
.links a{ color: var(--muted); font-size:14px; }
.links a:hover{ color: var(--text); }

.pillBtn{
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
}

.menuBtn{
  display:none;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 16px;
}

.mobileMenu{
  display:none;
  padding: 10px 0 16px;
  border-top: 1px solid var(--border);
}
.mobileMenu a{
  display:block;
  padding: 10px 0;
  color: var(--muted);
  font-weight: 800;
}

.hero{
  padding: 42px 0 22px;
}
.heroGrid{
  display:grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  align-items:start;
}

.badgeRow{ margin-bottom: 10px; }
.badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--muted);
  font-weight: 800;
  font-size: 12px;
}

.heroTitle{
  font-size: clamp(34px, 4.3vw, 56px);
  line-height: 1.05;
  margin: 10px 0 10px;
  letter-spacing: -0.5px;
}
.accent{
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.heroDesc{
  max-width: 62ch;
  color: var(--muted);
  line-height: 1.7;
  font-size: 15.5px;
}

.ctaRow{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0 16px;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--panel);
  font-weight: 900;
}
.btn:hover{ filter: brightness(1.08); }
.btn.primary{
  background: linear-gradient(180deg, rgba(87,211,195,0.26), rgba(88,166,255,0.12));
  border-color: rgba(87,211,195,0.35);
}
.btn.ghost{
  background: rgba(255,255,255,0.04);
}
.btn.full{ width:100%; }

.miniStats{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 10px;
}
.statCard{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 12px 12px;
}
.statTop{ font-weight: 950; }
.statSub{ margin-top: 4px; font-size: 12px; color: var(--muted); }

.chips{
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}
.chip{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
  padding: 8px 10px;
  border-radius: 999px;
  color: rgba(255,255,255,0.74);
  font-weight: 800;
  font-size: 12px;
}

.card{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.06);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow:hidden;
}
.cardHead{
  padding: 16px 16px 10px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
}
.cardTitle{ font-weight: 950; font-size: 16px; }
.cardSub{ color: var(--muted); font-size: 13px; margin-top: 4px; }

.form{
  padding: 14px 16px 16px;
  display:grid;
  gap: 12px;
}
.label{
  display:grid;
  gap: 7px;
  color: var(--muted);
  font-weight: 850;
  font-size: 13px;
}
input, select{
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(0,0,0,0.18);
  color: var(--text);
  outline:none;
}

.section{ padding: 46px 0; }
.section.alt{
  background: rgba(255,255,255,0.03);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

h2{
  font-size: 30px;
  margin: 0 0 8px;
  letter-spacing: -0.2px;
}
.muted{ color: var(--muted); }
.fine{ color: rgba(255,255,255,0.58); font-size: 12px; margin-top: 10px; }
.center{ text-align:center; }

.grid3{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.box{
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: var(--radius);
  padding: 16px;
}
.box h3{ margin:0 0 10px; }
.box ul{
  margin:0;
  padding-left: 18px;
  color: rgba(255,255,255,0.74);
  line-height: 1.75;
}
.boxFoot{
  margin-top: 10px;
  color: rgba(255,255,255,0.62);
  font-weight: 800;
  font-size: 12px;
}

.priceGrid{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.priceCard{
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: var(--radius);
  padding: 16px;
  position: relative;
}
.priceCard.featured{
  background: rgba(87,211,195,0.10);
  border-color: rgba(87,211,195,0.35);
}
.tag{
  position:absolute;
  right: 14px;
  top: 14px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 950;
  border: 1px solid rgba(87,211,195,0.35);
  background: rgba(87,211,195,0.14);
}
.priceName{ font-weight: 950; }
.priceValue{
  font-size: 42px;
  font-weight: 950;
  letter-spacing: -0.6px;
  margin-top: 6px;
}
.per{ font-size: 12px; color: var(--muted); font-weight: 850; }

.priceCard ul{
  margin: 12px 0 14px;
  padding-left: 18px;
  color: rgba(255,255,255,0.74);
  line-height: 1.75;
}

.flyerGrid{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.flyerCard{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
  border-radius: var(--radius);
  overflow:hidden;
  box-shadow: var(--shadow);
  display:block;
}
.flyerCard img{
  width:100%;
  height:100%;
  display:block;
  object-fit: cover;
}
.flyerCard.wide{ grid-column: 1 / -1; }

.quote{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius);
  padding: 16px;
}
.quote p{
  margin:0 0 10px;
  line-height: 1.7;
  color: rgba(255,255,255,0.82);
  font-weight: 700;
}
.quote span{
  color: rgba(255,255,255,0.60);
  font-weight: 850;
  font-size: 12px;
}

.faq{
  margin-top: 12px;
  display:grid;
  gap: 10px;
}
details{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius);
  padding: 12px 14px;
}
summary{
  cursor:pointer;
  font-weight: 900;
}
details p{
  margin: 10px 0 0;
  color: rgba(255,255,255,0.74);
  line-height: 1.7;
}

.contactGrid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items:start;
}
.contactBtns{
  display:grid;
  gap: 10px;
  margin-top: 10px;
}
.smallBox{
  margin-top: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius);
  padding: 14px 16px;
}

.gallery{
  padding: 14px 16px 16px;
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.galItem{
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow:hidden;
  background: rgba(255,255,255,0.04);
  min-height: 140px;
}
.galItem img{
  width:100%;
  height: 140px;
  object-fit: cover;
  display:block;
}
.galLabel{
  padding: 10px 10px;
  font-size: 12px;
  color: rgba(255,255,255,0.62);
  font-weight: 850;
  border-top: 1px solid var(--border);
}

.footer{
  padding: 18px 0 28px;
}
.footRow{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  color: rgba(255,255,255,0.62);
  font-weight: 850;
}

/* Responsive */
@media (max-width: 960px){
  .heroGrid{ grid-template-columns: 1fr; }
  .links{ display:none; }
  .menuBtn{ display:inline-flex; }
  .mobileMenu.show{ display:block; }
  .grid3{ grid-template-columns: 1fr; }
  .priceGrid{ grid-template-columns: 1fr; }
  .flyerGrid{ grid-template-columns: 1fr; }
  .flyerCard.wide{ grid-column: auto; }
  .miniStats{ grid-template-columns: 1fr; }
  .contactGrid{ grid-template-columns: 1fr; }
}
