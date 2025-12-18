import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../components/Preloader'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function Home() {
  useEffect(() => {
    // Parallax effect
    const parallaxItems = document.querySelectorAll('[data-parallax-item]')
    
    const handleMouseMove = (event) => {
      let x = (event.clientX / window.innerWidth * 10) - 5
      let y = (event.clientY / window.innerHeight * 10) - 5
      x = x - (x * 2)
      y = y - (y * 2)

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed)
        const xPos = x * speed
        const yPos = y * speed
        item.style.transform = `translate3d(${xPos}px, ${yPos}px, 0px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />
      
      <main>
        <article>
          <Hero />
          <ServiceSection />
          
          {/* ABOUT */}
          <section className="section about text-center" aria-labelledby="about-label" id="about">
            <div className="container">
              <div className="about-content">
                <p className="label-2 section-subtitle" id="about-label">Câu chuyện của chúng tôi</p>
                <h2 className="headline-1 section-title">Mỗi hương vị kể một câu chuyện</h2>
                <p className="section-text">
                  Mỗi món ăn tại The Crown Restaurant không chỉ là sự kết hợp tinh tế của
                  nguyên liệu thượng hạng, mà còn là một câu chuyện được kể bằng hương vị.
                  Chúng tôi tin rằng ẩm thực chính là nghệ thuật chạm đến trái tim và lưu
                  giữ những kỷ niệm khó quên.
                </p>
                <div className="contact-label">Liên hệ đặt bàn</div>
                <a href="tel:+842828282828" className="body-1 contact-number hover-underline">028 2828 2828</a>
                <Link to="/booking" className="btn btn-primary" aria-label="Đọc thêm về nhà hàng">
                  <span className="text text-1">Đọc thêm</span>
                  <span className="text text-2" aria-hidden="true">Đọc thêm</span>
                </Link>
              </div>

              <figure className="about-banner">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=570&h=570&fit=crop&q=80" 
                  width="570" 
                  height="570" 
                  loading="lazy" 
                  alt="Không gian nhà hàng The Crown" 
                  className="w-100" 
                  data-parallax-item 
                  data-parallax-speed="1" 
                />
                <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=285&h=285&fit=crop&q=80" 
                    width="285" 
                    height="285" 
                    loading="lazy" 
                    alt="Món ăn tinh tế" 
                    className="w-100" 
                  />
                </div>
                <div className="abs-img abs-img-2 has-before">
                  <div style={{
                    width: '133px',
                    height: '134px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    padding: '10px',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)'
                  }}>
                    ⭐<br />AWARD
                  </div>
                </div>
              </figure>
            </div>
          </section>

          {/* SPECIAL DISH */}
          <section className="special-dish text-center" aria-labelledby="dish-label">
            <div className="special-dish-banner">
              <img 
                src="https://img.freepik.com/premium-photo/wagyu-beef-steak-topped-with-foie-grass-truffle-sauce-generative-ai_681945-9718.jpg" 
                width="940" 
                height="900" 
                loading="lazy" 
                alt="Món đặc biệt thịt bò Wagyu" 
                className="img-cover" 
              />
            </div>
            <div className="special-dish-content bg-black-10">
              <div className="container">
                <div className="abs-img" style={{
                  width: '28px',
                  height: '41px',
                  background: '#D4AF37',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontSize: '0.7rem',
                  fontWeight: 'bold'
                }}>★</div>
                <p className="section-subtitle label-2">Món đặc biệt</p>
                <h2 className="headline-1 section-title" id="dish-label">Thịt bò Wagyu</h2>
                <p className="section-text">
                  Thịt bò Wagyu nổi tiếng thế giới nhờ sự mềm mại đặc trưng và
                  những vân mỡ cẩm thạch hòa quyện trong từng thớ thịt. Khi thưởng
                  thức, thịt tan ngay trong miệng, mang đến vị ngọt tự nhiên, béo
                  ngậy mà không hề ngấy. Đây là lựa chọn hoàn hảo cho những thực khách
                  muốn trải nghiệm sự tinh tế và đẳng cấp trong ẩm thực.
                </p>
                <div className="wrapper">
                  <del className="del body-3">800.000 VND</del>
                  <span className="span body-1">650.000 VND</span>
                </div>
                <a href="#menu" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault()
                  const menuSection = document.getElementById('menu')
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }} aria-label="Xem thực đơn">
                  <span className="text text-1">Xem thực đơn</span>
                  <span className="text text-2" aria-hidden="true">Xem thực đơn</span>
                </a>
              </div>
            </div>
          </section>

          {/* MENU */}
          <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
              <p className="section-subtitle text-center label-2">Tuyển Chọn Hảo Hạng</p>
              <h2 className="headline-1 section-title text-center">Thực Đơn Hảo Hạng</h2>
              <ul className="grid-list">
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://media.istockphoto.com/id/174801988/vi/anh/salad-hy-l%E1%BA%A1p.jpg?s=612x612&w=0&k=20&c=U2X5GADiIBstz9IHEcTOValjVA9X6UceOIffsgUYvqQ=" width="100" height="100" loading="lazy" alt="Salad Hy Lạp" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Salad Hy Lạp"
                          >
                            Salad Hy Lạp
                          </a>
                        </h3>
                        <span className="badge label-1">Theo mùa</span>
                        <span className="span title-2">250.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Sự kết hợp tươi mát của cà chua, ớt chuông xanh, dưa chuột thái lát,
                        hành tây, ô liu và phô mai feta mang đến hương vị Địa Trung Hải hài hòa, thanh nhẹ và đầy cuốn hút.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://tse2.mm.bing.net/th/id/OIP.MjyybOpc9HA1j698vxYG4QHaE3?rs=1&pid=ImgDetMain&o=7&rm=3" width="100" height="100" loading="lazy" alt="Lasagne" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Lasagne"
                          >
                            Lasagne
                          </a>
                        </h3>
                        <span className="span title-2">400.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Sự hòa quyện tinh tế giữa các lớp mì tươi, thịt bò xay, phô mai béo
                        ngậy và sốt cà chua đậm đà, tạo nên hương vị Ý truyền thống khó quên.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://s3-media3.fl.yelpcdn.com/bphoto/KvTca0DO3jUsz0YlDD8aAg/1000s.jpg" width="100" height="100" loading="lazy" alt="Bí ngô Butternut" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Bí ngô Butternut"
                          >
                            Bí ngô Butternut
                          </a>
                        </h3>
                        <span className="span title-2">150.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Súp bí ngô Butternut thơm ngậy, vị ngọt tự nhiên quyện cùng
                        kem tươi và gia vị đặc biệt, mang đến trải nghiệm ấm áp, tinh tế và đầy cuốn hút cho vị giác.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_800,h_533/w_49,x_9,y_9,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ieoyrhrjffeq5bejcohp/Tr%E1%BA%A3iNghi%E1%BB%87m%E1%BA%A8mTh%E1%BB%B1cB%C3%B2Wagyu%E1%BB%9FKabukicho,Tokyo.jpg" width="100" height="100" loading="lazy" alt="Wagyu Đặc Biệt" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Wagyu Đặc Biệt"
                          >
                            Wagyu Đặc Biệt
                          </a>
                        </h3>
                        <span className="badge label-1">New</span>
                        <span className="span title-2">650.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Thịt bò Wagyu cao cấp, mềm tan, vân mỡ cẩm thạch đặc trưng, được
                        chế biến tinh tế mang đến trải nghiệm vị giác đỉnh cao, đậm đà và ngọt tự nhiên.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://tse3.mm.bing.net/th/id/OIP.8pEJNSjBrCYf3MT0DolNogHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" width="100" height="100" loading="lazy" alt="Ô-liu Nhồi" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Ô-liu Nhồi"
                          >
                            Ô-liu Nhồi
                          </a>
                        </h3>
                        <span className="span title-2">180.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Ô-liu xanh nhồi hỗn hợp thịt lợn xay, hạt thông và gia vị, chiên giòn
                        bên ngoài, mềm mại bên trong, mang đến hương vị Địa Trung Hải đặc trưng, đậm đà và hấp dẫn.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-card hover:card">
                    <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                      <img src="https://bepxua.vn/wp-content/uploads/2022/02/ca-loc-nuong-mo-hanh-1.jpg" width="100" height="100" loading="lazy" alt="Cá Opu" className="img-cover" />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a 
                            href="#menu" 
                            className="card-title"
                            onClick={(e) => {
                              e.preventDefault()
                              const menuSection = document.getElementById('menu')
                              if (menuSection) {
                                menuSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            aria-label="Xem chi tiết món Cá Opu"
                          >
                            Cá Opu
                          </a>
                        </h3>
                        <span className="span title-2">490.000 VND</span>
                      </div>
                      <p className="card-text label-1">
                        Cá Opu tươi ngon, nướng hoàn hảo với lớp da giòn rụm, thịt cá mềm
                        ngọt, kết hợp cùng sốt chanh dây thơm lừng, mang đến trải nghiệm ẩm thực biển đầy tinh tế và hấp dẫn.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="menu-text text-center">
                Hàng ngày từ <span className="span">8:00</span> đến <span className="span">22:00</span>
              </p>
              <Link to="/menu" className="btn btn-primary" aria-label="Xem toàn bộ thực đơn">
                <span className="text text-1">Xem thực đơn</span>
                <span className="text text-2" aria-hidden="true">Xem thực đơn</span>
              </Link>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section 
            className="section testi text-center has-bg-image" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&q=80')" }} 
            aria-label="testimonials"
          >
            <div className="container">
              <div className="quote">"</div>
              <p className="headline-2 testi-text">
                Trải nghiệm ẩm thực tại The Crown Restaurant thực sự tuyệt vời! Mỗi món ăn đều được chế biến tinh tế,
                hương vị đậm đà và trình bày đẹp mắt. Dịch vụ chuyên nghiệp và không gian ấm cúng làm tôi cảm thấy như
                đang ở nhà. Đây chắc chắn là điểm đến yêu thích của tôi cho những dịp đặc biệt.
              </p>
              <div className="wrapper" aria-hidden="true">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>
              <div className="profile">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" 
                  width="100" 
                  height="100" 
                  loading="lazy" 
                  alt="Khách hàng Lê Thanh Dũng" 
                  className="img" 
                />
                <p className="label-2 profile-name">Khách Hàng Lê Thanh Dũng</p>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="section features text-center" aria-label="features">
            <div className="container">
              <p className="section-subtitle label-2">Lý do chọn chúng tôi</p>
              <h2 className="headline-1 section-title">Sức mạnh của chúng tôi</h2>
              <ul className="grid-list">
                <li className="feature-item">
                  <div className="feature-card">
                    <div className="card-icon">
                      <ion-icon name="shield-checkmark-outline" style={{ fontSize: '80px', color: '#D4AF37' }}></ion-icon>
                    </div>
                    <h3 className="title-2 card-title">Thực phẩm vệ sinh</h3>
                    <p className="label-1 card-text">
                      Chào mừng quý khách đến với nhà hàng của chúng tôi – nơi tinh hoa ẩm thực hội tụ.
                      Tại đây, mỗi món ăn đều được chế biến từ nguyên liệu tươi ngon, tuyển chọn kỹ lưỡng,
                      mang đến hương vị tinh tế và trải nghiệm ẩm thực khó quên.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-card">
                    <div className="card-icon">
                      <ion-icon name="leaf-outline" style={{ fontSize: '80px', color: '#D4AF37' }}></ion-icon>
                    </div>
                    <h3 className="title-2 card-title">Môi trường trong lành</h3>
                    <p className="label-1 card-text">
                      Chào mừng quý khách đến với <strong>THE CROWN</strong> – nơi nghệ thuật ẩm thực hòa quyện cùng không gian đẳng cấp.
                      Không gian sang trọng, trong lành và ấm cúng của nhà hàng tạo điều kiện hoàn hảo để quý khách thưởng thức bữa ăn tuyệt hảo.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-card">
                    <div className="card-icon">
                      <ion-icon name="restaurant-outline" style={{ fontSize: '80px', color: '#D4AF37' }}></ion-icon>
                    </div>
                    <h3 className="title-2 card-title">Đầu bếp lành nghề</h3>
                    <p className="label-1 card-text">
                      Tại <strong>THE CROWN</strong>, đội ngũ <strong>đầu bếp tinh hoa</strong> của chúng tôi không chỉ giàu kinh nghiệm mà còn đầy đam mê,
                      luôn sáng tạo để mang đến những món ăn hoàn hảo, kết hợp hương vị tinh tế và trình bày nghệ thuật.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-card">
                    <div className="card-icon">
                      <ion-icon name="calendar-outline" style={{ fontSize: '80px', color: '#D4AF37' }}></ion-icon>
                    </div>
                    <h3 className="title-2 card-title">Sự kiện & Tiệc tùng</h3>
                    <p className="label-1 card-text">
                      <strong>THE CROWN</strong> tự hào mang đến dịch vụ <strong>tiệc & sự kiện đặc biệt</strong>,
                      nơi mỗi buổi lễ, hội nghị hay bữa tiệc đều được chăm chút tỉ mỉ từ không gian, ẩm thực đến phong cách phục vụ.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* EVENT */}
          <section className="section event bg-black-10" aria-label="event">
            <div className="container">
              <p className="section-subtitle label-2 text-center">Cập nhật mới nhất</p>
              <h2 className="section-title headline-1 text-center">Sự kiện sắp tới</h2>
              <ul className="grid-list">
                <li>
                  <div className="event-card has-before hover:shine">
                    <div className="card-banner img-holder" style={{ '--width': '350', '--height': '450' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=350&h=450&fit=crop&q=80" 
                        width="350" 
                        height="450" 
                        loading="lazy" 
                        alt="Sự kiện ẩm thực tháng 9" 
                        className="img-cover" 
                      />
                      <time className="publish-date label-2" dateTime="2025-09-15">15/12/2025</time>
                    </div>
                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Thực phẩm, Hương vị</p>
                      <h3 className="card-title title-2 text-center">
                        Hương vị tuyệt vời khiến bạn chỉ muốn thưởng thức bằng cả ánh nhìn.
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="event-card has-before hover:shine">
                    <div className="card-banner img-holder" style={{ '--width': '350', '--height': '450' }}>
                      <img 
                        src="https://tse4.mm.bing.net/th/id/OIP.7SQZy3KteqiV7OHGPyr5JgHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3" 
                        width="350" 
                        height="450" 
                        loading="lazy" 
                        alt="Thực phẩm lành mạnh" 
                        className="img-cover" 
                      />
                      <time className="publish-date label-2" dateTime="2025-09-08">08/12/2025</time>
                    </div>
                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Thực phẩm lành mạnh</p>
                      <h3 className="card-title title-2 text-center">
                        Thực phẩm lành mạnh, cuộc sống hạnh phúc.
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="event-card has-before hover:shine">
                    <div className="card-banner img-holder" style={{ '--width': '350', '--height': '450' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=350&h=450&fit=crop&q=80" 
                        width="350" 
                        height="450" 
                        loading="lazy" 
                        alt="Công thức bí mật" 
                        className="img-cover" 
                      />
                      <time className="publish-date label-2" dateTime="2025-09-03">03/12/2025</time>
                    </div>
                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Công thức</p>
                      <h3 className="card-title title-2 text-center">
                        Công thức nấu ăn bí mật từ những nguyên liệu thượng hạng.
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default Home

