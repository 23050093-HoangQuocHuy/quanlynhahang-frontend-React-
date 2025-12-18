import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../components/Preloader'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import '../assets/css/menu-page.css'

// Cấu hình danh mục theo category_id trong database BE
const CATEGORY_CONFIG = {
  1: { key: "appetizer", title: "Món Khai Vị", subtitle: "Khởi đầu hoàn hảo", bgClass: "" },
  2: { key: "main", title: "Món Chính", subtitle: "Tinh hoa ẩm thực", bgClass: "bg-black-10" },
  3: { key: "grill", title: "Món Nướng", subtitle: "Đậm đà hương lửa", bgClass: "" },
  4: { key: "soup", title: "Lẩu", subtitle: "Ấm lòng sum vầy", bgClass: "bg-black-10" },
  5: { key: "drink", title: "Thức Uống", subtitle: "Giải khát", bgClass: "" },
  6: { key: "dessert", title: "Tráng Miệng", subtitle: "Ngọt ngào", bgClass: "bg-black-10" }
}

// Thứ tự nhóm hiển thị
const CATEGORY_ORDER = [1, 2, 3, 4, 5, 6]

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true)
        setError(false)

        const API_URL = "http://127.0.0.1:8000/api/foods"

        const res = await fetch(API_URL, {
          headers: { "Accept": "application/json" }
        })

        if (!res.ok) throw new Error("HTTP " + res.status)

        const json = await res.json()

        // Laravel trả về {status: true, data: [...]}
        if (!json.status) throw new Error("API trả về lỗi!")

        setMenuData(json.data || [])
      } catch (err) {
        console.error("Lỗi API:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  const formatPrice = (value) => {
    const num = Number(value || 0)
    return num.toLocaleString("vi-VN") + " VND"
  }

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat)

    const dynamic = document.getElementById("menu-dynamic")
    if (dynamic) dynamic.scrollIntoView({ behavior: "smooth" })
  }

  // Phân nhóm món theo category_id
  const groupedSections = CATEGORY_ORDER.map(catId => {
    const cfg = CATEGORY_CONFIG[catId]
    if (!cfg) return null

    const items = menuData.filter(item => Number(item.category_id) === catId)

    if (items.length === 0) return null

    return { ...cfg, items, catId }
  }).filter(Boolean)

  // Lọc theo danh mục được chọn
  const visibleSections =
    selectedCategory === "all"
      ? groupedSections
      : groupedSections.filter(sec => sec.key === selectedCategory)

  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />

      <main>
        <article>
          {/* === HERO SECTION === */}
          <section
            className="menu-hero"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <p className="label-2 section-subtitle">Khám phá hương vị</p>
              <h1 className="display-1 hero-title">Thực Đơn Đặc Biệt</h1>
              <p className="body-2 hero-text">
                Trải nghiệm tinh hoa ẩm thực với nguyên liệu thượng hạng
              </p>
            </div>
          </section>

          {/* === CATEGORY FILTER === */}
          <section className="section menu-categories">
            <div className="container">
              <div className="category-filter" role="tablist">
                <button className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("all")}>Tất cả</button>

                <button className={`filter-btn ${selectedCategory === "appetizer" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("appetizer")}>Khai vị</button>

                <button className={`filter-btn ${selectedCategory === "main" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("main")}>Món chính</button>

                <button className={`filter-btn ${selectedCategory === "grill" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("grill")}>Món nướng</button>

                <button className={`filter-btn ${selectedCategory === "soup" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("soup")}>Lẩu</button>

                <button className={`filter-btn ${selectedCategory === "drink" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("drink")}>Thức uống</button>

                <button className={`filter-btn ${selectedCategory === "dessert" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("dessert")}>Tráng miệng</button>
              </div>
            </div>
          </section>

          {/* === MENU CONTENT === */}
          <section className="section" id="menu-dynamic">
            <div className="container">

              {loading && <p className="menu-loading">Đang tải thực đơn...</p>}

              {error && <p className="menu-error">Có lỗi khi tải thực đơn.</p>}

              {!loading && !error && visibleSections.map(section => (
                <section key={section.catId} className={`section menu-section ${section.bgClass}`}>
                  <div className="container">
                    <div className="section-header">
                      <p className="section-subtitle label-2">{section.subtitle}</p>
                      <h2 className="headline-1 section-title">{section.title}</h2>
                    </div>

                    <ul className="menu-grid">
                      {section.items.map(item => {
                        const img = item.image_url && item.image_url.trim() !== ""
                          ? item.image_url
                          : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80"

                        return (
                          <li className="menu-item" key={item.id}>
                            <div className="menu-card">
                              <figure className="card-banner img-holder">
                                <img src={img} loading="lazy" alt={item.name} className="img-cover" />
                              </figure>
                              <div className="card-content">
                                <div className="title-wrapper">
                                  <h3 className="title-3">{item.name}</h3>
                                  <span className="span title-2">{formatPrice(item.price)}</span>
                                </div>
                                <p className="card-text label-1">{item.description || ""}</p>
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          </section>

          {/* === CTA === */}
          <section className="section cta-section">
            <div className="container">
              <div className="cta-content">
                <p className="section-subtitle label-2">Đặt bàn ngay</p>
                <h2 className="headline-1">Trải Nghiệm Ẩm Thực Đẳng Cấp</h2>
                <p className="body-2">Vui lòng đặt bàn trước để được phục vụ tốt nhất.</p>

                <div className="btn-group">
                  <Link to="/booking" className="btn btn-primary">Đặt Bàn Online</Link>
                  <a href="tel:+842828282828" className="btn btn-secondary">Gọi: 028 2828 2828</a>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Menu
