"use client";

import { useMemo, useState } from "react";
import {
  IconArrowDownRight,
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconBriefcase,
  IconBuildingCommunity,
  IconCheck,
  IconChevronDown,
  IconMapPin,
  IconMenu2,
  IconSchool,
  IconSearch,
  IconShoppingBag,
  IconSparkles,
  IconTrain,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";

type City = {
  id: string;
  name: string;
  province: string;
  region: string;
  monthly: number;
  change: number;
  rent: number;
  food: number;
  transport: number;
  utilities: number;
  image: string;
  imagePosition?: string;
  description: string;
  accent: string;
};

const cities: City[] = [
  {
    id: "balikpapan",
    name: "Balikpapan",
    province: "Kalimantan Timur",
    region: "Kaltim",
    monthly: 4.8,
    change: 2.4,
    rent: 1.65,
    food: 1.55,
    transport: 0.8,
    utilities: 0.8,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=960&q=85",
    description: "Kota pesisir yang tumbuh bersama energi dan peluang baru.",
    accent: "#c5e1d3",
  },
  {
    id: "pontianak",
    name: "Pontianak",
    province: "Kalimantan Barat",
    region: "Kalbar",
    monthly: 4.2,
    change: 1.8,
    rent: 1.25,
    food: 1.45,
    transport: 0.7,
    utilities: 0.8,
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=960&q=85",
    description: "Ritme kota tepi sungai dengan cita rasa yang beragam.",
    accent: "#d9d3be",
  },
  {
    id: "samarinda",
    name: "Samarinda",
    province: "Kalimantan Timur",
    region: "Kaltim",
    monthly: 4.0,
    change: -0.6,
    rent: 1.2,
    food: 1.35,
    transport: 0.7,
    utilities: 0.75,
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=960&q=85",
    description: "Kota tepian Mahakam yang selalu punya cerita.",
    accent: "#cad6c3",
  },
  {
    id: "banjarmasin",
    name: "Banjarmasin",
    province: "Kalimantan Selatan",
    region: "Kalsel",
    monthly: 3.9,
    change: 1.1,
    rent: 1.1,
    food: 1.4,
    transport: 0.65,
    utilities: 0.75,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=960&q=85",
    description: "Kota seribu sungai, nyaman dengan biaya yang bersahabat.",
    accent: "#d9d9c6",
  },
  {
    id: "palangka-raya",
    name: "Palangka Raya",
    province: "Kalimantan Tengah",
    region: "Kalteng",
    monthly: 3.7,
    change: -1.2,
    rent: 1.05,
    food: 1.3,
    transport: 0.65,
    utilities: 0.7,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&q=85",
    description: "Ruang hidup yang lapang, dikelilingi alam yang hijau.",
    accent: "#c9dbc6",
  },
  {
    id: "tarakan",
    name: "Tarakan",
    province: "Kalimantan Utara",
    region: "Kaltara",
    monthly: 4.1,
    change: 0.4,
    rent: 1.2,
    food: 1.45,
    transport: 0.7,
    utilities: 0.75,
    image:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=960&q=85",
    description: "Kota pulau yang tenang, dengan pesona pesisir utara.",
    accent: "#d3d9c6",
  },
];

const regions = ["Semua kota", "Kalbar", "Kalteng", "Kalsel", "Kaltim", "Kaltara"];
const lifestyles = [
  {
    id: "mahasiswa",
    label: "Mahasiswa",
    description: "Hemat, tinggal sendiri",
    household: "1 orang",
    icon: IconSchool,
    factors: { rent: 0.72, food: 0.82, transport: 0.82, utilities: 0.72 },
  },
  {
    id: "perantau",
    label: "Perantau",
    description: "Mandiri, tinggal sendiri",
    household: "1 orang",
    icon: IconBriefcase,
    factors: { rent: 1, food: 1, transport: 1, utilities: 1 },
  },
  {
    id: "keluarga",
    label: "Keluarga",
    description: "Rumah tangga 3 orang",
    household: "3 orang",
    icon: IconUsersGroup,
    factors: { rent: 1.75, food: 2.4, transport: 1.5, utilities: 1.8 },
  },
] as const;
const categoryRows = [
  { label: "Tempat tinggal", icon: IconBuildingCommunity, key: "rent" as const },
  { label: "Makan & minum", icon: IconShoppingBag, key: "food" as const },
  { label: "Transportasi", icon: IconTrain, key: "transport" as const },
  { label: "Tagihan bulanan", icon: IconBolt, key: "utilities" as const },
];
const formatMillion = (value: number) =>
  `Rp ${value.toFixed(2).replace(".", ",")} jt`;
type LifestyleId = (typeof lifestyles)[number]["id"];

function getCityCost(city: City, lifestyleId: LifestyleId) {
  const lifestyle = lifestyles.find((item) => item.id === lifestyleId)!;
  const costs = {
    rent: city.rent * lifestyle.factors.rent,
    food: city.food * lifestyle.factors.food,
    transport: city.transport * lifestyle.factors.transport,
    utilities: city.utilities * lifestyle.factors.utilities,
  };

  return {
    ...costs,
    monthly: Object.values(costs).reduce((total, cost) => total + cost, 0),
  };
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("Semua kota");
  const [activeLifestyle, setActiveLifestyle] = useState<LifestyleId>("perantau");
  const [selectedCities, setSelectedCities] = useState(["balikpapan", "pontianak"]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const selectedLifestyle = lifestyles.find(
    (lifestyle) => lifestyle.id === activeLifestyle,
  ) ?? lifestyles[1];

  const filteredCities = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id");
    return cities.filter((city) => {
      const matchesRegion =
        activeRegion === "Semua kota" || city.region === activeRegion;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${city.name} ${city.province}`.toLocaleLowerCase("id").includes(normalizedQuery);
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, query]);

  const comparisonCities = selectedCities
    .map((id) => cities.find((city) => city.id === id))
    .filter((city): city is City => city !== undefined);
  const averageMonthly =
    cities.reduce(
      (total, city) => total + getCityCost(city, activeLifestyle).monthly,
      0,
    ) / cities.length;

  function toggleCity(cityId: string) {
    setSelectedCities((current) => {
      if (current.includes(cityId)) {
        return current.filter((id) => id !== cityId);
      }
      if (current.length >= 2) {
        return current;
      }
      return [...current, cityId];
    });
  }

  return (
    <main>
      <header className="site-header">
        <a aria-label="RuangRantau, beranda" className="brand" href="#beranda">
          <span className="brand-mark">r.</span>
          <span>ruang<span>rantau</span></span>
        </a>
        <button
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {mobileMenuOpen ? <IconX size={21} /> : <IconMenu2 size={21} />}
        </button>
        <nav className={mobileMenuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#kota" onClick={() => setMobileMenuOpen(false)}>Jelajahi kota</a>
          <a href="#perbandingan" onClick={() => setMobileMenuOpen(false)}>Perbandingan</a>
          <a href="#tentang" onClick={() => setMobileMenuOpen(false)}>Tentang kami</a>
        </nav>
        <a className="header-cta" href="#kota">
          Cari kota impian <IconArrowRight size={16} stroke={1.8} />
        </a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" /> PANDUAN HIDUP DI KALIMANTAN
          </div>
          <h1>
            Kota baru,
            <br />
            <span>hidup yang pas.</span>
          </h1>
          <p>
            Mau pindah, merantau, atau sekadar penasaran? Temukan kota di
            Kalimantan yang paling cocok dengan caramu hidup.
          </p>
          <a className="hero-cta" href="#kota">
            Temukan kotamu <IconArrowRight size={18} />
          </a>
          <div className="hero-note">
            <span className="hero-note-icon"><IconMapPin size={16} /></span>
            <span>6 kota · 5 provinsi · satu pulau besar</span>
          </div>
        </div>
        <div className="hero-caption">
          <span>Kalimantan, Indonesia</span>
          <span className="caption-line" />
          <span>01° 00′ LU — 114° 00′ BT</span>
        </div>
      </section>

      <section className="overview">
        <div className="overview-intro">
          <span className="eyebrow"><IconSparkles size={14} /> KENALI DULU</span>
          <h2>Hidup di sini,<br /><em>sebenarnya</em> berapa?</h2>
        </div>
        <p className="overview-copy">
          Kami merangkum kebutuhan bulanan paling penting agar kamu bisa
          membandingkan dengan lebih yakin—bukan cuma menebak-nebak.
        </p>
        <div className="overview-stat">
          <span>Rata-rata biaya · {selectedLifestyle.label}</span>
          <strong>{formatMillion(averageMonthly)}</strong>
          <small>estimasi untuk {selectedLifestyle.household.toLowerCase()} per bulan</small>
        </div>
      </section>

      <section className="explore-section" id="kota">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PILIHAN DI KALIMANTAN</span>
            <h2>Setiap kota punya <em>ceritanya.</em></h2>
            <p>Temukan suasana dan biaya hidup yang paling terasa seperti kamu.</p>
          </div>
          <div className="search-wrap">
            <IconSearch size={18} stroke={1.7} />
            <input
              aria-label="Cari kota atau provinsi"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari kota..."
              type="search"
              value={query}
            />
            <IconChevronDown className="search-chevron" size={16} />
          </div>
        </div>

        <div className="lifestyle-filter">
          <div className="lifestyle-heading">
            <span className="eyebrow">SESUAIKAN DENGAN RENCANAMU</span>
            <span>Pilih gaya hidup</span>
          </div>
          <div aria-label="Filter gaya hidup" className="lifestyle-options">
            {lifestyles.map((lifestyle) => {
              const LifestyleIcon = lifestyle.icon;
              return (
                <button
                  aria-pressed={activeLifestyle === lifestyle.id}
                  className={`lifestyle-option${activeLifestyle === lifestyle.id ? " active" : ""}`}
                  key={lifestyle.id}
                  onClick={() => setActiveLifestyle(lifestyle.id)}
                  type="button"
                >
                  <LifestyleIcon size={18} stroke={1.7} />
                  <span className="lifestyle-option-copy">
                    <strong>{lifestyle.label}</strong>
                    <small>{lifestyle.description}</small>
                  </span>
                  {activeLifestyle === lifestyle.id && <IconCheck className="lifestyle-check" size={16} />}
                </button>
              );
            })}
          </div>
          <p className="lifestyle-note">
            Estimasi {selectedLifestyle.household.toLowerCase()} · pilih profil untuk menyesuaikan semua angka biaya.
          </p>
        </div>

        <div aria-label="Filter berdasarkan provinsi" className="region-tabs">
          {regions.map((region) => (
            <button
              aria-pressed={activeRegion === region}
              className={activeRegion === region ? "region-tab active" : "region-tab"}
              key={region}
              onClick={() => setActiveRegion(region)}
              type="button"
            >
              {region}
            </button>
          ))}
          <span className="city-count">{filteredCities.length} kota ditemukan</span>
        </div>

        {filteredCities.length > 0 ? (
          <div className="city-grid">
            {filteredCities.map((city, index) => {
              const isSelected = selectedCities.includes(city.id);
              const cannotAdd = !isSelected && selectedCities.length >= 2;
              const cost = getCityCost(city, activeLifestyle);
              return (
                <article className="city-card" key={city.id} style={{ animationDelay: `${index * 55}ms` }}>
                  <div
                    aria-label={`Pemandangan kota ${city.name}`}
                    className="city-photo"
                    role="img"
                    style={{
                      backgroundImage: `linear-gradient(180deg, transparent 38%, rgba(19, 34, 28, .56) 100%), url("${city.image}")`,
                      backgroundPosition: city.imagePosition ?? "center",
                      backgroundColor: city.accent,
                    }}
                  >
                    <span className="photo-tag"><IconMapPin size={13} /> {city.region}</span>
                    <span className="photo-number">0{cities.indexOf(city) + 1}</span>
                  </div>
                  <div className="city-card-body">
                    <div className="city-card-title">
                      <div>
                        <span className="city-province">{city.province}</span>
                        <h3>{city.name}</h3>
                      </div>
                      <span className="trend">
                        {city.change > 0 ? (
                          <><IconArrowUpRight size={15} /> {city.change}%</>
                        ) : (
                          <><IconArrowDownRight size={15} /> {Math.abs(city.change)}%</>
                        )}
                      </span>
                    </div>
                    <p className="city-description">{city.description}</p>
                    <div className="city-cost">
                      <div>
                        <span>Estimasi per bulan</span>
                        <strong>{formatMillion(cost.monthly)}</strong>
                      </div>
                      <span className="cost-person">/ {selectedLifestyle.household}</span>
                    </div>
                    <button
                      aria-pressed={isSelected}
                      className={`compare-toggle${isSelected ? " selected" : ""}`}
                      disabled={cannotAdd}
                      onClick={() => toggleCity(city.id)}
                      type="button"
                    >
                      {isSelected ? <IconCheck size={17} /> : <span className="plus-icon">+</span>}
                      {isSelected ? "Ditambahkan" : "Bandingkan kota"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <IconSearch size={24} />
            <strong>Kota belum ditemukan</strong>
            <span>Coba kata kunci atau filter provinsi yang berbeda.</span>
            <button onClick={() => { setQuery(""); setActiveRegion("Semua kota"); }} type="button">
              Tampilkan semua kota
            </button>
          </div>
        )}
      </section>

      <section className="compare-section" id="perbandingan">
        <div className="compare-heading">
          <div>
            <span className="eyebrow">BIAR MAKIN YAKIN</span>
            <h2>Dua kota, satu <em>pertimbangan.</em></h2>
            <p>
              Rincian untuk profil {selectedLifestyle.label.toLowerCase()} ·{" "}
              {selectedLifestyle.household.toLowerCase()}.
            </p>
          </div>
          <span className="compare-counter">{comparisonCities.length} / 2 kota dipilih</span>
        </div>
        {comparisonCities.length > 0 ? (
          <div className="comparison-table">
            <div className="comparison-top">
              <div className="comparison-label">RINCIAN BIAYA</div>
              {comparisonCities.map((city) => (
                <div className="comparison-city" key={city.id}>
                  <span className="comparison-city-region"><IconMapPin size={13} /> {city.region}</span>
                  <strong>{city.name}</strong>
                </div>
              ))}
              {comparisonCities.length === 1 && <div className="comparison-placeholder">Pilih satu kota lagi</div>}
            </div>
            <div className="comparison-total">
              <span>Estimasi total bulanan</span>
              {comparisonCities.map((city) => (
                <strong key={city.id}>{formatMillion(getCityCost(city, activeLifestyle).monthly)}</strong>
              ))}
              {comparisonCities.length === 1 && <span className="comparison-placeholder">—</span>}
            </div>
            {categoryRows.map(({ label, icon: CategoryIcon, key }) => {
              const maxValue = Math.max(
                ...comparisonCities.map(
                  (city) => getCityCost(city, activeLifestyle)[key],
                ),
              );
              return (
                <div className="comparison-row" key={key}>
                  <span className="comparison-category"><CategoryIcon size={16} stroke={1.6} />{label}</span>
                  {comparisonCities.map((city) => (
                    <div className="comparison-value" key={city.id}>
                      <span>{formatMillion(getCityCost(city, activeLifestyle)[key])}</span>
                      <span className="bar-track">
                        <span
                          className="bar-fill"
                          style={{
                            width: `${(getCityCost(city, activeLifestyle)[key] / maxValue) * 100}%`,
                          }}
                        />
                      </span>
                    </div>
                  ))}
                  {comparisonCities.length === 1 && <span className="comparison-placeholder">—</span>}
                </div>
              );
            })}
            <div className="comparison-footnote">
              <IconSparkles size={15} />
              Estimasi untuk {selectedLifestyle.household.toLowerCase()} dengan profil {selectedLifestyle.label.toLowerCase()}; biaya aktual dapat berbeda sesuai kebutuhan.
            </div>
          </div>
        ) : (
          <div className="empty-comparison">
            <span className="empty-comparison-icon"><IconMapPin size={20} /></span>
            <div>
              <strong>Mulai dengan memilih kota</strong>
              <span>Tekan &quot;Bandingkan kota&quot; pada kartu kota pilihanmu.</span>
            </div>
            <a href="#kota">Jelajahi kota <IconArrowRight size={16} /></a>
          </div>
        )}
      </section>

      <section className="closing-banner" id="tentang">
        <div className="closing-mark"><IconSparkles size={21} stroke={1.5} /></div>
        <div>
          <span className="eyebrow">SEBUAH CATATAN KECIL</span>
          <h2>Pulang atau berangkat,<br /><em>semoga terasa tepat.</em></h2>
          <p>RuangRantau membantu langkah kecil menuju rumah baru terasa lebih mudah.</p>
        </div>
        <a href="#kota" className="closing-link">Jelajahi lagi <IconArrowRight size={17} /></a>
      </section>

      <footer className="site-footer">
        <a aria-label="RuangRantau, kembali ke atas" className="brand footer-brand" href="#beranda">
          <span className="brand-mark">r.</span>
          <span>ruang<span>rantau</span></span>
        </a>
        <span className="footer-copy">Dibuat dengan rasa ingin tahu, untuk perjalanan yang lebih baik.</span>
        <a href="#beranda" className="back-to-top">Kembali ke atas ↑</a>
      </footer>
    </main>
  );
}
